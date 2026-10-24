/**
 * Site-wide content. Everything marked TODO is a placeholder: replace it
 * once official details are confirmed.
 */
export const site = {
  name: "SafeSpace Rwanda",
  tagline: "A space to belong. A chance to thrive.",
  description:
    "SafeSpace Rwanda is a community initiative supporting young people's mental wellbeing through sports, connection and open conversations.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  announcement: "Building connection and wellbeing through sports and community.",
  // TODO: replace with the official inbox once it exists. Leave "" to hide it.
  email: "",
  // TODO: add official account URLs. Entries with an empty href are hidden.
  social: [
    { label: "Instagram", href: "" },
    { label: "LinkedIn", href: "" },
    { label: "X", href: "" },
  ],
};

export const nav = [
  { href: "/#story", label: "Our Story" },
  { href: "/#what-we-do", label: "What We Do" },
  { href: "/#get-involved", label: "Get Involved" },
  { href: "/#contact", label: "Contact" },
];

export const values = ["Belonging", "Open Conversation", "Movement", "Community"];

/**
 * Upcoming community activities. Leave empty to show the "coming soon" state.
 * Example entry:
 * { title: "Saturday basketball meetup", kind: "Basketball", date: "Sat 14 Nov · 9:00", venue: "Venue TBC, Kigali", href: "https://..." }
 */
export type Activity = { title: string; kind: string; date: string; venue: string; href?: string };
export const activities: Activity[] = [];
