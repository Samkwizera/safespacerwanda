import { ArrowUpRight } from "lucide-react";
import { Button, Container, Label } from "../Button";
import { Photo } from "../Photo";
import { reveal } from "@/lib/reveal";
import { activities } from "@/content/site";
import { images } from "@/content/images";

const kinds = [
  { title: "Basketball meetups", slot: images.activityBall },
  { title: "Community conversations", slot: images.activityTalk },
  { title: "Wellbeing activities", slot: images.activityWell },
];

export function Activities() {
  return (
    <section aria-labelledby="activities-title" className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div {...reveal()}>
            <Label>Community activities</Label>
            <h2 id="activities-title" className="mt-5 text-5xl text-forest sm:text-6xl">
              Make space for <em className="font-light text-sage">meaningful moments.</em>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
              Basketball meetups, community conversations and wellbeing activities—moments to move, talk and simply be
              together.
            </p>
          </div>

          {/* Mosaic of the kinds of moments we make room for. */}
          <ul className="grid grid-cols-2 gap-4" {...reveal(120)}>
            {kinds.map((k, i) => (
              <li key={k.title} className={i === 0 ? "col-span-2" : ""}>
                <Photo slot={k.slot} className={i === 0 ? "aspect-[16/8]" : "aspect-[4/4.4]"} sizes={i === 0 ? "(min-width: 1024px) 640px, 100vw" : "(min-width: 1024px) 320px, 50vw"} />
                <p className="mt-3 font-serif text-xl text-forest">{k.title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16" {...reveal()}>
          {activities.length ? (
            <ul className="border-t border-line">
              {activities.map((a) => (
                <li key={a.title + a.date} className="grid gap-2 border-b border-line py-6 sm:grid-cols-[10rem_1fr_auto] sm:items-center sm:gap-8">
                  <span className="label text-terracotta">{a.kind}</span>
                  <div>
                    <h3 className="text-2xl text-forest">{a.title}</h3>
                    <p className="mt-1 text-sm text-ink-soft">{a.date} · {a.venue}</p>
                  </div>
                  {a.href && (
                    <a href={a.href} className="inline-flex items-center gap-1.5 text-forest underline-offset-4 hover:underline">
                      Register <ArrowUpRight aria-hidden className="size-4" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col items-start justify-between gap-6 rounded-[28px] border border-dashed border-forest/25 px-6 py-10 sm:flex-row sm:items-center sm:px-10">
              <div>
                <p className="label text-terracotta">Upcoming</p>
                <p className="mt-3 font-serif text-3xl text-forest">Our next community activities will appear here.</p>
              </div>
              <Button href="#contact" variant="ghost" arrow className="shrink-0">Express Your Interest</Button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
