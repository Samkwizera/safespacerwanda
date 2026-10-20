import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { HONEYPOT, MIN_FILL_MS, formKinds, schemas, type FormKind, type SubmitResult } from "@/lib/forms";

export const runtime = "nodejs";

// Best-effort per-instance rate limit. For production scale, swap in a shared store (e.g. Upstash).
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function rateLimited(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  return recent.length > MAX_PER_WINDOW;
}

const tables: Record<FormKind, string> = {
  join: "community_signups",
  volunteer: "volunteer_applications",
  partner: "partner_inquiries",
  contact: "contact_messages",
  newsletter: "newsletter_subscribers",
};

function json(body: SubmitResult, status = 200) {
  return NextResponse.json(body, { status });
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json({ ok: false, error: "We couldn't read that submission. Please try again." }, 400);
  }

  const kind = body.kind as FormKind;
  if (!formKinds.includes(kind)) return json({ ok: false, error: "Unknown form." }, 400);

  // Spam checks: a filled honeypot or an implausibly fast submission is quietly rejected.
  const startedAt = Number(body.startedAt);
  if (body[HONEYPOT] || !startedAt || Date.now() - startedAt < MIN_FILL_MS) {
    return json({ ok: false, error: "Something went wrong. Please wait a moment and try again." }, 400);
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(`${kind}:${ip}`)) {
    return json({ ok: false, error: "That's a lot of submissions in a short time. Please try again later." }, 429);
  }

  const parsed = schemas[kind].safeParse(body.data);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      fieldErrors[key] ??= issue.message;
    }
    return json({ ok: false, error: "Please check the highlighted fields.", fieldErrors }, 422);
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    // Never pretend a submission was saved.
    console.error("[submit] Supabase is not configured; submission was not stored.");
    return json({ ok: false, error: "Our sign-up system isn't connected yet. Please try again soon, or email us directly." }, 503);
  }

  const supabase = createClient(url, key, { auth: { persistSession: false } });
  const { consent, ...fields } = parsed.data as Record<string, unknown> & { consent: true };
  const row: Record<string, unknown> = { consent_given: consent, consent_at: new Date().toISOString() };
  for (const [k, v] of Object.entries(fields)) row[k.replace(/[A-Z]/g, (c) => `_${c.toLowerCase()}`)] = v === "" ? null : v;

  const { error } = await supabase.from(tables[kind]).insert(row);
  if (error) {
    // Duplicate newsletter email: treat as success so we don't reveal who is subscribed.
    if (kind === "newsletter" && error.code === "23505") return json({ ok: true });
    console.error(`[submit] insert into ${tables[kind]} failed:`, error.message);
    return json({ ok: false, error: "We couldn't save that just now. Please try again in a moment." }, 500);
  }

  return json({ ok: true });
}
