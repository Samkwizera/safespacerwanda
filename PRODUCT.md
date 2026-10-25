# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally on the homepage:

- **Young people in Rwanda** (students and young adults, including anyone feeling isolated, stressed or under pressure) deciding whether to join the community, come to a game or a conversation, or sign up for updates.
- **Backers and helpers**: schools, universities, youth organisations, sports teams and clubs, sponsors and community partners deciding whether to partner, plus student leaders and volunteers deciding whether to help run activities.

Each audience needs its own clear path from the homepage.

## Product Purpose

SafeSpace Rwanda is a youth-focused mental wellness and community initiative. It builds belonging and wellbeing through sport (basketball, football, walks, runs), open conversation in small circles, friendship and awareness work, in the everyday places young people already gather rather than in clinics. Success is young people joining and showing up, volunteers stepping in, and organisations partnering.

## Positioning

Wellbeing through belonging, with sport as the way in: "Sometimes, support starts with a conversation. Sometimes, it starts with showing up for a game." It is explicitly a community, not a clinic, and says so.

## Operating Context

- Four pillars: Move Together, Talk Freely, Grow Together, Raise Awareness.
- Joining path: Show up → Connect → Open up → Lead.
- Event kinds: sports meetups, wellness conversations, community events, volunteer opportunities, youth-led activities.
- Three involvement routes: join the community, become a volunteer, partner with us. Each has a form stored in Supabase via `/api/submit`.
- Newsletter sign-up.
- Resource articles on mental health, stress, habits and belonging.

## Capabilities and Constraints

- Next.js 15 App Router, TypeScript, Tailwind CSS v4, Motion, Lucide. Deployed on Vercel.
- All copy lives in `src/content/`, kept separate from components so a Kinyarwanda version can be added later. Layouts must survive longer translated strings.
- Forms: zod validation on client and server, honeypot, minimum fill time, per-IP rate limit, required consent with a timestamp. Forms never show a false success and never ask for health information.
- Official contact channels: `Safespacerwanda@gmail.com` and Instagram `@safespacerwanda`.
- Still undecided: Kinyarwanda translation and emergency/referral contacts (to be verified before adding).

## Brand Commitments

- Name: SafeSpace Rwanda.
- Taglines, kept verbatim: "A place to belong. A space to be yourself." and "Creating space. Building belonging."
- Voice: warm, plain, hopeful, honest about its role, never clinical.
- The orange sunrise SafeSpace Rwanda logo supplied by the project owner is the current official mark.
- Standing visual preference (chosen October 2026): the category standard, a calm, friendly community-wellbeing site played straight, at the craft level of Headspace. No novelty concept worlds.
- The visual identity is never themed on sport or basketball. Sport stays in the content as one pillar among four, not as the look.

## Evidence on Hand

- No real SafeSpace Rwanda photos yet. The current slots use clearly documented Pexels stock photography and should be replaced with consented community photography when it becomes available.
- No founder bio or quote yet (founder: Samuel Kwizera Ihimbazwe). Do not write one on his behalf.
- No confirmed events. The empty "coming soon" state is the real state.
- Resource articles exist in `src/content/resources.ts` and are pending professional review.
- Never invent testimonials, participant numbers, partners, impact figures or events.

## Product Principles

1. Belonging first: anyone can show up as they are, with no experience or sign-up essay needed.
2. Honest about its role: community and educational support, not a clinical or crisis service, stated clearly wherever support is discussed.
3. Show where it really is: a new initiative that is just getting started, without pretending to scale it doesn't have.
4. Youth-led: young people shape what happens.
5. Two doors: every key page gives young people a way to join and organisations a way to help.

## Accessibility & Inclusion

- Mental-health-adjacent audience: calm, legible, no alarming patterns, reduced motion respected.
- Mobile-first reality: many visitors will be on phones, often on slower connections.
- Copy will be translated to Kinyarwanda later.
