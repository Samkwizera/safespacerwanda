import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8", className)}>{children}</div>;
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[.16em]",
        light ? "bg-white/10 text-peach" : "bg-sage-soft text-forest",
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", light ? "bg-peach" : "bg-forest")} aria-hidden />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
  center = false,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  light?: boolean;
  center?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", center && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2 className={cn("mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-[3.5rem]", light ? "text-cream" : "text-forest")}>
        {title}
      </h2>
      {intro && <p className={cn("mt-6 text-lg leading-relaxed", light ? "text-sage-soft" : "text-muted")}>{intro}</p>}
    </Reveal>
  );
}
