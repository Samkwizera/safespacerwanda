import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { Container, SectionHeading } from "@/components/Section";
import { PillarFeatures } from "@/components/sections/Pillars";
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
        tone="mint"
        title="Connect. Move. Talk. Grow."
        intro="Our work is built around four pillars. Together, they create everyday spaces where young people can feel well and feel they belong."
      />
      <PillarFeatures />

      <section aria-labelledby="approach-title" className="bg-sky py-20 sm:py-28">
        <Container>
          <SectionHeading id="approach-title" title="A gentle path in."
            intro="We want joining to feel easy. Here's the journey we're designing for." />
          {/* The steps are a real sequence, so they keep their numbers. */}
          <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {approach.map((a, i) => (
              <li key={a.step} className="border-t-2 border-ink pt-5">
                <span className="text-[15px] font-bold tabular-nums text-blue">Step {i + 1}</span>
                <h3 className="mt-1 text-2xl font-extrabold text-ink">{a.step}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{a.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-12 max-w-3xl rounded-2xl bg-white p-6 text-[16px] leading-relaxed text-ink-soft sm:p-7">
            <strong className="text-ink">A note on where we are:</strong> SafeSpace Rwanda is just getting started. These pillars describe what
            we&apos;re building toward. When activities are confirmed, you&apos;ll find them on our{" "}
            <Link href="/community" className="font-bold text-blue underline">Community page</Link>.
          </p>
        </Container>
      </section>

      <Sports />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="on-dark flex flex-col items-start justify-between gap-6 rounded-3xl bg-ink p-8 sm:flex-row sm:items-center sm:p-12">
            <h2 className="max-w-xl text-3xl font-extrabold text-white sm:text-4xl">Want to help shape what we build?</h2>
            <Button href="/get-involved#volunteer" variant="sun">Become a volunteer</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
