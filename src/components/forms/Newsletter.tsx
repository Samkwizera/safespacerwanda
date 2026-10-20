"use client";

import { useId } from "react";
import { cn } from "@/lib/cn";
import { Container } from "../Section";
import { useFormSubmit } from "./useFormSubmit";
import { Consent, Honeypot, SubmitButton } from "./Fields";

/** The newsletter sign-up form on its own, so it can sit inside a hero or a section. */
export function NewsletterForm({ light = false, cta = "Subscribe", className }: { light?: boolean; cta?: string; className?: string }) {
  const { status, error, fieldErrors: e, submit } = useFormSubmit("newsletter");
  const id = useId();

  if (status === "success")
    return (
      <div role="status" className={cn("rounded-2xl p-6", light ? "bg-white/10 text-white" : "bg-mint text-ink", className)}>
        <p className="text-xl font-extrabold">You&apos;re on the list.</p>
        <p className={cn("mt-1", light ? "text-[#c9cee6]" : "text-ink-soft")}>Thanks for subscribing. You can unsubscribe any time.</p>
      </div>
    );

  return (
    <form noValidate onSubmit={(ev) => { ev.preventDefault(); submit(ev.currentTarget); }} className={cn("relative space-y-3", className)}>
      <Honeypot />
      <label htmlFor={`${id}-email`} className="sr-only">Email address</label>
      <div className="flex flex-col gap-2.5 sm:flex-row">
        <input id={`${id}-email`} type="email" name="email" required autoComplete="email" placeholder="Your email address"
          aria-invalid={!!e.email} aria-describedby={e.email ? `${id}-email-error` : undefined}
          className={cn(
            "min-h-12 w-full rounded-full border-[1.5px] px-5 text-[16px] transition-[border-color,box-shadow] duration-200 focus:outline-none focus:ring-4",
            light
              ? "border-white/25 bg-white/10 text-white placeholder:text-[#c9cee6] focus:border-sun focus:ring-sun/25"
              : "border-line bg-white text-ink placeholder:text-ink-soft/70 hover:border-[#c9cee6] focus:border-blue focus:ring-blue/15",
          )} />
        <SubmitButton light={light} submitting={status === "submitting"}>{cta}</SubmitButton>
      </div>
      {e.email && <p id={`${id}-email-error`} className={cn("text-sm font-semibold", light ? "text-sun" : "text-[#a62a17]")}>{e.email}</p>}
      <Consent light={light} error={e.consent}>Yes, email me SafeSpace Rwanda updates. I can unsubscribe any time.</Consent>
      {error && !e.email && !e.consent && <p role="alert" className={cn("text-sm font-semibold", light ? "text-sun" : "text-[#a62a17]")}>{error}</p>}
    </form>
  );
}

export function Newsletter() {
  return (
    <section aria-labelledby="newsletter-title" className="py-16 sm:py-24">
      <Container>
        <div className="on-dark grid items-center gap-10 rounded-3xl bg-ink px-6 py-12 sm:px-12 sm:py-16 lg:grid-cols-2">
          <div>
            <h2 id="newsletter-title" className="text-[2rem] font-extrabold leading-[1.1] text-white sm:text-[2.6rem]">
              A little more connection, straight to your inbox.
            </h2>
            <p className="mt-4 max-w-lg text-lg text-[#c9cee6]">
              Get uplifting stories, community updates, mental wellness resources, and opportunities to connect.
            </p>
          </div>
          <NewsletterForm light />
        </div>
      </Container>
    </section>
  );
}
