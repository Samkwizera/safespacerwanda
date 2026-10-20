import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const styles = {
  primary: "bg-forest text-cream hover:bg-forest-deep shadow-[0_10px_30px_-12px_rgba(23,60,53,.6)]",
  secondary: "bg-transparent text-forest ring-1 ring-forest/25 hover:ring-forest hover:bg-white/60",
  peach: "bg-peach text-forest hover:bg-peach-deep",
  light: "bg-cream text-forest hover:bg-white",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  arrow = true,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof styles;
  className?: string;
  arrow?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold transition-all duration-300 active:scale-[.97]",
        styles[variant],
        className,
      )}
    >
      {children}
      {arrow && (
        <ArrowUpRight
          aria-hidden
          className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      )}
    </Link>
  );
}
