import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Section";
import { JoinForm, PartnerForm, VolunteerForm } from "@/components/forms/InvolveForms";
import { InvolveCards } from "@/components/sections/InvolveCards";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Join the SafeSpace Rwanda community, volunteer, or partner with us to create opportunities for young people.",
};

const sections = [
  { id: "join", label: "Join the community", title: "Come as you are.", form: <JoinForm />, field: "bg-sky",
    text: "Tell us a little about yourself and we'll let you know when there's a game, conversation or gathering you can join." },
  { id: "volunteer", label: "Become a volunteer", title: "Help make it happen.", form: <VolunteerForm />, field: "bg-sunsoft",
    text: "Whether you can organise, coach, design, take photos or just bring good energy, there's a role for you." },
  { id: "partner", label: "Partner with us", title: "Let's build something together.", form: <PartnerForm />, field: "bg-mist",
    text: "Schools, universities, clubs, organisations and sponsors: we'd love to hear how we might work together." },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero title="There's a place for you here." intro="Join, volunteer, or partner with us. Every way in matters." tone="white">
        <div className="mt-12"><InvolveCards samePage /></div>
      </PageHero>

      <div className="space-y-6 pb-20 sm:pb-28">
        {sections.map((s) => (
          <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`} className="scroll-mt-24">
            <Container>
              <div id={`${s.id}-form`} className={cn("grid scroll-mt-24 gap-10 rounded-3xl p-6 sm:p-12 lg:grid-cols-12", s.field)}>
                <div className="lg:col-span-4">
                  <h2 id={`${s.id}-title`} className="text-4xl font-extrabold leading-tight text-ink">
                    {s.title}
                    <span className="mt-2 block text-lg font-bold tracking-normal text-ink-soft">{s.label}</span>
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-ink-soft">{s.text}</p>
                </div>
                <div className="rounded-2xl bg-white p-6 sm:p-8 lg:col-span-8">{s.form}</div>
              </div>
            </Container>
          </section>
        ))}
      </div>
    </>
  );
}
