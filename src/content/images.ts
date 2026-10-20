/**
 * Photography slots. Each slot has descriptive alt text and a brief for the
 * shot we want. Drop a real photo into /public/images and set `src` to use it,
 * e.g. src: "/images/hero.jpg". Until then a branded illustration is shown.
 *
 * Use photos you have rights to, ideally of your own community (with consent).
 */
export type ImageSlot = { src?: string; alt: string; brief: string; tone: "sage" | "peach" | "forest" };

export const images = {
  hero: { alt: "Young people laughing together after a pickup basketball game on an outdoor court", brief: "Friends on an outdoor court, golden hour", tone: "sage" },
  story: { alt: "A small group of young people sitting in a circle on the grass, talking", brief: "A relaxed conversation circle outdoors", tone: "peach" },
  founder: { alt: "Portrait of Samuel Kwizera Ihimbazwe, founder of SafeSpace Rwanda", brief: "Founder portrait", tone: "sage" },
  move: { alt: "Two players high-fiving on a basketball court", brief: "Basketball, teamwork", tone: "sage" },
  talk: { alt: "Young people in conversation, one listening closely", brief: "Open conversation", tone: "peach" },
  grow: { alt: "A group of friends walking together on a hillside path", brief: "Friendship, outdoors", tone: "forest" },
  aware: { alt: "Students gathered around a hand-painted poster about mental wellness", brief: "Awareness, community", tone: "peach" },
  sports: { alt: "A basketball mid-air above a hoop, with players reaching for the rebound", brief: "Big editorial basketball shot", tone: "forest" },
  community: { alt: "A crowd of young people cheering at a community event", brief: "Community event energy", tone: "sage" },
} satisfies Record<string, ImageSlot>;
