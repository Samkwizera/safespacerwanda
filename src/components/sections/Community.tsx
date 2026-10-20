import { eventKinds, events } from "@/content/events";
import { Button } from "../Button";
import { Container, SectionHeading } from "../Section";
import { EventCard } from "./EventCard";

export function Community({ showKinds = true }: { showKinds?: boolean }) {
  const upcoming = events.filter((e) => !e.date || new Date(e.date) >= new Date(new Date().toDateString()));

  return (
    <section aria-labelledby="community-title" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="community-title"
          title="Good things happen when we show up for each other."
          intro="Games, conversations, and days that bring people together. This is where you'll find what's coming up."
        />

        {upcoming.length > 0 ? (
          <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((e) => (
              <li key={e.title + (e.date ?? "")} className="h-full"><EventCard event={e} /></li>
            ))}
          </ul>
        ) : (
          <div className="mt-12 flex flex-col gap-6 rounded-3xl bg-blush p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="max-w-xl text-3xl font-extrabold leading-tight text-ink sm:text-4xl">Our first gatherings are being planned.</h3>
              <p className="mt-3 max-w-xl text-lg text-ink-soft">
                Join the community and you&apos;ll be the first to hear when something is happening near you.
              </p>
            </div>
            <Button href="/get-involved#join" className="self-start lg:self-auto">Get notified</Button>
          </div>
        )}

        {showKinds && (
          <div className="mt-16">
            <h3 className="text-xl font-extrabold text-ink">What you&apos;ll find here</h3>
            <dl className="mt-6 grid gap-x-8 gap-y-7 border-t border-line pt-7 sm:grid-cols-2 lg:grid-cols-3">
              {eventKinds.map((k) => (
                <div key={k.kind}>
                  <dt className="text-lg font-extrabold text-ink">{k.plural}</dt>
                  <dd className="mt-1.5 text-[16px] leading-relaxed text-ink-soft">{k.blurb}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </Container>
    </section>
  );
}
