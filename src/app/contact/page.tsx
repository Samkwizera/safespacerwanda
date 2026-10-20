import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Instagram, Linkedin } from "@/components/BrandIcons";
import { Disclaimer } from "@/components/Disclaimer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Container } from "@/components/Section";
import { ContactForm } from "@/components/forms/InvolveForms";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with SafeSpace Rwanda.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Say hello. <span className="text-forest/55">We&apos;d love to hear from you.</span></>}
        intro="Questions, ideas, collaborations, or just want to know more? Send us a note."
      />
      <Container className="grid gap-8 pb-28 lg:grid-cols-12">
        <Reveal className="space-y-5 lg:col-span-4">
          <a href={`mailto:${site.email}`} className="flex items-center gap-4 rounded-[2rem] bg-forest p-6 text-cream transition hover:bg-forest-deep">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-peach text-forest"><Mail className="h-5 w-5" aria-hidden /></span>
            <span className="min-w-0"><span className="block text-sm text-sage">Email</span><span className="block break-all font-semibold">{site.email}</span></span>
          </a>
          <div className="flex gap-3">
            <a href={site.social.instagram} className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white p-4 font-semibold text-forest ring-1 ring-forest/10 hover:bg-sage-soft">
              <Instagram className="h-5 w-5" aria-hidden /> Instagram
            </a>
            <a href={site.social.linkedin} className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white p-4 font-semibold text-forest ring-1 ring-forest/10 hover:bg-sage-soft">
              <Linkedin className="h-5 w-5" aria-hidden /> LinkedIn
            </a>
          </div>
          <Disclaimer />
        </Reveal>
        <div className="rounded-[2.5rem] bg-white p-6 ring-1 ring-forest/5 sm:p-10 lg:col-span-8">
          <ContactForm />
        </div>
      </Container>
    </>
  );
}
