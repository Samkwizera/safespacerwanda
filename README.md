# SafeSpace Rwanda

*A place to belong. A space to be yourself.*

The website for SafeSpace Rwanda, a youth mental wellness and community initiative. Built with Next.js (App Router), TypeScript, Tailwind CSS v4, Motion and Lucide. Form submissions are stored in Supabase.

## Run locally

```bash
npm install
cp .env.example .env.local   # fill in the values
npm run dev
```

## Editing content

All copy lives in `src/content/`. You don't need to touch the components to change it.

| File | What it controls |
| --- | --- |
| `site.ts` | Name, contact email, social links, navigation |
| `images.ts` | Photo slots. Put photos in `public/images/` and set `src`. Until then a branded illustration is shown. |
| `events.ts` | Community events. Add only confirmed events. While the list is empty, a "Coming soon" state is shown. |
| `resources.ts` | Resource articles and categories |
| `src/components/sections/Founder.tsx` | Founder profile: quote and bio |

**Kinyarwanda:** content is kept separate from the components so a translated copy can be added later (e.g. `content/rw/`) and selected by locale.

## Forms and Supabase

1. Create a Supabase project and run `supabase/schema.sql` in its SQL editor.
2. Set `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in `.env.local` and in Vercel's environment variables. These are server-only. Never prefix them with `NEXT_PUBLIC_`.

How the forms are protected:
- Validation (zod) runs in the browser for quick feedback and again on the server at `/api/submit`.
- Spam protection: a hidden honeypot field, a minimum fill time, and a per-IP rate limit.
- Tables have Row Level Security enabled and **no policies**, so submissions can't be read with the public key.
- Each form requires consent, and the time of consent is stored.
- If Supabase isn't configured, the forms show an error. They never show a false success message.
- The forms don't ask for health information.

## Before launch

- [ ] Replace the placeholder email and social links in `src/content/site.ts`
- [ ] Add real photos (with consent from the people in them) in `src/content/images.ts`
- [ ] Add the founder's bio and photo
- [ ] Have a qualified professional review the resource articles
- [ ] Verify any Rwanda emergency or referral contacts before adding them
- [ ] Have the Privacy Policy reviewed against Rwanda's data protection law (Law No. 058/2021)
- [ ] Set `NEXT_PUBLIC_SITE_URL`

## Deploy

Push to GitHub, import the repo in Vercel, add the environment variables, and deploy.
