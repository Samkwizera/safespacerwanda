import { cn } from "@/lib/cn";

export type Tone = "sky" | "sun" | "blush" | "mint";

const fields: Record<Tone, { bg: string; a: string; b: string }> = {
  sky: { bg: "bg-sky", a: "#FFC845", b: "#3347E6" },
  sun: { bg: "bg-sunsoft", a: "#FF7A66", b: "#FFC845" },
  blush: { bg: "bg-blush", a: "#3347E6", b: "#FF7A66" },
  mint: { bg: "bg-mint", a: "#3347E6", b: "#FFC845" },
};
const INK = "#1B2140";

/**
 * The brand mark at scale: a sun circle and a blue capsule overlapping, with
 * the space they share filled ink. Reserved for the hero, the 404 and the logo.
 * `breathe` gives it a slow inhale/exhale; it's off under reduced motion.
 */
export function SharedSpace({ breathe = false, className }: { breathe?: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 400 320" className={className} aria-hidden>
      <defs>
        <clipPath id="shared-space-circle">
          <circle cx="150" cy="170" r="120" />
        </clipPath>
      </defs>
      <g className={cn(breathe && "origin-center animate-[breathe_12s_ease-in-out_infinite] [transform-box:fill-box]")}>
        <circle cx="150" cy="170" r="120" fill="#FFC845" />
        <rect x="200" y="20" width="160" height="290" rx="80" fill="#3347E6" />
        {/* The shared space: the part of the capsule inside the circle. */}
        <rect x="200" y="20" width="160" height="290" rx="80" fill={INK} clipPath="url(#shared-space-circle)" />
      </g>
    </svg>
  );
}

/** Quiet arrangements of the two forms, so photo slots don't all repeat the hero mark. */
const arrangements = [
  // A large circle rising from the bottom edge, with a small one above it.
  (a: string, b: string) => (
    <>
      <circle cx="200" cy="330" r="170" fill={a} />
      <circle cx="292" cy="92" r="34" fill={b} />
    </>
  ),
  // A capsule and a circle side by side, with space between them.
  (a: string, b: string) => (
    <>
      <rect x="92" y="60" width="96" height="190" rx="48" fill={a} />
      <circle cx="270" cy="190" r="60" fill={b} />
    </>
  ),
  // A circle bleeding off the top-right corner, and a capsule lying low on the left.
  (a: string, b: string) => (
    <>
      <circle cx="360" cy="10" r="150" fill={a} />
      <rect x="40" y="200" width="200" height="64" rx="32" fill={b} />
    </>
  ),
  // A tall capsule cropped by the bottom edge, with a circle resting against it.
  (a: string, b: string) => (
    <>
      <rect x="150" y="70" width="110" height="300" rx="55" fill={a} />
      <circle cx="120" cy="128" r="44" fill={b} />
    </>
  ),
];

function pick(seed: string) {
  let h = 0;
  for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return arrangements[h % arrangements.length];
}

/**
 * Soft colour field with an arrangement of the brand's two forms, used wherever
 * a photo hasn't been supplied yet. Without a label it is decorative.
 */
export function ShapeField({ tone, label, seed, variant, className }: { tone: Tone; label?: string; seed?: string; variant?: number; className?: string }) {
  const f = fields[tone];
  // Lists pass their index as `variant` so neighbouring slots never match.
  const draw = variant === undefined ? pick(seed ?? label ?? tone) : arrangements[variant % arrangements.length];
  return (
    <div {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })} className={cn("relative overflow-hidden", f.bg, className)}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
        {draw(f.a, f.b)}
      </svg>
    </div>
  );
}
