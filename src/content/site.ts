/**
 * Site-wide settings. Replace the placeholder values once official
 * accounts and contact details are confirmed.
 */
export const site = {
  name: "SafeSpace Rwanda",
  tagline: "A place to belong. A space to be yourself.",
  footerTagline: "Creating space. Building belonging.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  // TODO: replace with the official inbox once it exists.
  email: "hello@safespacerwanda.example",
  social: {
    // Placeholder links until official accounts are supplied.
    instagram: "#",
    linkedin: "#",
  },
  locales: ["en"] as const, // add "rw" when the Kinyarwanda version is ready
  defaultLocale: "en" as const,
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "What We Do" },
  { href: "/community", label: "Community" },
  { href: "/resources", label: "Resources" },
  { href: "/get-involved", label: "Get Involved" },
];
