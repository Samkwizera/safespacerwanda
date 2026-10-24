import { Container, Label } from "../Button";
import { reveal } from "@/lib/reveal";
import { InterestForm } from "./InterestForm";
import { site } from "@/content/site";

export function Contact() {
  // The form only reports success when the submission service is configured.
  const connected = Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
  return (
    <section id="contact" aria-labelledby="contact-title" className="pb-24 sm:pb-32">
      <Container className="grid gap-12 border-t border-line pt-24 sm:pt-32 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div {...reveal()}>
          <Label>Contact</Label>
          <h2 id="contact-title" className="mt-5 text-5xl text-forest sm:text-6xl">
            Let&apos;s start a <em className="font-light text-sage">conversation.</em>
          </h2>
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-ink-soft">
            Whether you want to play, help out or work with us, we&apos;d love to hear from you.
          </p>
          {site.email && (
            <p className="mt-6 text-ink-soft">
              Or email <a href={`mailto:${site.email}`} className="text-forest underline">{site.email}</a>
            </p>
          )}
          <p className="mt-10 max-w-sm border-l-2 border-terracotta pl-4 text-sm leading-relaxed text-ink-soft">
            If you or someone you know is in immediate danger, please contact local emergency services.
          </p>
        </div>
        <div {...reveal(120)}>
          <InterestForm connected={connected} />
        </div>
      </Container>
    </section>
  );
}
