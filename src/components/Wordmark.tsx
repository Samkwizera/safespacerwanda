import { cn } from "@/lib/cn";

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("font-serif text-[1.35rem] leading-none tracking-[-0.02em] text-forest", className)}>
      SafeSpace <em className="text-sage">Rwanda</em>
    </span>
  );
}
