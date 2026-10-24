import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "light";

const styles: Record<Variant, string> = {
  primary: "bg-forest text-ivory hover:bg-forest-soft",
  ghost: "border border-forest/25 text-forest hover:border-forest hover:bg-forest/5",
  light: "bg-ivory text-forest hover:bg-white",
};

export function Button({
  href,
  children,
  variant = "primary",
  arrow = false,
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-6 text-[15px] font-medium transition-colors duration-300",
        styles[variant],
        className,
      )}
    >
      {children}
      {arrow && <ArrowRight aria-hidden className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5" />}
    </Link>
  );
}

export function Label({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("label text-ink-soft", className)}>{children}</p>;
}

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1240px] px-4 sm:px-8", className)}>{children}</div>;
}
