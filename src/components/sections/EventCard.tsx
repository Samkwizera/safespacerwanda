import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import type { CommunityEvent } from "@/content/events";

export function EventCard({ event }: { event: CommunityEvent }) {
  const date = event.date ? new Date(event.date) : undefined;
  return (
    <article className="flex h-full flex-col rounded-2xl bg-mist p-7">
      <div className="flex items-start justify-between gap-4">
        <span className="rounded-full bg-white px-3 py-1 text-sm font-bold text-ink-soft">{event.kind}</span>
        {date && (
          <time dateTime={event.date} className="rounded-xl bg-sun px-3 py-2 text-center leading-none text-ink">
            <span className="block text-2xl font-extrabold tabular-nums">{date.getDate()}</span>
            <span className="text-xs font-bold uppercase">{date.toLocaleString("en", { month: "short" })}</span>
          </time>
        )}
      </div>
      <h3 className="mt-6 text-2xl font-extrabold text-ink">{event.title}</h3>
      {event.description && <p className="mt-3 leading-relaxed text-ink-soft">{event.description}</p>}
      <dl className="mt-5 space-y-2 text-[15px] text-ink">
        {date && (
          <div className="flex items-center gap-2">
            <dt><CalendarDays className="h-4 w-4 text-blue" aria-label="Date" /></dt>
            <dd>{date.toLocaleDateString("en", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}{event.time && ` · ${event.time}`}</dd>
          </div>
        )}
        {event.location && (
          <div className="flex items-center gap-2">
            <dt><MapPin className="h-4 w-4 text-blue" aria-label="Location" /></dt>
            <dd>{event.location}</dd>
          </div>
        )}
      </dl>
      {event.registrationUrl && (
        <a href={event.registrationUrl} className="group mt-auto inline-flex items-center gap-1.5 pt-6 font-bold text-blue">
          Register <span className="sr-only">for {event.title}</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out [@media(hover:hover)]:group-hover:translate-x-0.5" aria-hidden />
        </a>
      )}
    </article>
  );
}
