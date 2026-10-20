import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Container({ children, className, narrow = false }: { children: ReactNode; className?: string; narrow?: boolean }) {
  return <div className={cn("mx-auto w-full px-5 sm:px-8", narrow ? "max-w-3xl" : "max-w-6xl", className)}>{children}</div>;
}

export function SectionHeading({
  title,
  intro,
  light = false,
  center = false,
  className,
  id,
}: {
  title: ReactNode;
  intro?: ReactNode;
  light?: boolean;
  center?: boolean;
  className?: string;
  id?: string;
}) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center", className)}>
      <h2 id={id} className={cn("text-[2rem] font-extrabold leading-[1.1] sm:text-[2.6rem]", light ? "text-white" : "text-ink")}>
        {title}
      </h2>
      {intro && <p className={cn("mt-4 text-lg leading-relaxed", light ? "text-[#c9cee6]" : "text-ink-soft")}>{intro}</p>}
    </div>
  );
}
