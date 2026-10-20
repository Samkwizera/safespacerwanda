import type { Metadata } from "next";
import { Compass, Eye, HeartHandshake, Leaf, Sun, Users } from "lucide-react";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Container, SectionHeading } from "@/components/Section";
import { Founder } from "@/components/sections/Founder";
import { Belief, Story } from "@/components/sections/Story";

export const metadata: Metadata = {
  title: "About",
  description: "Why SafeSpace Rwanda exists, what we believe, and the people behind it.",
};

const values = [
  { icon: HeartHandshake, title: "Belonging first", text: "Everyone is welcome as they are. No one has to earn their place." },
  { icon: Eye, title: "Seen and heard", text: "We listen more than we talk, and we take each other's feelings seriously." },
  { icon: Sun, title: "Hope over fear", text: "We talk about mental health honestly, but with warmth and optimism." },
  { icon: Users, title: "Youth-led", text: "Young people shape what we do, because they know what they need." },
  { icon: Leaf, title: "Small steps count", text: "Showing up for one game or one conversation matters." },
  { icon: Compass, title: "Honest about our role", text: "We're a community, not a clinic, and we say so clearly." },
];

const audiences = [
  "Students and young adults across Rwanda",
  "Anyone feeling isolated, stressed or under pressure",
  "Student leaders and volunteers",
  "Sports teams and clubs",
  "Schools, universities and youth organisations",
  "Sponsors and community partners",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={<>A place to belong. <span className="text-forest/55">A space to be yourself.</span></>}
        intro="SafeSpace Rwanda is a youth-focused initiative promoting mental well-being, social connection and supportive communities through sports, conversations and shared experiences."
      />
      <Story cta={false} />
      <Belief />

      <section aria-labelledby="values-title" className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="What guides us" title={<span id="values-title">The way we want to show up.</span>} />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 0.06} className="rounded-[2rem] bg-white p-8 ring-1 ring-forest/5 transition hover:-translate-y-1">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sage-soft text-forest"><v.icon className="h-5 w-5" aria-hidden /></span>
                <h3 className="mt-6 text-xl font-extrabold text-forest">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{v.text}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="who-title" className="bg-peach/50 py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading eyebrow="Who it's for" title={<span id="who-title">If you&apos;re young and in Rwanda, this is for you.</span>}
            intro="And for everyone who wants to help young people feel less alone." />
          <ul className="grid gap-3">
            {audiences.map((a, i) => (
              <Reveal as="li" key={a} delay={i * 0.05} className="flex items-center gap-4 rounded-2xl bg-cream px-6 py-4 text-lg font-medium text-forest">
                <span className="font-display text-sm font-bold text-muted">0{i + 1}</span>{a}
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <Founder />

      <section className="pb-24">
        <Container>
          <Reveal className="flex flex-col items-start justify-between gap-6 rounded-[2.5rem] bg-sage-soft p-10 sm:flex-row sm:items-center sm:p-14">
            <h2 className="max-w-xl text-3xl font-extrabold text-forest sm:text-4xl">Ready to find your space?</h2>
            <Button href="/get-involved">Get involved</Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
