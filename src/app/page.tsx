import { Button } from "@/components/Button";
import { Disclaimer } from "@/components/Disclaimer";
import { Container, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Newsletter } from "@/components/forms/Newsletter";
import { Community } from "@/components/sections/Community";
import { Hero } from "@/components/sections/Hero";
import { InvolveCards } from "@/components/sections/InvolveCards";
import { Pillars } from "@/components/sections/Pillars";
import { ResourceCard } from "@/components/sections/ResourceCard";
import { Sports } from "@/components/sections/Sports";
import { Belief, Story } from "@/components/sections/Story";
import { resources } from "@/content/resources";

function Marquee() {
  const items = ["Connect", "Move", "Talk", "Grow", "Belong", "Be yourself"];
  return (
    <div aria-hidden className="overflow-hidden border-y border-forest/10 bg-white/50 py-5">
      <div className="flex w-max animate-[marquee_40s_linear_infinite] gap-10 motion-reduce:animate-none">
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-2xl font-extrabold text-forest/80 sm:text-3xl">
            {t} <span className="h-3 w-3 rounded-full bg-peach-deep" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Story />
      <Belief />
      <Pillars />
      <Sports />
      <Community showKinds={false} />

      <section aria-labelledby="resources-title" className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Resources" title={<span id="resources-title">Learn, reflect, and look after yourself.</span>}
              intro="Short, friendly reads on mental health, stress, habits and belonging." />
            <Reveal><Button href="/resources" variant="secondary">All resources</Button></Reveal>
          </div>
          <ul className="mt-14 grid gap-5 md:grid-cols-3">
            {resources.slice(0, 3).map((r, i) => (
              <Reveal as="li" key={r.slug} delay={i * 0.08}><ResourceCard resource={r} /></Reveal>
            ))}
          </ul>
          <Disclaimer className="mt-8" />
        </Container>
      </section>

      <section aria-labelledby="involve-title" className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Get involved" title={<span id="involve-title">There&apos;s a place for you here.</span>} />
          <div className="mt-14"><InvolveCards /></div>
        </Container>
      </section>

      <Newsletter />
    </>
  );
}
