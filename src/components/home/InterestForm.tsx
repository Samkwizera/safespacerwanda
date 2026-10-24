"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { HONEYPOT, interests, schemas, type SubmitResult } from "@/lib/forms";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "success" | "demo" | "error";

const field =
  "mt-2 w-full rounded-2xl border border-line bg-ivory-soft px-4 py-3.5 text-base text-ink placeholder:text-ink-soft/60 transition-colors focus:border-forest focus:outline-none focus-visible:outline-2 aria-[invalid=true]:border-terracotta";

/**
 * Interest form. `connected` is true only when a submission service is
 * configured on the server; otherwise the form is clearly a demonstration
 * and never reports a successful submission.
 */
export function InterestForm({ connected }: { connected: boolean }) {
  const startedAt = useRef(Date.now());
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>();
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      name: fd.get("name"),
      email: fd.get("email"),
      interest: fd.get("interest"),
      message: fd.get("message"),
      consent: fd.get("consent") === "on",
    };

    const local = schemas.interest.safeParse(data);
    if (!local.success) {
      const errs: Record<string, string> = {};
      for (const i of local.error.issues) errs[String(i.path[0])] ??= i.message;
      setErrors(errs);
      setError("Please check the highlighted fields.");
      setStatus("error");
      form.querySelector<HTMLElement>(`[name="${Object.keys(errs)[0]}"]`)?.focus();
      return;
    }
    setErrors({});
    setError(undefined);

    if (!connected) {
      setStatus("demo");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "interest", data, startedAt: startedAt.current, [HONEYPOT]: fd.get(HONEYPOT) }),
      });
      const result = (await res.json()) as SubmitResult;
      if (result.ok) {
        setStatus("success");
        form.reset();
      } else {
        setErrors(result.fieldErrors ?? {});
        setError(result.error);
        setStatus("error");
      }
    } catch {
      setError("We couldn't reach our server. Check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-[28px] bg-sage-pale p-8 sm:p-10">
        <p className="label text-terracotta">Received</p>
        <p className="mt-4 font-serif text-3xl text-forest">Thank you for reaching out.</p>
        <p className="mt-3 text-ink-soft">We&apos;ve received your message and will be in touch by email.</p>
      </div>
    );
  }

  const err = (name: string) =>
    errors[name] ? <p id={`${name}-error`} className="mt-1.5 text-sm text-terracotta">{errors[name]}</p> : null;
  const aria = (name: string) => ({ "aria-invalid": !!errors[name], "aria-describedby": errors[name] ? `${name}-error` : undefined });

  return (
    <form noValidate onSubmit={onSubmit} className="rounded-[28px] bg-ivory-soft/60 p-6 ring-1 ring-line sm:p-10">
      {!connected && (
        <p className="label mb-8 inline-flex rounded-full bg-terracotta-pale px-3 py-1.5 text-[0.62rem] text-ink">
          Demonstration form · submissions are not sent yet
        </p>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          Name
          <input name="name" autoComplete="name" className={field} {...aria("name")} />
          {err("name")}
        </label>
        <label className="block text-sm font-medium text-ink">
          Email
          <input name="email" type="email" autoComplete="email" className={field} {...aria("email")} />
          {err("email")}
        </label>
      </div>

      <fieldset className="mt-7" {...aria("interest")}>
        <legend className="text-sm font-medium text-ink">I&apos;m interested in</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {interests.map((i) => (
            <label key={i} className="cursor-pointer">
              <input type="radio" name="interest" value={i} className="peer sr-only" />
              <span className="inline-flex rounded-full border border-line bg-ivory-soft px-4 py-2.5 text-sm text-ink-soft transition-colors peer-checked:border-forest peer-checked:bg-forest peer-checked:text-ivory peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-terracotta hover:border-forest/50">
                {i}
              </span>
            </label>
          ))}
        </div>
        {err("interest")}
      </fieldset>

      <label className="mt-7 block text-sm font-medium text-ink">
        Message <span className="font-normal text-ink-soft">(optional)</span>
        <textarea name="message" rows={4} className={cn(field, "resize-y")} aria-describedby="message-help" />
        <span id="message-help" className="mt-2 block text-sm font-normal text-ink-soft">
          Tell us how you&apos;d like to get involved. Please avoid sharing sensitive personal or medical information.
        </span>
        {err("message")}
      </label>

      {/* Honeypot: hidden from people, tempting to bots. */}
      <input type="text" name={HONEYPOT} tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

      <label className="mt-7 flex gap-3 text-sm text-ink-soft">
        <input type="checkbox" name="consent" className="mt-0.5 size-4 shrink-0 accent-forest" {...aria("consent")} />
        <span>
          I agree that SafeSpace Rwanda may use these details to contact me, as described in the{" "}
          <Link href="/privacy" className="text-forest underline">privacy policy</Link>.
        </span>
      </label>
      {err("consent")}

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex min-h-12 items-center rounded-full bg-forest px-7 text-[15px] font-medium text-ivory transition-colors hover:bg-forest-soft disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>
        <div aria-live="polite" className="text-sm">
          {status === "error" && error && <p className="text-terracotta">{error}</p>}
          {status === "demo" && (
            <p className="text-ink-soft">
              Looks good—but this is a demonstration form, so nothing was sent. Submissions will open soon.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
