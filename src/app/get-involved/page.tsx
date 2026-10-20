import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Container, Eyebrow } from "@/components/Section";
import { JoinForm, PartnerForm, VolunteerForm } from "@/components/forms/InvolveForms";
import { InvolveCards } from "@/components/sections/InvolveCards";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Join the SafeSpace Rwanda community, volunteer, or partner with us to create opportunities for young people.",
};

const sections = [
  { id: "join", eyebrow: "Join the community", title: "Come as you are.", form: <JoinForm />,
    text: "Tell us a little about yourself and we'll let you know when there's a game, conversation or gathering you can join." },
  { id: "volunteer", eyebrow: "Become a volunteer", title: "Help make it happen.", form: <VolunteerForm />,
    text: "Whether you can organise, coach, design, take photos or just bring good energy, there's a role for you." },
  { id: "partner", eyebrow: "Partner with us", title: "Let's build something together.", form: <PartnerForm />,
    text: "Schools, universities, clubs, organisations and sponsors: we'd love to hear how we might work together." },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title={<>There&apos;s a place <span className="text-forest/55">for you here.</span></>}
        intro="Join, volunteer, or partner with us. Every way in matters."
      >
        <div className="mt-14"><InvolveCards samePage /></div>
      </PageHero>

      <div className="space-y-8 pb-28">
        {sections.map((s, i) => (
          <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`} className="scroll-mt-24">
            <Container>
              <div id={`${s.id}-form`} className={`grid gap-10 rounded-[2.5rem] p-6 sm:p-12 lg:grid-cols-12 ${i % 2 ? "bg-peach/45" : "bg-white"}`}>
                <Reveal className="lg:col-span-4">
                  <Eyebrow>{s.eyebrow}</Eyebrow>
                  <h2 id={`${s.id}-title`} className="mt-5 text-4xl font-extrabold leading-tight text-forest">{s.title}</h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted">{s.text}</p>
                </Reveal>
                <div className="lg:col-span-8">{s.form}</div>
              </div>
            </Container>
          </section>
        ))}
      </div>
    </>
  );
}
