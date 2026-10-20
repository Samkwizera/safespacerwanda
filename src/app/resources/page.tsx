import type { Metadata } from "next";
import { Disclaimer } from "@/components/Disclaimer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Container } from "@/components/Section";
import { ResourceCard } from "@/components/sections/ResourceCard";
import { categories, resources } from "@/content/resources";

export const metadata: Metadata = {
  title: "Resources",
  description: "Friendly, evidence-informed reads on mental health, stress, healthy habits, belonging, sport and finding support.",
};

const slug = (s: string) => s.toLowerCase().replace(/[^a-z]+/g, "-");

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={<>Learn, reflect, <span className="text-forest/55">and be kind to yourself.</span></>}
        intro="Short reads written with care. No jargon, no judgement, just ideas that might help."
      >
        <Disclaimer className="mt-10 max-w-3xl" />
        <nav aria-label="Resource categories" className="mt-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <a key={c.name} href={`#${slug(c.name)}`} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-forest ring-1 ring-forest/10 transition hover:bg-forest hover:text-cream">
              {c.name}
            </a>
          ))}
        </nav>
      </PageHero>

      <div className="space-y-20 pb-28">
        {categories.map((c) => {
          const items = resources.filter((r) => r.category === c.name);
          return (
            <section key={c.name} id={slug(c.name)} aria-labelledby={`${slug(c.name)}-title`} className="scroll-mt-28">
              <Container>
                <Reveal className="flex flex-col justify-between gap-2 border-b border-forest/10 pb-5 sm:flex-row sm:items-end">
                  <h2 id={`${slug(c.name)}-title`} className="text-3xl font-extrabold text-forest">{c.name}</h2>
                  <p className="text-muted">{c.description}</p>
                </Reveal>
                {items.length ? (
                  <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((r, i) => <Reveal as="li" key={r.slug} delay={i * 0.06}><ResourceCard resource={r} /></Reveal>)}
                  </ul>
                ) : (
                  <p className="mt-8 rounded-3xl border-2 border-dashed border-forest/15 p-6 text-muted">More reads are on the way.</p>
                )}
              </Container>
            </section>
          );
        })}
      </div>
    </>
  );
}
