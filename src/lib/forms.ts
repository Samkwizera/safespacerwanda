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

export const interests = ["Participate", "Volunteer", "Partner", "General enquiry"] as const;

export const schemas = {
  interest: z.object({
    name,
    email,
    interest: z.enum(interests, { error: "Please choose how you'd like to get involved." }),
    message: shortText(1500),
    consent,
  }),
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
