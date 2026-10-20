import type { Metadata } from "next";
import { Disclaimer } from "@/components/Disclaimer";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Section";
import { ResourceRow } from "@/components/sections/ResourceCard";
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
        tone="sunsoft"
        title="Learn, reflect, and be kind to yourself."
        intro="Short reads written with care. No jargon, no judgement, just ideas that might help."
      >
        <nav aria-label="Resource categories" className="mt-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <a key={c.name} href={`#${slug(c.name)}`} className="press rounded-full bg-white px-4 py-2 text-[15px] font-bold text-ink hover:bg-ink hover:text-white">
              {c.name}
            </a>
          ))}
        </nav>
      </PageHero>

      <Container className="pt-12">
        <Disclaimer className="max-w-3xl" />
      </Container>

      <div className="space-y-16 py-16 sm:pb-28">
        {categories.map((c) => {
          const items = resources.filter((r) => r.category === c.name);
          return (
            <section key={c.name} id={slug(c.name)} aria-labelledby={`${slug(c.name)}-title`} className="scroll-mt-24">
              <Container className="grid gap-6 border-t border-line pt-10 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-4">
                  <h2 id={`${slug(c.name)}-title`} className="text-3xl font-extrabold leading-tight text-ink">{c.name}</h2>
                  <p className="mt-3 text-ink-soft">{c.description}</p>
                </div>
                <div className="lg:col-span-8">
                  {items.length ? (
                    <ul className="-my-6 divide-y divide-line">
                      {items.map((r) => <li key={r.slug}><ResourceRow resource={r} /></li>)}
                    </ul>
                  ) : (
                    <p className="rounded-2xl bg-mist p-6 text-ink-soft">More reads are on the way.</p>
                  )}
                </div>
              </Container>
            </section>
          );
        })}
      </div>
    </>
  );
}
