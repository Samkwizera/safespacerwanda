import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Section";

const tones = { sky: "bg-sky", sun: "bg-sunsoft", sunsoft: "bg-sunsoft", blush: "bg-blush", mint: "bg-mint", white: "bg-white", mist: "bg-mist" };

/** Inner-page opening: a soft colour field with the page title. */
export function PageHero({
  title,
  intro,
  children,
  tone = "sky",
}: {
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  tone?: keyof typeof tones;
}) {
  return (
    <section className={cn("pb-14 pt-14 sm:pb-20 sm:pt-20", tones[tone])}>
      <Container className="settle">
        <h1 className="max-w-3xl text-[2.6rem] font-extrabold leading-[1.04] tracking-[-0.03em] text-ink sm:text-6xl">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">{intro}</p>}
        {children}
      </Container>
    </section>
  );
}
