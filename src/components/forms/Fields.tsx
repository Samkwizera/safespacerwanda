"use client";

import Link from "next/link";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { useId, type InputHTMLAttributes, type ReactNode, type TextareaHTMLAttributes } from "react";
import { HONEYPOT } from "@/lib/forms";
import { cn } from "@/lib/cn";

const control =
  "mt-2 w-full rounded-2xl border bg-white px-4 py-3.5 text-[15px] text-charcoal placeholder:text-muted/60 transition focus:outline-none focus:ring-4";
const ok = "border-forest/15 focus:border-forest focus:ring-sage/40";
const bad = "border-red-700/60 focus:border-red-700 focus:ring-red-200";

function Wrapper({ label, hint, error, id, children, optional }: { label: string; hint?: string; error?: string; id: string; children: ReactNode; optional?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-forest">
        {label} {optional && <span className="font-normal text-muted">(optional)</span>}
      </label>
      {children}
      {hint && !error && <p id={`${id}-hint`} className="mt-1.5 text-sm text-muted">{hint}</p>}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-red-800">
          <AlertCircle className="h-4 w-4" aria-hidden /> {error}
        </p>
      )}
    </div>
  );
}

type Common = { label: string; name: string; error?: string; hint?: string; optional?: boolean };

export function TextField({ label, name, error, hint, optional, ...rest }: Common & InputHTMLAttributes<HTMLInputElement>) {
  const id = useId();
  return (
    <Wrapper label={label} hint={hint} error={error} id={id} optional={optional}>
      <input id={id} name={name} aria-invalid={!!error} aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        required={!optional} className={cn(control, error ? bad : ok)} {...rest} />
    </Wrapper>
  );
}

export function TextArea({ label, name, error, hint, optional, ...rest }: Common & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const id = useId();
  return (
    <Wrapper label={label} hint={hint} error={error} id={id} optional={optional}>
      <textarea id={id} name={name} rows={4} aria-invalid={!!error} aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        required={!optional} className={cn(control, "resize-y", error ? bad : ok)} {...rest} />
    </Wrapper>
  );
}

export function SelectField({ label, name, error, options }: Common & { options: readonly string[] }) {
  const id = useId();
  return (
    <Wrapper label={label} error={error} id={id}>
      <select id={id} name={name} defaultValue="" required aria-invalid={!!error} aria-describedby={error ? `${id}-error` : undefined}
        className={cn(control, "appearance-none", error ? bad : ok)}>
        <option value="" disabled>Choose one</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </Wrapper>
  );
}

export function Honeypot() {
  return (
    <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label>Leave this empty<input type="text" name={HONEYPOT} tabIndex={-1} autoComplete="off" /></label>
    </div>
  );
}

export function Consent({ error, children, light = false }: { error?: string; children: ReactNode; light?: boolean }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className={cn("flex cursor-pointer items-start gap-3 text-sm leading-relaxed", light ? "text-sage-soft" : "text-charcoal")}>
        <input id={id} type="checkbox" name="consent" required aria-invalid={!!error} aria-describedby={error ? `${id}-error` : undefined}
          className="mt-0.5 h-5 w-5 shrink-0 rounded accent-forest" />
        <span>
          {children} Read our{" "}
          <Link href="/privacy" className={cn("underline underline-offset-2", light ? "text-peach" : "text-forest")}>privacy policy</Link>.
        </span>
      </label>
      {error && <p id={`${id}-error`} className={cn("mt-1.5 text-sm font-medium", light ? "text-peach" : "text-red-800")}>{error}</p>}
    </div>
  );
}

export function SubmitButton({ submitting, children, light = false }: { submitting: boolean; children: ReactNode; light?: boolean }) {
  return (
    <button type="submit" disabled={submitting}
      className={cn("inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold transition active:scale-[.97] disabled:opacity-70",
        light ? "bg-peach text-forest hover:bg-peach-deep" : "bg-forest text-cream hover:bg-forest-deep")}>
      {submitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
      {submitting ? "Sending…" : children}
    </button>
  );
}

export function FormError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="flex items-start gap-2 rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-900">
      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden /> {message}
    </p>
  );
}

export function FormSuccess({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div role="status" className="rounded-3xl bg-sage-soft p-8 text-center">
      <CheckCircle2 className="mx-auto h-10 w-10 text-forest" aria-hidden />
      <p className="mt-4 font-display text-2xl font-extrabold text-forest">{title}</p>
      <p className="mt-2 text-muted">{children}</p>
    </div>
  );
}
