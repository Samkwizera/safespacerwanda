/**
 * Photography slots. Drop a photo into /public/images and set `src`
 * (e.g. "/images/hero.jpg") to replace the placeholder. Next/Image resizes
 * and serves modern formats automatically.
 *
 * Use photos of your own community, taken with everyone's consent.
 */
export type ImageSlot = { src?: string; alt: string; brief: string; tone: "sage" | "clay" | "sand" | "forest" };

export const images = {
  hero: { alt: "Young people laughing together on an outdoor basketball court in Kigali", brief: "Basketball, joy, golden light", tone: "clay" },
  play: { alt: "Two friends high-fiving after a basketball game", brief: "Play & connect", tone: "sand" },
  talk: { alt: "A small group sitting in a circle on the grass, deep in conversation", brief: "Open conversations", tone: "sage" },
  grow: { alt: "Friends walking together along a hillside path", brief: "Grow together", tone: "clay" },
  story: { alt: "A community gathering of young people outdoors, smiling and talking", brief: "Community, belonging", tone: "sage" },
  storySmall: { alt: "A basketball resting on an outdoor court at sunset", brief: "Detail, court", tone: "sand" },
  activityBall: { alt: "Players reaching for a rebound under the hoop", brief: "Basketball meetup", tone: "clay" },
  activityTalk: { alt: "Young people listening to each other in a relaxed circle", brief: "Community conversation", tone: "sage" },
  activityWell: { alt: "A group stretching together on the grass in the morning", brief: "Wellbeing activity", tone: "sand" },
} satisfies Record<string, ImageSlot>;
