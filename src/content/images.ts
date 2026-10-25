/**
 * Stock photography used to establish the visual direction until SafeSpace
 * Rwanda has consented photography of its own community. Next/Image resizes
 * and serves modern formats automatically.
 */
export type ImageSlot = {
  src?: string;
  alt: string;
  brief: string;
  tone: "sage" | "clay" | "sand" | "forest";
  credit?: string;
  sourceUrl?: string;
};

export const images = {
  hero: {
    src: "/images/community-joy.png",
    alt: "Friends embracing and smiling together outdoors",
    brief: "Community and joy",
    tone: "clay",
    credit: "Mukhtar Shuaib Mukhtar / Pexels",
    sourceUrl: "https://www.pexels.com/photo/group-of-happy-african-people-outdoors-35752214/",
  },
  play: {
    src: "/images/play-connect.jpg",
    alt: "Friends enjoying a game of basketball on an outdoor court",
    brief: "Play and connect",
    tone: "sand",
    credit: "Luis Zambrano / Pexels",
    sourceUrl: "https://www.pexels.com/photo/couple-playing-basketball-on-outdoor-court-11871931/",
  },
  talk: {
    src: "/images/open-conversation.jpg",
    alt: "Young adults having an open conversation outdoors",
    brief: "Open conversations",
    tone: "sage",
    credit: "Director Chenchi / Pexels",
    sourceUrl: "https://www.pexels.com/photo/group-discussion-among-young-adults-outdoors-36181984/",
  },
  grow: {
    src: "/images/grow-together.jpg",
    alt: "Friends walking and laughing together on a street in Uganda",
    brief: "Grow together",
    tone: "clay",
    credit: "Derrick Pare / Pexels",
    sourceUrl: "https://www.pexels.com/photo/group-of-friends-walking-joyfully-on-a-street-35811628/",
  },
  story: {
    src: "/images/community-gathering.jpg",
    alt: "A community gathered for a conversation outdoors in Kenya",
    brief: "Community and belonging",
    tone: "sage",
    credit: "Seyhmus Kino / Pexels",
    sourceUrl: "https://www.pexels.com/photo/community-gathering-in-rural-african-village-30616602/",
  },
  storySmall: {
    src: "/images/court-sunset.jpg",
    alt: "An outdoor basketball court at sunset",
    brief: "A place to move together",
    tone: "sand",
    credit: "Sajad isz / Pexels",
    sourceUrl: "https://www.pexels.com/photo/a-basketball-hoop-on-an-outdoor-court-17786498/",
  },
  activityBall: {
    src: "/images/basketball-friends.jpg",
    alt: "Friends playing basketball together on an outdoor court",
    brief: "Basketball meetup",
    tone: "clay",
    credit: "Monstera Production / Pexels",
    sourceUrl: "https://www.pexels.com/photo/young-diverse-friends-playing-basketball-on-park-court-5384609/",
  },
  activityTalk: {
    src: "/images/community-talk.jpg",
    alt: "A small group having an informal conversation outdoors",
    brief: "Community conversation",
    tone: "sage",
    credit: "Kindel Media / Pexels",
    sourceUrl: "https://www.pexels.com/photo/a-group-of-people-having-a-meeting-6774952/",
  },
  activityWell: {
    src: "/images/outdoor-wellbeing.jpg",
    alt: "A group practising yoga together outdoors",
    brief: "Wellbeing activity",
    tone: "sand",
    credit: "Marian Sol Miranda / Pexels",
    sourceUrl: "https://www.pexels.com/photo/group-during-yoga-14175839/",
  },
} satisfies Record<string, ImageSlot>;
