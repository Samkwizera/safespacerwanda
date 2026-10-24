"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/content/site";
import { Button } from "./Button";
import { Wordmark } from "./Wordmark";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="bg-forest px-4 py-2.5 text-center">
        <p className="label text-[0.62rem] text-ivory/80 sm:text-[0.68rem]">{site.announcement}</p>
      </div>
      <header className="sticky top-3 z-50 px-3 pt-3 sm:px-8">
        <nav
          aria-label="Main"
          className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 rounded-full border border-line/70 bg-ivory-soft/90 py-2 pl-6 pr-2 shadow-[0_8px_30px_-18px_rgba(28,48,35,0.35)] backdrop-blur-md"
        >
          <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
            <Wordmark />
          </Link>
          <ul className="hidden items-center gap-8 lg:flex">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-[15px] text-ink-soft transition-colors hover:text-forest">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <Button href="/#contact" className="hidden min-h-11 px-5 sm:inline-flex">
              Join the Community
            </Button>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
              className="grid size-11 place-items-center rounded-full bg-forest text-ivory lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
        {open && (
          <div id="mobile-menu" className="mx-auto mt-2 max-w-[1180px] rounded-[28px] border border-line/70 bg-ivory-soft p-3 shadow-xl lg:hidden">
            <ul>
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3.5 font-serif text-2xl text-forest hover:bg-sage-mist">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="p-2" onClick={() => setOpen(false)}>
              <Button href="/#contact" className="w-full">Join the Community</Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
