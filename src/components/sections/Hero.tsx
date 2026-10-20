"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { HeartHandshake } from "lucide-react";
import { Basketball } from "../BrandIcons";
import { images } from "@/content/images";
import { Button } from "../Button";
import { Photo } from "../Photo";
import { Container } from "../Section";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const drift = useTransform(scrollY, [0, 600], [0, reduce ? 0 : -60]);
  const up = (delay: number) =>
    reduce ? {} : { initial: { opacity: 0, y: 32 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay, ease } };

  const words = "You deserve a space where you belong.".split(" ");

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden pb-16 pt-32 sm:pt-40 lg:pb-28">
      <div aria-hidden className="absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-sage/40 blur-3xl" />
      <div aria-hidden className="absolute -right-20 top-0 h-[26rem] w-[26rem] rounded-full bg-peach/70 blur-3xl" />

      <Container className="relative grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <motion.p {...up(0)} className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-[13px] font-semibold text-forest ring-1 ring-forest/10 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-forest" aria-hidden />
            Mental wellness. Real connections. Stronger communities.
          </motion.p>

          <h1 id="hero-title" className="mt-7 text-[3.4rem] font-extrabold leading-[0.98] text-forest sm:text-7xl xl:text-[5.6rem]">
            {words.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden pb-2 align-bottom">
                <motion.span
                  className={`inline-block ${w === "belong." ? "relative" : ""}`}
                  initial={reduce ? false : { y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.06, ease }}
                >
                  {w === "belong." ? (
                    <>
                      <span className="relative z-10">belong.</span>
                      <svg aria-hidden viewBox="0 0 300 30" className="absolute -bottom-1 left-0 z-0 w-full text-peach-deep" preserveAspectRatio="none">
                        <motion.path d="M4 20 Q 80 4 150 16 T 296 12" fill="none" stroke="currentColor" strokeWidth="9" strokeLinecap="round"
                          initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.9, ease }} />
                      </svg>
                    </>
                  ) : w}
                </motion.span>
                {i < words.length - 1 && " "}
              </span>
            ))}
          </h1>

          <motion.p {...up(0.5)} className="mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            At SafeSpace Rwanda, we&apos;re building a community where young people can connect, move, talk, and grow
            together. Because mental well-being starts with feeling seen, heard, and supported.
          </motion.p>

          <motion.div {...up(0.65)} className="mt-9 flex flex-wrap gap-3">
            <Button href="/get-involved#join">Find Your Space</Button>
            <Button href="/about" variant="secondary">Explore Our Mission</Button>
          </motion.div>
        </div>

        <motion.div style={{ y: drift }} className="relative lg:col-span-5">
          <Photo slot={images.hero} priority className="aspect-[4/5] w-full rounded-[3rem]" sizes="(min-width:1024px) 40vw, 100vw" />
          <motion.div
            {...up(1)}
            className="absolute -left-4 bottom-10 flex items-center gap-3 rounded-2xl bg-white/95 p-3 pr-5 shadow-[0_20px_40px_-20px_rgba(23,60,53,.5)] backdrop-blur sm:-left-10"
          >
            <span className="grid h-11 w-11 animate-float place-items-center rounded-xl bg-peach text-forest"><Basketball className="h-5 w-5" aria-hidden /></span>
            <span className="text-sm font-semibold leading-tight text-forest">Move together<span className="block font-normal text-muted">Sport as a way in</span></span>
          </motion.div>
          <motion.div
            {...up(1.15)}
            className="absolute -right-2 top-10 flex items-center gap-3 rounded-2xl bg-forest p-3 pr-5 text-cream shadow-xl sm:-right-6"
          >
            <span className="grid h-11 w-11 animate-float-slow place-items-center rounded-xl bg-sage text-forest"><HeartHandshake className="h-5 w-5" aria-hidden /></span>
            <span className="text-sm font-semibold leading-tight">Talk freely<span className="block font-normal text-sage">No judgement here</span></span>
          </motion.div>
          <div aria-hidden className="absolute -bottom-6 right-10 h-16 w-16 animate-float rounded-full bg-sage" />
        </motion.div>
      </Container>
    </section>
  );
}
