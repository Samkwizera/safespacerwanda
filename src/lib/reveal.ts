import type { CSSProperties } from "react";

/** Props that opt an element into the scroll reveal, optionally staggered. */
export function reveal(delay = 0) {
  return { "data-reveal": "", style: { "--reveal-delay": `${delay}ms` } as CSSProperties };
}
