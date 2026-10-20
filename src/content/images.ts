/**
 * Photography slots. Each slot has descriptive alt text and a brief for the
 * shot we want. Drop a real photo into /public/images and set `src` to use it,
 * e.g. src: "/images/hero.jpg". Until then a calm brand shape is shown.
 *
 * Use photos you have rights to, ideally of your own community (with consent).
 */
import type { Tone } from "@/components/Shapes";

export type ImageSlot = { src?: string; alt: string; brief: string; tone: Tone };

export const images = {
  hero: { alt: "Young people sitting together on a grassy hillside, laughing", brief: "Friends together outdoors, golden hour", tone: "sky" },
  story: { alt: "A small group of young people sitting in a circle on the grass, talking", brief: "A relaxed conversation circle outdoors", tone: "sun" },
  founder: { alt: "Portrait of Samuel Kwizera Ihimbazwe, founder of SafeSpace Rwanda", brief: "Founder portrait", tone: "sky" },
  move: { alt: "Two players high-fiving on a basketball court", brief: "Basketball, teamwork", tone: "mint" },
  talk: { alt: "Young people in conversation, one listening closely", brief: "Open conversation", tone: "blush" },
  grow: { alt: "A group of friends walking together on a hillside path", brief: "Friendship, outdoors", tone: "mint" },
  aware: { alt: "Students gathered around a hand-painted poster about mental wellness", brief: "Awareness, community", tone: "sun" },
  sports: { alt: "A basketball mid-air above a hoop, with players reaching for the rebound", brief: "Big editorial basketball shot", tone: "sky" },
  community: { alt: "A crowd of young people cheering at a community event", brief: "Community event energy", tone: "blush" },
} satisfies Record<string, ImageSlot>;
