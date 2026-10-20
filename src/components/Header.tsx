"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { nav } from "@/content/site";
import { cn } from "@/lib/cn";
import { Logo } from "./Logo";
import { Button } from "./Button";

export function Header() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <a href="#main" className="sr-only rounded-full bg-forest px-4 py-2 text-cream focus:not-sr-only focus:absolute focus:left-4 focus:top-4">
        Skip to content
      </a>
      <div
        className={cn(
          "relative z-10 mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5",
          scrolled || open ? "bg-cream/85 shadow-[0_8px_30px_-12px_rgba(23,60,53,.25)] ring-1 ring-forest/5 backdrop-blur-xl" : "bg-transparent",
        )}
      >
        <Logo />
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-[15px] font-medium transition-colors",
                    isActive(item.href) ? "text-forest" : "text-charcoal/75 hover:text-forest",
                  )}
                >
                  {isActive(item.href) && (
                    <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-sage-soft" transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />
                  )}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <Button href="/get-involved#join" className="hidden px-5 py-2.5 text-sm sm:inline-flex">
            Join Our Community
          </Button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative grid h-11 w-11 place-items-center rounded-full bg-forest text-cream lg:hidden"
          >
            <span aria-hidden className={cn("absolute h-0.5 w-5 rounded bg-current transition-all duration-300", open ? "rotate-45" : "-translate-y-[5px]")} />
            <span aria-hidden className={cn("absolute h-0.5 w-5 rounded bg-current transition-all duration-300", open ? "-rotate-45" : "translate-y-[5px]")} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 bg-forest lg:hidden on-dark"
            initial={reduce ? { opacity: 0 } : { clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={reduce ? { opacity: 1 } : { clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={reduce ? { opacity: 0 } : { clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          >
            <nav aria-label="Mobile" className="flex h-full flex-col justify-between px-7 pb-10 pt-28">
              <ul className="space-y-1">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.05, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={cn("block py-2 font-display text-4xl font-extrabold tracking-tight", isActive(item.href) ? "text-peach" : "text-cream")}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <Button href="/get-involved#join" variant="peach" className="w-full justify-center py-4">
                  Join Our Community
                </Button>
                <p className="mt-6 text-center text-sm text-sage">A place to belong. A space to be yourself.</p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
