"use client";

import Link from "next/link";
import { ageRanges } from "@/lib/forms";
import { useFormSubmit } from "./useFormSubmit";
import { Consent, FormError, FormSuccess, Honeypot, SelectField, SubmitButton, TextArea, TextField } from "./Fields";

const privacyNote = (
  <p className="rounded-xl bg-mist px-4 py-3 text-sm leading-relaxed text-ink-soft">
    Please don&apos;t share personal health details here. This form is just for getting to know you. If you need
    support, see our <Link href="/resources/reaching-out-for-support" className="font-semibold text-blue underline">guide to reaching out</Link>.
  </p>
);

export function JoinForm() {
  const { status, error, fieldErrors: e, submit } = useFormSubmit("join");
  if (status === "success")
    return <FormSuccess title="Welcome, we're glad you're here.">We&apos;ve saved your details and will be in touch when there&apos;s something to join.</FormSuccess>;
  return (
    <form noValidate onSubmit={(ev) => { ev.preventDefault(); submit(ev.currentTarget); }} className="relative space-y-5">
      <Honeypot />
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField label="Your name" name="name" autoComplete="name" error={e.name} />
        <TextField label="Email" name="email" type="email" autoComplete="email" error={e.email} />
        <SelectField label="Age range" name="ageRange" options={ageRanges} error={e.ageRange} />
        <TextField label="Where are you based?" name="location" placeholder="e.g. Kigali" optional error={e.location} />
      </div>
      <fieldset>
        <legend className="text-[15px] font-bold text-ink">What sounds fun to you? <span className="font-normal text-ink-soft">(optional)</span></legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {["Sports meetups", "Conversations", "Community events", "Awareness work"].map((i) => (
            <label key={i} className="cursor-pointer">
              <input type="checkbox" name="interests" value={i} className="peer sr-only" />
              <span className="press inline-block rounded-full border-[1.5px] border-line bg-white px-4 py-2 text-[15px] font-semibold text-ink-soft hover:border-[#c9cee6] peer-checked:border-blue peer-checked:bg-blue peer-checked:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-blue/25">
                {i}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      {privacyNote}
      <Consent error={e.consent}>I&apos;m happy for SafeSpace Rwanda to store these details and email me about community activities.</Consent>
      <FormError message={error} />
      <SubmitButton submitting={status === "submitting"}>Join the community</SubmitButton>
    </form>
  );
}

export function VolunteerForm() {
  const { status, error, fieldErrors: e, submit } = useFormSubmit("volunteer");
  if (status === "success")
    return <FormSuccess title="Thank you for raising your hand.">We&apos;ve received your details and will reach out when volunteer opportunities open up.</FormSuccess>;
  return (
    <form noValidate onSubmit={(ev) => { ev.preventDefault(); submit(ev.currentTarget); }} className="relative space-y-5">
      <Honeypot />
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField label="Your name" name="name" autoComplete="name" error={e.name} />
        <TextField label="Email" name="email" type="email" autoComplete="email" error={e.email} />
        <SelectField label="Age range" name="ageRange" options={ageRanges} error={e.ageRange} />
        <TextField label="Availability" name="availability" placeholder="e.g. weekends" optional error={e.availability} />
      </div>
      <TextArea label="How would you like to help?" name="skills" hint="Organising, photography, coaching, design, social media… anything goes." error={e.skills} />
      {privacyNote}
      <Consent error={e.consent}>I&apos;m happy for SafeSpace Rwanda to store these details and contact me about volunteering.</Consent>
      <FormError message={error} />
      <SubmitButton submitting={status === "submitting"}>Send my application</SubmitButton>
    </form>
  );
}

export function PartnerForm() {
  const { status, error, fieldErrors: e, submit } = useFormSubmit("partner");
  if (status === "success")
    return <FormSuccess title="Thanks for reaching out.">We&apos;ve received your note and will reply by email.</FormSuccess>;
  return (
    <form noValidate onSubmit={(ev) => { ev.preventDefault(); submit(ev.currentTarget); }} className="relative space-y-5">
      <Honeypot />
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField label="Your name" name="name" autoComplete="name" error={e.name} />
        <TextField label="Work email" name="email" type="email" autoComplete="email" error={e.email} />
      </div>
      <TextField label="Organisation" name="organization" autoComplete="organization" error={e.organization} />
      <TextArea label="What would you like to create together?" name="idea" rows={5} error={e.idea} />
      <Consent error={e.consent}>I&apos;m happy for SafeSpace Rwanda to store these details and reply to my enquiry.</Consent>
      <FormError message={error} />
      <SubmitButton submitting={status === "submitting"}>Start the conversation</SubmitButton>
    </form>
  );
}

export function ContactForm() {
  const { status, error, fieldErrors: e, submit } = useFormSubmit("contact");
  if (status === "success")
    return <FormSuccess title="Message received.">Thank you for writing to us. We&apos;ll reply by email as soon as we can.</FormSuccess>;
  return (
    <form noValidate onSubmit={(ev) => { ev.preventDefault(); submit(ev.currentTarget); }} className="relative space-y-5">
      <Honeypot />
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField label="Your name" name="name" autoComplete="name" error={e.name} />
        <TextField label="Email" name="email" type="email" autoComplete="email" error={e.email} />
      </div>
      <TextField label="Subject" name="subject" error={e.subject} />
      <TextArea label="Message" name="message" rows={6} error={e.message} />
      {privacyNote}
      <Consent error={e.consent}>I&apos;m happy for SafeSpace Rwanda to store this message and reply to me by email.</Consent>
      <FormError message={error} />
      <SubmitButton submitting={status === "submitting"}>Send message</SubmitButton>
    </form>
  );
}
