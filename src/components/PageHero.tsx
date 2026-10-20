import type { ReactNode } from "react";
import { Container, Eyebrow } from "./Section";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-36 sm:pb-24 sm:pt-44">
      <div aria-hidden className="absolute -right-24 top-16 h-80 w-80 animate-float-slow rounded-full bg-peach/70 blur-3xl" />
      <div aria-hidden className="absolute -left-32 bottom-0 h-72 w-72 animate-float rounded-full bg-sage/50 blur-3xl" />
      <Container className="relative">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[1.02] text-forest sm:text-6xl lg:text-7xl">{title}</h1>
          {intro && <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{intro}</p>}
        </Reveal>
        {children}
      </Container>
    </section>
  );
}
