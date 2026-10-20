import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Container, SectionHeading } from "@/components/Section";
import { Pillars } from "@/components/sections/Pillars";
import { Sports } from "@/components/sections/Sports";

export const metadata: Metadata = {
  title: "What We Do",
  description: "How SafeSpace Rwanda brings young people together through sport, open conversation, friendship and awareness.",
};

const approach = [
  { step: "Show up", text: "Come to a game, a walk or a conversation. No sign-up essay, no pressure." },
  { step: "Connect", text: "Meet people through doing things together. It's easier to talk side by side." },
  { step: "Open up", text: "In small, friendly circles, talk about what's on your mind, only if and when you want to." },
  { step: "Lead", text: "Help shape what comes next, whether that's organising, volunteering or starting something new." },
];

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title={<>Connect. Move. Talk. <span className="text-forest/55">Grow.</span></>}
        intro="Our work is built around four pillars. Together, they create everyday spaces where young people can feel well and feel they belong."
      />
      <Pillars heading={false} />

      <section aria-labelledby="approach-title" className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Our approach" title={<span id="approach-title">A gentle path in.</span>}
            intro="We want joining to feel easy. Here's the journey we're designing for." />
          <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {approach.map((a, i) => (
              <Reveal as="li" key={a.step} delay={i * 0.08} className="relative rounded-[2rem] bg-white p-8 ring-1 ring-forest/5">
                <span className="font-display text-6xl font-extrabold text-sage">{i + 1}</span>
                <h3 className="mt-4 text-2xl font-extrabold text-forest">{a.step}</h3>
                <p className="mt-2 leading-relaxed text-muted">{a.text}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-8 rounded-[2rem] bg-peach/60 p-6 text-[15px] leading-relaxed text-forest sm:p-8">
            <strong>A note on where we are:</strong> SafeSpace Rwanda is just getting started. These pillars describe what
            we&apos;re building toward. When activities are confirmed, you&apos;ll find them on our{" "}
            <Link href="/community" className="font-semibold underline underline-offset-2">Community page</Link>.
          </Reveal>
        </Container>
      </section>

      <Sports />

      <section className="py-24">
        <Container>
          <Reveal className="on-dark flex flex-col items-start justify-between gap-6 rounded-[2.5rem] bg-forest p-10 sm:flex-row sm:items-center sm:p-14">
            <h2 className="max-w-xl text-3xl font-extrabold text-cream sm:text-4xl">Want to help shape what we build?</h2>
            <Button href="/get-involved#volunteer" variant="peach">Become a volunteer</Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
