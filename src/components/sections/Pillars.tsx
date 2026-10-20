import { Megaphone, MessageCircleHeart, Sprout } from "lucide-react";
import { Basketball } from "../BrandIcons";
import { images } from "@/content/images";
import { Photo } from "../Photo";
import { Reveal } from "../Reveal";
import { Container, SectionHeading } from "../Section";

export const pillars = [
  { title: "Move Together", icon: Basketball, image: images.move, accent: "bg-sage",
    text: "Using sports, basketball and physical activity to encourage connection, confidence and emotional wellbeing." },
  { title: "Talk Freely", icon: MessageCircleHeart, image: images.talk, accent: "bg-peach",
    text: "Creating supportive spaces where young people can talk openly about mental wellness, without judgement." },
  { title: "Grow Together", icon: Sprout, image: images.grow, accent: "bg-sage",
    text: "Helping young people build friendships, confidence, resilience and a stronger sense of belonging." },
  { title: "Raise Awareness", icon: Megaphone, image: images.aware, accent: "bg-peach",
    text: "Promoting mental health education, challenging stigma and encouraging healthy conversations in our communities." },
];

export function Pillars({ heading = true }: { heading?: boolean }) {
  return (
    <section aria-labelledby={heading ? "pillars-title" : undefined} className="py-20 sm:py-28">
      <Container>
        {heading && (
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="What we do" title={<span id="pillars-title">Four ways we make space for each other.</span>} />
            <Reveal delay={0.1} className="max-w-sm text-lg text-muted">
              Simple ideas, done together. Each one is an invitation to show up as you are.
            </Reveal>
          </div>
        )}
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 0.08} className="group flex h-full flex-col rounded-[2rem] bg-white p-3 ring-1 ring-forest/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-30px_rgba(23,60,53,.45)]">
                <div className="relative overflow-hidden rounded-[1.6rem]">
                  <Photo slot={p.image} className="aspect-[4/3.2] !rounded-[1.6rem] transition-transform duration-700 group-hover:scale-[1.04]" sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" />
                  <span className={`absolute left-4 top-4 grid h-12 w-12 place-items-center rounded-2xl ${p.accent} text-forest shadow-sm transition-transform duration-500 group-hover:rotate-[-8deg]`}>
                    <p.icon className="h-5 w-5" aria-hidden />
                  </span>
                </div>
                <div className="flex flex-1 flex-col px-4 pb-5 pt-6">
                  <span className="text-xs font-semibold tracking-[.2em] text-muted">0{i + 1}</span>
                  <h3 className="mt-2 text-2xl font-extrabold text-forest">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{p.text}</p>
                </div>
              </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
