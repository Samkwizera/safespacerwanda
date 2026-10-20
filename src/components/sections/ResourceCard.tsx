import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import type { Resource } from "@/content/resources";
import { cn } from "@/lib/cn";

const tone = {
  sage: "bg-sage text-forest",
  peach: "bg-peach text-forest",
  forest: "bg-forest text-cream",
};

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-white ring-1 ring-forest/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(23,60,53,.4)]">
      <div className={cn("relative h-36 overflow-hidden p-6", tone[resource.tone])}>
        <span className="relative z-10 text-xs font-semibold uppercase tracking-[.16em] opacity-80">{resource.category}</span>
        <div aria-hidden className="absolute -bottom-16 -right-10 h-44 w-44 rounded-full bg-white/25 transition-transform duration-700 group-hover:scale-125" />
        <div aria-hidden className="absolute -bottom-8 right-24 h-16 w-16 rounded-full bg-white/20" />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-xl font-extrabold leading-snug text-forest">
          <Link href={`/resources/${resource.slug}`} className="after:absolute after:inset-0">{resource.title}</Link>
        </h3>
        <p className="mt-3 flex-1 leading-relaxed text-muted">{resource.summary}</p>
        <div className="mt-6 flex items-center justify-between text-sm text-muted">
          <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" aria-hidden /> {resource.readMinutes} min read</span>
          <ArrowUpRight className="h-5 w-5 text-forest transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
        </div>
      </div>
    </article>
  );
}
