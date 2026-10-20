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
    const onScroll = () => setScrolled(window.scrollY > 8);
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
    <header
      className={cn(
        "sticky top-0 z-50 bg-white transition-shadow duration-200",
        scrolled && !open && "shadow-[0_1px_0_#e3e6f0,0_6px_20px_-12px_rgba(27,33,64,.18)]",
      )}
    >
      <a href="#main" className="sr-only rounded-full bg-blue px-4 py-2 font-bold text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-3">
        Skip to content
      </a>
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <Logo />
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "rounded-full px-3.5 py-2 text-[15px] font-semibold transition-colors duration-200",
                    isActive(item.href) ? "bg-sky text-blue" : "text-ink-soft hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <span className="hidden sm:block">
            <Button href="/get-involved#join" size="sm">Join Our Community</Button>
          </span>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="press relative grid h-11 w-11 place-items-center rounded-full bg-sky text-ink lg:hidden"
          >
            <span aria-hidden className={cn("absolute h-0.5 w-5 rounded bg-current transition-transform duration-200 ease-out", open ? "rotate-45" : "-translate-y-[4px]")} />
            <span aria-hidden className={cn("absolute h-0.5 w-5 rounded bg-current transition-transform duration-200 ease-out", open ? "-rotate-45" : "translate-y-[4px]")} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-x-0 bottom-0 top-[72px] overflow-y-auto border-t border-line bg-white lg:hidden"
            initial={{ opacity: 0, transform: reduce ? "none" : "translateY(-8px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
          >
            <nav aria-label="Mobile" className="flex min-h-full flex-col justify-between px-5 pb-8 pt-4">
              <ul>
                {nav.map((item) => (
                  <li key={item.href} className="border-b border-line">
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={cn("block py-4 text-2xl font-extrabold tracking-[-0.02em]", isActive(item.href) ? "text-blue" : "text-ink")}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="pt-8">
                <Button href="/get-involved#join" className="w-full">Join Our Community</Button>
                <p className="mt-5 text-center text-[15px] text-ink-soft">A place to belong. A space to be yourself.</p>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
