/**
 * Community events. Only add events that are confirmed.
 * Every field except `title` and `kind` is optional.
 */
export type EventKind = "Community event" | "Sports meetup" | "Wellness conversation" | "Volunteer opportunity" | "Youth-led activity";

export type CommunityEvent = {
  title: string;
  kind: EventKind;
  date?: string; // ISO date, e.g. "2026-11-14"
  time?: string;
  location?: string;
  description?: string;
  registrationUrl?: string;
};

export const events: CommunityEvent[] = [];

export const eventKinds: { kind: EventKind; plural: string; blurb: string }[] = [
  { kind: "Sports meetup", plural: "Sports meetups", blurb: "Casual games where everyone gets to play, whatever your level." },
  { kind: "Wellness conversation", plural: "Wellness conversations", blurb: "Small, friendly circles to talk about how life is really going." },
  { kind: "Community event", plural: "Community events", blurb: "Days for coming together, meeting new people and having fun." },
  { kind: "Volunteer opportunity", plural: "Volunteer opportunities", blurb: "Ways to help make activities happen for others." },
  { kind: "Youth-led activity", plural: "Youth-led activities", blurb: "Ideas from young people, run by young people." },
];
