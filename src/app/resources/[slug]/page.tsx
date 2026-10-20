import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { Disclaimer } from "@/components/Disclaimer";
import { Container } from "@/components/Section";
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
      <header className="bg-sunsoft pb-14 pt-10 sm:pb-20 sm:pt-14">
        <Container narrow>
          <Link href="/resources" className="group inline-flex items-center gap-2 text-[15px] font-bold text-blue">
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 ease-out [@media(hover:hover)]:group-hover:-translate-x-0.5" aria-hidden /> All resources
          </Link>
          <div className="settle mt-10">
            <h1 className="text-[2.4rem] font-extrabold leading-[1.06] tracking-[-0.03em] text-ink sm:text-[3.4rem]">{r.title}</h1>
            <p className="mt-6 text-xl leading-relaxed text-ink-soft">{r.summary}</p>
            <p className="mt-6 text-[15px] font-bold text-ink-soft">
              {r.category} <span aria-hidden>·</span> <Clock className="mb-0.5 inline h-4 w-4" aria-hidden /> {r.readMinutes} min read
            </p>
          </div>
        </Container>
      </header>

      <Container narrow className="py-14">
        <div className="prose-safe text-lg text-ink-soft">
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

      <section aria-labelledby="related-title" className="bg-mist py-20">
        <Container>
          <h2 id="related-title" className="text-3xl font-extrabold text-ink">Keep reading</h2>
          <ul className="mt-10 grid gap-x-6 gap-y-12 md:grid-cols-3">
            {related.map((x) => <li key={x.slug}><ResourceCard resource={x} /></li>)}
          </ul>
        </Container>
      </section>
    </article>
  );
}
