import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { Disclaimer } from "@/components/Disclaimer";
import { Reveal } from "@/components/Reveal";
import { Container, Eyebrow } from "@/components/Section";
import { ResourceCard } from "@/components/sections/ResourceCard";
import { getResource, resources } from "@/content/resources";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const r = getResource((await params).slug);
  if (!r) return {};
  return { title: r.title, description: r.summary, openGraph: { title: r.title, description: r.summary, type: "article" } };
}

export default async function ResourcePage({ params }: Params) {
  const r = getResource((await params).slug);
  if (!r) notFound();
  const related = resources.filter((x) => x.slug !== r.slug).slice(0, 3);

  return (
    <article>
      <header className="relative overflow-hidden pb-14 pt-36 sm:pt-44">
        <div aria-hidden className="absolute -right-20 top-10 h-80 w-80 animate-float-slow rounded-full bg-peach/70 blur-3xl" />
        <Container className="relative max-w-3xl">
          <Link href="/resources" className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:underline">
            <ArrowLeft className="h-4 w-4" aria-hidden /> All resources
          </Link>
          <Reveal className="mt-8">
            <Eyebrow>{r.category}</Eyebrow>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-forest sm:text-6xl">{r.title}</h1>
            <p className="mt-6 text-xl leading-relaxed text-muted">{r.summary}</p>
            <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted"><Clock className="h-4 w-4" aria-hidden /> {r.readMinutes} min read</p>
          </Reveal>
        </Container>
      </header>

      <Container className="max-w-3xl pb-16">
        <div className="prose-safe text-lg text-charcoal">
          {r.body.map((block, i) => (
            <div key={i}>
              {block.heading && <h2>{block.heading}</h2>}
              {block.paragraphs?.map((p) => <p key={p}>{p}</p>)}
              {block.list && <ul>{block.list.map((li) => <li key={li}>{li}</li>)}</ul>}
            </div>
          ))}
        </div>
        <Disclaimer className="mt-12" />
      </Container>

      <section aria-labelledby="related-title" className="bg-sage-soft/50 py-20">
        <Container>
          <h2 id="related-title" className="text-3xl font-extrabold text-forest">Keep reading</h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {related.map((x) => <li key={x.slug}><ResourceCard resource={x} /></li>)}
          </ul>
        </Container>
      </section>
    </article>
  );
}
