import Image from "next/image";
import type { ImageSlot } from "@/content/images";
import { cn } from "@/lib/cn";

const tones: Record<ImageSlot["tone"], string> = {
  sage: "from-[#c9d0bb] via-[#b4bfa4] to-[#8d9c81]",
  clay: "from-[#e8cdb6] via-[#d5a98a] to-[#b77d5c]",
  sand: "from-[#ece3cf] via-[#dccdb0] to-[#c4b08c]",
  forest: "from-[#3b5444] via-[#2b4433] to-[#1c3023]",
};

/**
 * Rounded editorial photo. Until a real `src` is set in content/images.ts it
 * renders a warm placeholder that names the intended shot.
 */
export function Photo({
  slot,
  className,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  slot: ImageSlot;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  if (slot.src) {
    return (
      <div className={cn("relative overflow-hidden rounded-[28px] bg-cream", className)}>
        <Image src={slot.src} alt={slot.alt} fill priority={priority} sizes={sizes} className="object-cover" />
      </div>
    );
  }
  return (
    <div role="img" aria-label={slot.alt} className={cn("relative overflow-hidden rounded-[28px] bg-gradient-to-br", tones[slot.tone], className)}>
      <svg aria-hidden viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full opacity-25 mix-blend-soft-light">
        <circle cx="300" cy="90" r="140" fill="#fff" />
        <path d="M-20 330 C 90 250, 200 380, 420 280 L420 420 L-20 420Z" fill="#000" opacity=".35" />
      </svg>
      <span className="label absolute bottom-4 left-4 rounded-full bg-ivory/85 px-3 py-1.5 text-[0.6rem] text-ink-soft backdrop-blur-sm">
        Photo · {slot.brief}
      </span>
    </div>
  );
}
