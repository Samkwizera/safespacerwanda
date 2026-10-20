import Image from "next/image";
import type { ImageSlot } from "@/content/images";
import { cn } from "@/lib/cn";
import { ShapeField } from "./Shapes";

/**
 * Rounded image. Shows a calm brand shape until a real photo `src`
 * is set in content/images.ts.
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
  if (!slot.src) return <ShapeField tone={slot.tone} label={slot.alt} className={cn("rounded-3xl", className)} />;
  return (
    <div className={cn("relative overflow-hidden rounded-3xl", className)}>
      <Image src={slot.src} alt={slot.alt} fill priority={priority} sizes={sizes} className="object-cover" />
    </div>
  );
}
