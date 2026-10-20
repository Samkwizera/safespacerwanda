"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { ImageSlot } from "@/content/images";
import { cn } from "@/lib/cn";

const tones = {
  sage: { bg: "from-sage via-sage-soft to-cream", ink: "#173C35", accent: "#F3D8CA" },
  peach: { bg: "from-peach via-[#f7e6dc] to-cream", ink: "#173C35", accent: "#A8C5B5" },
  forest: { bg: "from-forest via-[#24564b] to-[#2f6b5d]", ink: "#A8C5B5", accent: "#F3D8CA" },
};

/**
 * Rounded image with a reveal and optional parallax. Shows a branded
 * illustration until a real photo `src` is set in content/images.ts.
 */
export function Photo({
  slot,
  className,
  parallax = false,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  slot: ImageSlot;
  className?: string;
  parallax?: boolean;
  priority?: boolean;
  sizes?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], parallax && !reduce ? ["-6%", "6%"] : ["0%", "0%"]);
  const t = tones[slot.tone];

  return (
    <motion.div
      ref={ref}
      className={cn("relative isolate overflow-hidden rounded-[2.5rem]", className)}
      initial={reduce ? false : { clipPath: "inset(10% 6% 10% 6% round 2.5rem)", opacity: 0.4 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 2.5rem)", opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div style={{ y }} className="absolute -inset-[8%]">
        {slot.src ? (
          <Image src={slot.src} alt={slot.alt} fill priority={priority} sizes={sizes} className="object-cover" />
        ) : (
          <div role="img" aria-label={slot.alt} className={cn("grain relative h-full w-full bg-gradient-to-br", t.bg)}>
            <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
              <path d="M310 70c50 40 70 120 40 180s-110 100-180 80S40 250 60 180 120 60 190 50s70-20 120 20z" fill={t.accent} opacity=".55" />
              <circle cx="150" cy="215" r="42" fill={t.ink} opacity=".16" />
              <circle cx="245" cy="200" r="42" fill={t.ink} opacity=".16" />
              <path d="M95 330c10-60 45-85 55-85s45 25 55 85M190 330c10-60 45-85 55-85s45 25 55 85" fill={t.ink} opacity=".12" />
              <circle cx="320" cy="110" r="22" fill={t.ink} opacity=".2" />
              <path d="M60 110q50-40 100 0t100 0" stroke={t.ink} strokeWidth="3" fill="none" opacity=".25" strokeLinecap="round" />
            </svg>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
