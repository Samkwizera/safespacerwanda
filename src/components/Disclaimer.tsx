import { HeartHandshake } from "lucide-react";
import { cn } from "@/lib/cn";

export function Disclaimer({ className }: { className?: string }) {
  return (
    <aside
      aria-label="Important information about our support"
      className={cn("flex gap-4 rounded-3xl border border-forest/15 bg-white p-6 sm:p-7", className)}
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-peach text-forest">
        <HeartHandshake className="h-5 w-5" aria-hidden />
      </span>
      <div className="text-[15px] leading-relaxed text-charcoal">
        <p className="font-display font-bold text-forest">We&apos;re a community, not a clinic.</p>
        <p className="mt-1.5">
          SafeSpace Rwanda offers community and educational support. It does not replace qualified mental health
          professionals, and we can&apos;t respond to emergencies. If you or someone else is in immediate danger,
          contact local emergency services or go to your nearest hospital or health centre.
        </p>
      </div>
    </aside>
  );
}
