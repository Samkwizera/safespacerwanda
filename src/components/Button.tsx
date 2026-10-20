import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const styles = {
  primary: "bg-blue text-white hover:bg-blue-deep",
  secondary: "bg-transparent text-ink ring-[1.5px] ring-inset ring-ink/20 hover:ring-ink",
  sun: "bg-sun text-ink hover:bg-[#ffbd1f]",
  light: "bg-white text-ink hover:bg-sky",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  arrow = false,
  size = "md",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof styles;
  className?: string;
  arrow?: boolean;
  size?: "md" | "sm";
}) {
  return (
    <Link
      href={href}
      className={cn(
        "press group inline-flex items-center justify-center gap-2 rounded-full font-bold",
        size === "md" ? "min-h-12 px-6 text-[16px]" : "min-h-11 px-5 text-[15px]",
        styles[variant],
        className,
      )}
    >
      {children}
      {arrow && (
        <ArrowRight aria-hidden className="h-4 w-4 transition-transform duration-200 ease-out [@media(hover:hover)]:group-hover:translate-x-0.5" />
      )}
    </Link>
  );
}

/** Plain text link with an arrow, for secondary routes. */
export function TextLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={cn("group inline-flex items-center gap-1.5 font-bold text-blue hover:text-blue-deep", className)}>
      {children}
      <ArrowRight aria-hidden className="h-4 w-4 transition-transform duration-200 ease-out [@media(hover:hover)]:group-hover:translate-x-0.5" />
    </Link>
  );
}
