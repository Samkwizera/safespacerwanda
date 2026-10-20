/**
 * Educational resources. Content is general wellbeing education and is not
 * medical advice. Have a qualified professional review it before launch.
 */
export type ResourceCategory =
  | "Understanding Mental Health"
  | "Stress and Anxiety"
  | "Building Healthy Habits"
  | "Friendship and Belonging"
  | "Mental Wellness Through Sports"
  | "Finding Support";

export type Resource = {
  slug: string;
  category: ResourceCategory;
  title: string;
  summary: string;
  readMinutes: number;
  tone: "sage" | "peach" | "forest";
  body: { heading?: string; paragraphs?: string[]; list?: string[] }[];
};

export const categories: { name: ResourceCategory; description: string }[] = [
  { name: "Understanding Mental Health", description: "What mental health is, and why everyone has it." },
  { name: "Stress and Anxiety", description: "Making sense of pressure, worry and busy minds." },
  { name: "Building Healthy Habits", description: "Small routines that make a real difference." },
  { name: "Friendship and Belonging", description: "Finding your people and being a good friend." },
  { name: "Mental Wellness Through Sports", description: "How moving together helps us feel better." },
  { name: "Finding Support", description: "How to reach out, and who you can talk to." },
];

export const resources: Resource[] = [
  {
    slug: "what-is-mental-health",
    category: "Understanding Mental Health",
    title: "Mental health is something we all have",
    summary: "Mental health isn't only about illness. It's about how we think, feel and connect, and it changes over time for everyone.",
    readMinutes: 4,
    tone: "sage",
    body: [
      {
        paragraphs: [
          "Just like physical health, mental health is part of being human. It shapes how we handle stress, relate to other people and make choices. Everyone has mental health, and like the weather it shifts. Some seasons feel bright, others feel heavy.",
          "Having a hard week, or a hard month, doesn't mean something is wrong with you. It means you're a person living a real life.",
        ],
      },
      {
        heading: "A spectrum, not a switch",
        paragraphs: [
          "It can help to think of mental health as a spectrum. On some days you might feel energised and connected. On others you might feel low, tired or on edge. Most people move along that spectrum throughout their lives.",
          "Paying attention to where you are, without judging yourself for it, is a powerful first step.",
        ],
      },
      {
        heading: "Things that help many people",
        list: [
          "Feeling connected to people who accept you",
          "Moving your body in ways you enjoy",
          "Regular sleep and meals",
          "Having someone you can talk to honestly",
          "Time to rest, play and do things that feel meaningful",
        ],
      },
      {
        heading: "When to reach out",
        paragraphs: [
          "If difficult feelings last for weeks, get in the way of daily life, or feel overwhelming, that's a sign to talk with someone you trust and a qualified health professional. Asking for help is a sign of strength, not weakness.",
        ],
      },
    ],
  },
  {
    slug: "making-sense-of-stress",
    category: "Stress and Anxiety",
    title: "Making sense of stress",
    summary: "Exams, family expectations, money, the future. Here's what stress does in your body, and some gentle ways to ease it.",
    readMinutes: 5,
    tone: "peach",
    body: [
      {
        paragraphs: [
          "Stress is your body's way of responding to pressure. In small doses it can help you focus and get things done. When it piles up without a break, it can leave you feeling exhausted, irritable or stuck.",
        ],
      },
      {
        heading: "Common signs",
        list: [
          "Trouble sleeping, or sleeping much more than usual",
          "Racing thoughts or finding it hard to concentrate",
          "Headaches, tense shoulders or an upset stomach",
          "Feeling short-tempered or wanting to withdraw",
        ],
      },
      {
        heading: "Small things that can help",
        list: [
          "Slow your breathing: in for four counts, out for six, a few times over",
          "Break big tasks into one small next step",
          "Get outside and move, even a short walk counts",
          "Talk it through with a friend instead of carrying it alone",
          "Limit late-night scrolling when you can",
        ],
      },
      {
        heading: "Stress and anxiety",
        paragraphs: [
          "Anxiety is a feeling of worry or fear that can stick around even when there's no clear reason. Many people experience it. If anxiety is frequent, intense or stops you doing things you care about, a health professional can help you understand it and find support that works for you.",
        ],
      },
    ],
  },
  {
    slug: "small-habits-big-difference",
    category: "Building Healthy Habits",
    title: "Small habits, real difference",
    summary: "You don't need a perfect routine. A few steady habits around sleep, movement and connection can help you feel more grounded.",
    readMinutes: 4,
    tone: "forest",
    body: [
      {
        paragraphs: [
          "Healthy habits don't have to be dramatic. Research consistently links regular sleep, physical activity and social connection with better wellbeing. The key is to start small and be kind to yourself when things slip.",
        ],
      },
      {
        heading: "Ideas to try this week",
        list: [
          "Pick a regular time to go to bed and wake up",
          "Drink water and eat regular meals, especially on busy days",
          "Move for 20–30 minutes: a game, a walk, a dance",
          "Message one friend you haven't spoken to in a while",
          "Write down one thing that went okay today",
        ],
      },
      {
        heading: "Progress, not perfection",
        paragraphs: [
          "Missing a day doesn't undo anything. Habits are built by returning to them, not by never breaking them.",
        ],
      },
    ],
  },
  {
    slug: "finding-your-people",
    category: "Friendship and Belonging",
    title: "Finding your people",
    summary: "Loneliness is more common than it looks. Here are some honest ideas for building connection, one step at a time.",
    readMinutes: 5,
    tone: "peach",
    body: [
      {
        paragraphs: [
          "It's possible to feel lonely in a full classroom or a busy home. Loneliness isn't about how many people are around you. It's about whether you feel seen. If you feel this way, you are far from alone.",
        ],
      },
      {
        heading: "Ways to start connecting",
        list: [
          "Join something built around an activity, like a team, club or choir. Doing things side by side makes talking easier.",
          "Show up more than once. Friendships grow through repeated, simple moments.",
          "Ask questions and listen. People remember who made them feel heard.",
          "Say yes to small invitations, even when it feels awkward.",
        ],
      },
      {
        heading: "Being a good friend",
        paragraphs: [
          "Sometimes the best thing you can say is \"I'm here.\" You don't need to fix a friend's problems. Listening without judgement and checking in again later can mean a lot.",
        ],
      },
    ],
  },
  {
    slug: "why-moving-together-helps",
    category: "Mental Wellness Through Sports",
    title: "Why moving together helps",
    summary: "Sport is more than fitness. Playing with others can lift your mood, build confidence and create friendships that last.",
    readMinutes: 4,
    tone: "sage",
    body: [
      {
        paragraphs: [
          "Physical activity is widely recognised as good for mental wellbeing. It can help reduce stress, improve sleep and boost mood. When we move together, there's an extra benefit: connection.",
        ],
      },
      {
        heading: "What team activities can offer",
        list: [
          "A reason to show up regularly, which builds routine",
          "Shared goals and small wins that build confidence",
          "Easy conversation, because you're doing something side by side",
          "A sense of being part of something",
        ],
      },
      {
        heading: "You don't have to be good at it",
        paragraphs: [
          "The goal isn't to be the best player on the court. It's to enjoy moving and be with others. Basketball, football, running, dance, a walk with friends: it all counts.",
        ],
      },
    ],
  },
  {
    slug: "reaching-out-for-support",
    category: "Finding Support",
    title: "Reaching out for support",
    summary: "Not sure who to talk to, or how to start? Here's a gentle guide to asking for help.",
    readMinutes: 5,
    tone: "forest",
    body: [
      {
        paragraphs: [
          "Reaching out can feel hard. You might worry about being a burden or not being taken seriously. Your feelings are valid, and you deserve support.",
        ],
      },
      {
        heading: "People you could talk to",
        list: [
          "A friend or family member you trust",
          "A teacher, school counsellor or student welfare office",
          "A faith or community leader you feel safe with",
          "A doctor, nurse or health centre, who can connect you with mental health services",
        ],
      },
      {
        heading: "Ways to start the conversation",
        list: [
          "\"I've been finding things hard lately. Can we talk?\"",
          "\"I don't really know how to explain it, but I'm not feeling like myself.\"",
          "Write it down first, or send a message if saying it out loud feels too hard.",
        ],
      },
      {
        heading: "If you are in danger",
        paragraphs: [
          "If you or someone else is in immediate danger, contact local emergency services or go to the nearest hospital or health centre right away, and tell someone you trust.",
          "SafeSpace Rwanda is a community and education initiative. We are not a crisis or clinical service and can't respond to emergencies.",
        ],
      },
    ],
  },
];

export function getResource(slug: string) {
  return resources.find((r) => r.slug === slug);
}
