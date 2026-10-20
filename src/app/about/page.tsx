import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { Container, SectionHeading } from "@/components/Section";
import { Founder } from "@/components/sections/Founder";
import { Belief, Story } from "@/components/sections/Story";

export const metadata: Metadata = {
  title: "About",
  description: "Why SafeSpace Rwanda exists, what we believe, and the people behind it.",
};

const values = [
  { title: "Belonging first", text: "Everyone is welcome as they are. No one has to earn their place." },
  { title: "Seen and heard", text: "We listen more than we talk, and we take each other's feelings seriously." },
  { title: "Hope over fear", text: "We talk about mental health honestly, but with warmth and optimism." },
  { title: "Youth-led", text: "Young people shape what we do, because they know what they need." },
  { title: "Small steps count", text: "Showing up for one game or one conversation matters." },
  { title: "Honest about our role", text: "We're a community, not a clinic, and we say so clearly." },
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
        title="A place to belong. A space to be yourself."
        intro="SafeSpace Rwanda is a youth-focused initiative promoting mental well-being, social connection and supportive communities through sports, conversations and shared experiences."
      />
      <Story cta={false} />
      <Belief />

      <section aria-labelledby="values-title" className="py-20 sm:py-28">
        <Container>
          <SectionHeading id="values-title" title="The way we want to show up." />
          <dl className="mt-12 grid gap-x-10 gap-y-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.title}>
                <dt className="text-xl font-extrabold text-ink">{v.title}</dt>
                <dd className="mt-2 leading-relaxed text-ink-soft">{v.text}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section aria-labelledby="who-title" className="bg-blush py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading id="who-title" title="If you're young and in Rwanda, this is for you."
            intro="And for everyone who wants to help young people feel less alone." />
          <ul className="divide-y divide-ink/10 rounded-2xl bg-white px-6">
            {audiences.map((a) => (
              <li key={a} className="py-4 text-lg font-semibold text-ink">{a}</li>
            ))}
          </ul>
        </Container>
      </section>

      <Founder />

      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-sky p-8 sm:flex-row sm:items-center sm:p-12">
            <h2 className="max-w-xl text-3xl font-extrabold text-ink sm:text-4xl">Ready to find your space?</h2>
            <Button href="/get-involved">Get involved</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
