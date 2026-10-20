"use client";

import { Mail } from "lucide-react";
import { Container } from "../Section";
import { Reveal } from "../Reveal";
import { useFormSubmit } from "./useFormSubmit";
import { Consent, Honeypot, SubmitButton } from "./Fields";

export function Newsletter() {
  const { status, error, fieldErrors: e, submit } = useFormSubmit("newsletter");

  return (
    <section aria-labelledby="newsletter-title" className="py-20 sm:py-28">
      <Container>
        <Reveal className="on-dark relative overflow-hidden rounded-[3rem] bg-forest px-6 py-14 sm:px-14 sm:py-20">
          <div aria-hidden className="absolute -right-20 -top-24 h-80 w-80 animate-float-slow rounded-full bg-peach/25" />
          <div aria-hidden className="absolute -bottom-24 left-1/3 h-64 w-64 animate-float rounded-full bg-sage/15" />
          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-peach text-forest"><Mail className="h-5 w-5" aria-hidden /></span>
              <h2 id="newsletter-title" className="mt-6 text-4xl font-extrabold leading-[1.05] text-cream sm:text-5xl">
                A little more connection, straight to your inbox.
              </h2>
              <p className="mt-5 max-w-lg text-lg text-sage-soft">
                Get uplifting stories, community updates, mental wellness resources, and opportunities to connect.
              </p>
            </div>

            {status === "success" ? (
              <div role="status" className="rounded-3xl bg-white/10 p-8 text-cream">
                <p className="font-display text-2xl font-extrabold">You&apos;re on the list.</p>
                <p className="mt-2 text-sage-soft">Thanks for subscribing. You can unsubscribe any time.</p>
              </div>
            ) : (
              <form noValidate onSubmit={(ev) => { ev.preventDefault(); submit(ev.currentTarget); }} className="relative space-y-4">
                <Honeypot />
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input id="newsletter-email" type="email" name="email" required autoComplete="email" placeholder="you@example.com"
                    aria-invalid={!!e.email} aria-describedby={e.email ? "newsletter-email-error" : undefined}
                    className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-4 text-cream placeholder:text-sage focus:border-peach focus:outline-none focus:ring-4 focus:ring-peach/30" />
                  <SubmitButton light submitting={status === "submitting"}>Subscribe</SubmitButton>
                </div>
                {e.email && <p id="newsletter-email-error" className="text-sm font-medium text-peach">{e.email}</p>}
                <Consent light error={e.consent}>Yes, email me SafeSpace Rwanda updates. I can unsubscribe any time.</Consent>
                {error && !e.email && !e.consent && <p role="alert" className="text-sm font-medium text-peach">{error}</p>}
              </form>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
