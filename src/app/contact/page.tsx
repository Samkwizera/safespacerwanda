import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Instagram, Linkedin } from "@/components/BrandIcons";
import { Disclaimer } from "@/components/Disclaimer";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Section";
import { ContactForm } from "@/components/forms/InvolveForms";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with SafeSpace Rwanda.",
};

const channel = "press flex items-center gap-3 rounded-2xl bg-mist p-5 font-bold text-ink hover:bg-sky";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Say hello. We'd love to hear from you."
        intro="Questions, ideas, collaborations, or just want to know more? Send us a note."
      />
      <Container className="grid gap-10 py-14 sm:py-20 lg:grid-cols-12">
        <div className="space-y-3 lg:col-span-4">
          <a href={`mailto:${site.email}`} className={channel}>
            <Mail className="h-5 w-5 shrink-0 text-blue" aria-hidden />
            <span className="min-w-0"><span className="block text-sm font-semibold text-ink-soft">Email</span><span className="block break-all">{site.email}</span></span>
          </a>
          <div className="grid grid-cols-2 gap-3">
            <a href={site.social.instagram} className={channel}>
              <Instagram className="h-5 w-5 text-blue" aria-hidden /> Instagram
            </a>
            <a href={site.social.linkedin} className={channel}>
              <Linkedin className="h-5 w-5 text-blue" aria-hidden /> LinkedIn
            </a>
          </div>
          <Disclaimer className="!mt-6" />
        </div>
        <div className="lg:col-span-8">
          <ContactForm />
        </div>
      </Container>
    </>
  );
}
