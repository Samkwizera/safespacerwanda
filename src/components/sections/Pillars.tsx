import { images } from "@/content/images";
import { cn } from "@/lib/cn";
import { Photo } from "../Photo";
import { Container, SectionHeading } from "../Section";

export const pillars = [
  { title: "Move Together", image: images.move, dot: "bg-blue",
    text: "Using sports, basketball and physical activity to encourage connection, confidence and emotional wellbeing." },
  { title: "Talk Freely", image: images.talk, dot: "bg-coral",
    text: "Creating supportive spaces where young people can talk openly about mental wellness, without judgement." },
  { title: "Grow Together", image: images.grow, dot: "bg-[#2fa36b]",
    text: "Helping young people build friendships, confidence, resilience and a stronger sense of belonging." },
  { title: "Raise Awareness", image: images.aware, dot: "bg-sun",
    text: "Promoting mental health education, challenging stigma and encouraging healthy conversations in our communities." },
];

/** The four pillars as a calm list: heading on the left, rows on the right. */
export function Pillars() {
  return (
    <section aria-labelledby="pillars-title" className="py-20 sm:py-28">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading id="pillars-title" title="Four ways we make space for each other."
            intro="Simple ideas, done together. Each one is an invitation to show up as you are." />
        </div>
        <ul className="divide-y divide-line border-y border-line lg:col-span-7">
          {pillars.map((p) => (
            <li key={p.title} className="grid gap-2 py-7 sm:grid-cols-[2.25rem_1fr] sm:gap-x-4">
              <span aria-hidden className={cn("mt-1.5 hidden h-5 w-5 rounded-full sm:block", p.dot)} />
              <div>
                <h3 className="flex items-center gap-3 text-2xl font-extrabold text-ink">
                  <span aria-hidden className={cn("h-4 w-4 shrink-0 rounded-full sm:hidden", p.dot)} />
                  {p.title}
                </h3>
                <p className="mt-2 max-w-[56ch] text-[17px] leading-relaxed text-ink-soft">{p.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/** Pillars with a photo slot each, alternating sides, for the What We Do page. */
export function PillarFeatures() {
  return (
    <section aria-label="Our four pillars" className="py-16 sm:py-24">
      <Container className="space-y-16 sm:space-y-24">
        {pillars.map((p, i) => (
          <article key={p.title} className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
            <Photo slot={p.image} variant={i} className={cn("aspect-[4/3]", i % 2 === 1 && "md:order-2")} sizes="(min-width:768px) 50vw, 100vw" />
            <div>
              <span aria-hidden className={cn("block h-5 w-5 rounded-full", p.dot)} />
              <h2 className="mt-5 text-[2rem] font-extrabold leading-[1.1] text-ink sm:text-[2.6rem]">{p.title}</h2>
              <p className="mt-4 max-w-[48ch] text-lg leading-relaxed text-ink-soft">{p.text}</p>
            </div>
          </article>
        ))}
      </Container>
    </section>
  );
}
