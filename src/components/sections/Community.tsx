import { CalendarPlus } from "lucide-react";
import { eventKinds, events } from "@/content/events";
import { Button } from "../Button";
import { Reveal } from "../Reveal";
import { Container, SectionHeading } from "../Section";
import { EventCard } from "./EventCard";

export function Community({ showKinds = true }: { showKinds?: boolean }) {
  const upcoming = events.filter((e) => !e.date || new Date(e.date) >= new Date(new Date().toDateString()));

  return (
    <section aria-labelledby="community-title" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Community"
          title={<span id="community-title">Good things happen when we show up for each other.</span>}
          intro="Games, conversations, and days that bring people together. This is where you'll find what's coming up."
        />

        {upcoming.length > 0 ? (
          <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((e, i) => (
              <Reveal as="li" key={e.title + (e.date ?? "")} delay={i * 0.06} className="h-full"><EventCard event={e} /></Reveal>
            ))}
          </ul>
        ) : (
          <Reveal className="relative mt-14 overflow-hidden rounded-[2.5rem] border-2 border-dashed border-forest/20 bg-white/60 p-8 sm:p-12">
            <div aria-hidden className="absolute -right-10 -top-10 h-48 w-48 animate-float-slow rounded-full bg-peach/60" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-forest px-4 py-1.5 text-sm font-semibold text-cream">
                  <CalendarPlus className="h-4 w-4" aria-hidden /> Coming soon
                </span>
                <h3 className="mt-5 max-w-xl text-3xl font-extrabold text-forest sm:text-4xl">Our first gatherings are being planned.</h3>
                <p className="mt-3 max-w-xl text-lg text-muted">
                  Join the community and you&apos;ll be the first to hear when something is happening near you.
                </p>
              </div>
              <Button href="/get-involved#join">Get notified</Button>
            </div>
          </Reveal>
        )}

        {showKinds && (
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {eventKinds.map((k, i) => (
              <Reveal as="li" key={k.kind} delay={i * 0.05} className="h-full rounded-[1.75rem] bg-white p-6 ring-1 ring-forest/5">
                  <h4 className="font-display text-lg font-bold text-forest">{k.kind}s</h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{k.blurb}</p>
                </Reveal>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}
