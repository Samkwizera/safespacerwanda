import { Button } from "@/components/Button";
import { Disclaimer } from "@/components/Disclaimer";
import { Container, SectionHeading } from "@/components/Section";
import { Community } from "@/components/sections/Community";
import { Hero } from "@/components/sections/Hero";
import { InvolveCards } from "@/components/sections/InvolveCards";
import { Pillars } from "@/components/sections/Pillars";
import { ResourceCard } from "@/components/sections/ResourceCard";
import { Belief, Story } from "@/components/sections/Story";
import { resources } from "@/content/resources";

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <Belief />
      <Pillars />

      <div className="bg-mist">
        <Community showKinds={false} />
      </div>

      <section aria-labelledby="resources-title" className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading id="resources-title" title="Learn, reflect, and look after yourself."
              intro="Short, friendly reads on mental health, stress, habits and belonging." />
            <Button href="/resources" variant="secondary" className="self-start lg:self-auto">All resources</Button>
          </div>
          <ul className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-3">
            {resources.slice(0, 3).map((r) => (
              <li key={r.slug}><ResourceCard resource={r} /></li>
            ))}
          </ul>
          <Disclaimer className="mt-14" />
        </Container>
      </section>

      <section aria-labelledby="involve-title" className="pb-20 sm:pb-28">
        <Container>
          <SectionHeading id="involve-title" title="There's a place for you here."
            intro="Join, volunteer, or partner with us. Every way in matters." />
          <div className="mt-12"><InvolveCards /></div>
        </Container>
      </section>
    </>
  );
}
