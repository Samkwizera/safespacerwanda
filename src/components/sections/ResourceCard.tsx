import Link from "next/link";
import type { Resource } from "@/content/resources";
import { ShapeField } from "../Shapes";

export function ResourceCard({ resource, variant }: { resource: Resource; variant?: number }) {
  return (
    <article className="group relative flex h-full flex-col">
      <ShapeField tone={resource.tone} seed={resource.slug} variant={variant} className="aspect-[16/10] rounded-2xl" />
      <h3 className="mt-5 text-xl font-extrabold leading-snug text-ink">
        <Link href={`/resources/${resource.slug}`} className="after:absolute after:inset-0 group-hover:text-blue">
          {resource.title}
        </Link>
      </h3>
      <p className="mt-2 leading-relaxed text-ink-soft">{resource.summary}</p>
      <p className="mt-3 text-sm font-bold text-ink-soft">
        {resource.category} <span aria-hidden>·</span> {resource.readMinutes} min read
      </p>
    </article>
  );
}

/** Compact horizontal version for category lists. */
export function ResourceRow({ resource, variant }: { resource: Resource; variant?: number }) {
  return (
    <article className="group relative grid gap-5 py-6 sm:grid-cols-[11rem_1fr] sm:items-center sm:gap-7">
      <ShapeField tone={resource.tone} seed={resource.slug} variant={variant} className="aspect-[16/10] rounded-2xl" />
      <div>
        <h3 className="text-xl font-extrabold leading-snug text-ink">
          <Link href={`/resources/${resource.slug}`} className="after:absolute after:inset-0 group-hover:text-blue">
            {resource.title}
          </Link>
        </h3>
        <p className="mt-2 leading-relaxed text-ink-soft">{resource.summary}</p>
        <p className="mt-3 text-sm font-bold text-ink-soft">{resource.readMinutes} min read</p>
      </div>
    </article>
  );
}
