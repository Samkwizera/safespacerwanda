"use client";

import { useRef, useState } from "react";
import { HONEYPOT, schemas, type FormKind, type SubmitResult } from "@/lib/forms";

type Status = "idle" | "submitting" | "success" | "error";

/** Validates on the client, posts to /api/submit, and only reports success when the server confirms it. */
export function useFormSubmit(kind: FormKind) {
  const startedAt = useRef(Date.now());
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>();
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function submit(form: HTMLFormElement) {
    const fd = new FormData(form);
    const data: Record<string, unknown> = {};
    for (const key of new Set(fd.keys())) {
      if (key === HONEYPOT) continue;
      const all = fd.getAll(key);
      data[key] = key === "interests" ? all : all[0];
    }
    data.consent = fd.get("consent") === "on";

    const local = schemas[kind].safeParse(data);
    if (!local.success) {
      const errs: Record<string, string> = {};
      for (const i of local.error.issues) errs[String(i.path[0])] ??= i.message;
      setFieldErrors(errs);
      setError("Please check the highlighted fields.");
      setStatus("error");
      form.querySelector<HTMLElement>(`[name="${Object.keys(errs)[0]}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    setError(undefined);
    setFieldErrors({});
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind, data, startedAt: startedAt.current, [HONEYPOT]: fd.get(HONEYPOT) }),
      });
      const result = (await res.json()) as SubmitResult;
      if (result.ok) {
        setStatus("success");
        form.reset();
      } else {
        setFieldErrors(result.fieldErrors ?? {});
        setError(result.error);
        setStatus("error");
      }
    } catch {
      setError("We couldn't reach our server. Check your connection and try again.");
      setStatus("error");
    }
  }

  return { status, error, fieldErrors, submit };
}
