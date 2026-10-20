import Link from "next/link";
import { cn } from "@/lib/cn";

/** Two overlapping rounded forms: two people, one shared space. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <rect x="2" y="6" width="24" height="28" rx="12" fill="currentColor" />
      <rect x="14" y="6" width="24" height="28" rx="12" fill="#F3D8CA" opacity=".92" />
      <circle cx="20" cy="20" r="3.2" fill="#173C35" />
    </svg>
  );
}

export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5", className)} aria-label="SafeSpace Rwanda home">
      <LogoMark className={cn("h-9 w-9", light ? "text-sage" : "text-forest")} />
      <span className={cn("font-display text-[17px] font-extrabold leading-none tracking-tight", light ? "text-cream" : "text-forest")}>
        SafeSpace
        <span className={cn("mt-0.5 block text-[10px] font-semibold uppercase tracking-[.28em]", light ? "text-sage" : "text-muted")}>
          Rwanda
        </span>
      </span>
    </Link>
  );
}
