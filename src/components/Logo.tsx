import Link from "next/link";
import { cn } from "@/lib/cn";

/** Two overlapping rounded forms: two people, one shared space. */
export function LogoMark({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <defs>
        <clipPath id={light ? "logo-circle-light" : "logo-circle"}>
          <circle cx="15" cy="21" r="12" />
        </clipPath>
      </defs>
      <circle cx="15" cy="21" r="12" fill="#FFC845" />
      <rect x="20" y="4" width="16" height="32" rx="8" fill="#3347E6" />
      <rect x="20" y="4" width="16" height="32" rx="8" fill={light ? "#FFFFFF" : "#1B2140"} clipPath={`url(#${light ? "logo-circle-light" : "logo-circle"})`} />
    </svg>
  );
}

export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5", className)} aria-label="SafeSpace Rwanda home">
      <LogoMark light={light} className="h-9 w-9" />
      <span className={cn("whitespace-nowrap text-[18px] font-extrabold leading-none tracking-[-0.02em]", light ? "text-white" : "text-ink")}>
        SafeSpace <span className={cn("font-semibold", light ? "text-[#c9cee6]" : "text-ink-soft")}>Rwanda</span>
      </span>
    </Link>
  );
}
