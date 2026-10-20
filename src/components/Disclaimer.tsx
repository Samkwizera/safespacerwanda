import { cn } from "@/lib/cn";

export function Disclaimer({ className }: { className?: string }) {
  return (
    <aside
      aria-label="Important information about our support"
      className={cn("rounded-2xl bg-sunsoft p-6 sm:p-7", className)}
    >
      <p className="font-extrabold text-ink">We&apos;re a community, not a clinic.</p>
      <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">
        SafeSpace Rwanda offers community and educational support. It does not replace qualified mental health
        professionals, and we can&apos;t respond to emergencies. If you or someone else is in immediate danger,
        contact local emergency services or go to your nearest hospital or health centre.
      </p>
    </aside>
  );
}
