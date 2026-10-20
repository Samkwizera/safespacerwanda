import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import type { CommunityEvent } from "@/content/events";

export function EventCard({ event }: { event: CommunityEvent }) {
  const date = event.date ? new Date(event.date) : undefined;
  return (
    <article className="group flex h-full flex-col rounded-[2rem] bg-white p-7 ring-1 ring-forest/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(23,60,53,.4)]">
      <div className="flex items-start justify-between gap-4">
        <span className="rounded-full bg-sage-soft px-3 py-1 text-xs font-semibold text-forest">{event.kind}</span>
        {date && (
          <time dateTime={event.date} className="rounded-2xl bg-peach px-3 py-2 text-center font-display leading-none text-forest">
            <span className="block text-2xl font-extrabold">{date.getDate()}</span>
            <span className="text-xs font-semibold uppercase">{date.toLocaleString("en", { month: "short" })}</span>
          </time>
        )}
      </div>
      <h3 className="mt-6 text-2xl font-extrabold text-forest">{event.title}</h3>
      {event.description && <p className="mt-3 leading-relaxed text-muted">{event.description}</p>}
      <dl className="mt-5 space-y-2 text-sm text-charcoal">
        {date && (
          <div className="flex items-center gap-2">
            <dt><CalendarDays className="h-4 w-4 text-forest" aria-label="Date" /></dt>
            <dd>{date.toLocaleDateString("en", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}{event.time && ` · ${event.time}`}</dd>
          </div>
        )}
        {event.location && (
          <div className="flex items-center gap-2">
            <dt><MapPin className="h-4 w-4 text-forest" aria-label="Location" /></dt>
            <dd>{event.location}</dd>
          </div>
        )}
      </dl>
      {event.registrationUrl && (
        <a href={event.registrationUrl} className="mt-auto inline-flex items-center gap-1.5 pt-6 font-semibold text-forest">
          Register <span className="sr-only">for {event.title}</span>
          <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
        </a>
      )}
    </article>
  );
}
