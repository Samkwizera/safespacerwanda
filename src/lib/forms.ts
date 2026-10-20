import { z } from "zod";

/**
 * Shared form schemas. Used on the client for instant feedback and again
 * on the server, which is the source of truth.
 *
 * We deliberately do not ask for health information in any of these forms.
 */
const name = z.string().trim().min(2, "Please tell us your name.").max(80);
const email = z.string().trim().toLowerCase().email("Please enter a valid email address.").max(160);
const consent = z.literal(true, { error: "Please confirm you agree so we can contact you." });
const shortText = (max: number) => z.string().trim().max(max, `Please keep this under ${max} characters.`).optional().or(z.literal(""));

export const ageRanges = ["16–17", "18–24", "25–30", "Over 30"] as const;

export const schemas = {
  join: z.object({
    name,
    email,
    ageRange: z.enum(ageRanges, { error: "Please choose an age range." }),
    location: shortText(80),
    interests: z.array(z.enum(["Sports meetups", "Conversations", "Community events", "Awareness work"])).max(4).optional(),
    consent,
  }),
  volunteer: z.object({
    name,
    email,
    ageRange: z.enum(ageRanges, { error: "Please choose an age range." }),
    skills: z.string().trim().min(10, "Tell us a little about how you'd like to help.").max(800),
    availability: shortText(120),
    consent,
  }),
  partner: z.object({
    name,
    email,
    organization: z.string().trim().min(2, "Please share your organisation's name.").max(120),
    idea: z.string().trim().min(20, "Share a few sentences about what you have in mind.").max(1500),
    consent,
  }),
  contact: z.object({
    name,
    email,
    subject: z.string().trim().min(3, "Add a short subject.").max(120),
    message: z.string().trim().min(10, "Your message is a little short.").max(2000),
    consent,
  }),
  newsletter: z.object({ email, consent }),
};

export type FormKind = keyof typeof schemas;
export const formKinds = Object.keys(schemas) as FormKind[];

export type SubmitResult =
  | { ok: true }
  | { ok: false; error: string; fieldErrors?: Record<string, string> };

/** Minimum time (ms) between rendering a form and submitting it. Bots are fast. */
export const MIN_FILL_MS = 2500;
/** Hidden field name used as a honeypot. */
export const HONEYPOT = "website";
