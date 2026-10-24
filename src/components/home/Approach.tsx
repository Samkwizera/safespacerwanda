import { Container, Label } from "../Button";
import { Photo } from "../Photo";
import { reveal } from "@/lib/reveal";
import { images } from "@/content/images";
import { cn } from "@/lib/cn";

const areas = [
  {
    tag: "Movement",
    title: "Play & Connect",
    text: "Bring young people together through basketball and shared activities that encourage friendship and belonging.",
    slot: images.play,
    // Staggered heights give the row an editorial rhythm, like a shelf of objects.
    frame: "aspect-[4/5]",
    offset: "",
  },
  {
    tag: "Conversation",
    title: "Open Conversations",
    text: "Create welcoming opportunities to talk about wellbeing, share experiences, and feel heard.",
    slot: images.talk,
    frame: "aspect-[4/5.4]",
    offset: "md:mt-10",
  },
  {
    tag: "Community",
    title: "Grow Together",
    text: "Encourage peer connection, community participation, and learning that supports everyday wellbeing.",
    slot: images.grow,
    frame: "aspect-[4/4.6]",
    offset: "md:mt-20",
  },
];

export function Approach() {
  return (
    <section id="what-we-do" aria-labelledby="approach-title" className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-end" {...reveal()}>
          <div>
            <Label>Our approach</Label>
            <h2 id="approach-title" className="mt-5 text-5xl text-forest sm:text-6xl lg:text-7xl">
              Stronger connections. <em className="font-light text-sage">More room to thrive.</em>
            </h2>
          </div>
          <p className="max-w-sm text-ink-soft md:justify-self-end">
            Three areas of focus guide everything we do—each one built around showing up for one another.
          </p>
        </div>

        <ul className="mt-16 grid gap-10 md:grid-cols-3 md:gap-6">
          {areas.map((a, i) => (
            <li key={a.title} className={cn("group", a.offset)} {...reveal(i * 120)}>
              <div className="relative overflow-hidden rounded-[28px]">
                <Photo slot={a.slot} className={cn(a.frame, "transition-transform duration-700 ease-out group-hover:scale-[1.03]")} sizes="(min-width: 768px) 33vw, 100vw" />
                <span className="label absolute top-4 left-4 rounded-full bg-ivory-soft px-3 py-1.5 text-[0.6rem] text-forest">{a.tag}</span>
              </div>
              <h3 className="mt-6 text-3xl text-forest">{a.title}</h3>
              <p className="mt-3 max-w-xs leading-relaxed text-ink-soft">{a.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
