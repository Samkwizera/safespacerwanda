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

export const eventKinds: { kind: EventKind; blurb: string }[] = [
  { kind: "Sports meetup", blurb: "Casual games where everyone gets to play, whatever your level." },
  { kind: "Wellness conversation", blurb: "Small, friendly circles to talk about how life is really going." },
  { kind: "Community event", blurb: "Days for coming together, meeting new people and having fun." },
  { kind: "Volunteer opportunity", blurb: "Ways to help make activities happen for others." },
  { kind: "Youth-led activity", blurb: "Ideas from young people, run by young people." },
];
