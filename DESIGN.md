---
name: SafeSpace Rwanda
description: A calm, friendly youth-wellbeing community site. A place to belong. A space to be yourself.
colors:
  ink: "#1b2140"
  ink-soft: "#4e5573"
  ink-mist: "#c9cee6"
  line: "#e3e6f0"
  paper: "#ffffff"
  mist: "#f6f7fb"
  blue: "#3347e6"
  blue-deep: "#2a3bc7"
  sun: "#ffc845"
  sun-deep: "#ffbd1f"
  coral: "#ff7a66"
  sky: "#eaf0ff"
  sunsoft: "#fff3d3"
  blush: "#ffe6e1"
  mint: "#dff3e8"
  error: "#a62a17"
  error-border: "#c2341f"
typography:
  display:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.9rem, 7vw, 5rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline-page:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 6vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 2.6rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  title-sm:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 800
    lineHeight: 1.375
    letterSpacing: "-0.025em"
  body-lead:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 700
    lineHeight: 1.5
rounded:
  md: "12px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  gutter: "20px"
  gutter-wide: "32px"
  card: "28px"
  card-lg: "32px"
  section: "80px"
  section-lg: "112px"
  container: "1152px"
  container-narrow: "768px"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "0 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.blue-deep}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "0 24px"
    height: "48px"
  button-sun:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "0 24px"
    height: "48px"
  button-sun-hover:
    backgroundColor: "{colors.sun-deep}"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "0 24px"
    height: "48px"
  button-light-hover:
    backgroundColor: "{colors.sky}"
  input-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "14px 16px"
  input-email-pill:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "0 20px"
    height: "48px"
  nav-link:
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.full}"
    padding: "8px 14px"
  nav-link-active:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.blue}"
  card-soft:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card}"
  door-panel:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.xl}"
    padding: "{spacing.card-lg}"
  disclaimer:
    backgroundColor: "{colors.sunsoft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card}"
---

# Design System: SafeSpace Rwanda

## Overview

**Creative North Star: "Two Forms, One Shared Space"**

A calm, friendly youth-wellbeing home, played straight at a high craft level. The page is white paper with large soft colour fields laid edge to edge (sky, sunsoft, blush, mint, mist), and deep indigo ink for every word. One bright friendly blue carries action; sunshine yellow carries the signature shape. In place of illustration the world uses only two geometric forms, a circle and a capsule, that overlap or sit beside each other. Where they overlap at hero scale, the shared space is filled ink: two people, one shared space.

Density is generous and quiet. Sections breathe on 80 to 112px of vertical rhythm, headings are heavy and tightly tracked, body copy is soft ink at relaxed leading. Nothing floats, glows or reveals on scroll. The hero settles in once on load, controls answer a press, and the hero mark breathes slowly. Everything else stays still.

The world refuses the pastel-blob template: blurred orbs, eyebrow pills above headings, floating badges, marquees and per-section scroll reveals. It is never themed on sport; sport is content, not the look.

**Key Characteristics:**
- White ground, full-bleed soft colour fields per section, deep indigo ink.
- Figtree throughout; extra-bold (800) headings with negative tracking.
- Circle and capsule shapes as the only illustration, in flat brand colours.
- Pill buttons and pill nav, 16px soft cards, 24px feature panels and image frames.
- Flat surfaces; depth comes from colour fields, not shadows.
- One entrance, press feedback, colour-only hovers, one slow breathing mark.

## Colors

A white-and-indigo base with one action blue, one sunshine accent, and four soft pastel fields that zone the page.

### Primary
- **Friendly Action Blue** (blue): every primary action, the active nav pill text, text links, focus rings, list markers, the input caret and checkbox accent. Pressed and hovered actions darken to **Deep Action Blue** (blue-deep).

### Secondary
- **Sunshine** (sun): the signature circle in the brand mark, the volunteer door panel, the date badge, the on-dark button and the on-dark focus ring, text selection, and the highlighted half of the footer tagline. Its hover is **Warm Sunshine** (sun-deep).

### Tertiary
- **Soft Coral** (coral): a shape colour only, used inside shape fields and as the Talk Freely pillar dot. Never text, never a button.

### Neutral
- **Deep Indigo Ink** (ink): all headings and primary text, the footer and partner panel ground, and the overlap fill of the hero mark.
- **Soft Ink** (ink-soft): body copy, intros, nav at rest, meta lines.
- **Mist Ink** (ink-mist): secondary text and placeholders on ink grounds, input hover border on paper, scrollbar thumb.
- **Hairline** (line): dividers, list rules, input borders at rest.
- **Paper** (paper): the page ground and the header.
- **Mist** (mist): quiet section bands, event cards, placeholder notes, the legal-page hero.

### Colour fields
- **Sky** (sky): homepage hero and the default inner-page hero, active nav pill, menu button.
- **Sunsoft** (sunsoft): the belief quote band and the "community, not a clinic" disclaimer.
- **Blush** (blush): the empty-events state and form error banners.
- **Mint** (mint): the sports band and success confirmations.

### Feedback
- **Alert Red** (error): error message text on paper. **Alert Border** (error-border) outlines an invalid field. On ink grounds, errors use Sunshine instead.

### Named Rules
**The One Blue Rule.** Blue is the only colour that means "do this". Sunshine buttons appear only on ink grounds; light buttons only on coloured fields.

**The Field, Not Fill Rule.** Pastels are used as whole section or card fields. They are never tints behind small chips or glows behind headings.

## Typography

**Display Font:** Figtree (with ui-sans-serif, system-ui, sans-serif)
**Body Font:** Figtree (same stack)

**Character:** One rounded geometric humanist family carries everything. Weight does the work: 800 for headings, 700 for buttons and labels, 600 for nav, 400 for reading.

### Hierarchy
- **Display** (800, 2.9rem rising to 4.5rem at 640px and 5rem at 1024px, line-height 1.02, -0.035em): the homepage hero headline only.
- **Page Headline** (800, 2.6rem rising to 3.75rem, 1.04, -0.03em): inner-page hero titles. The footer tagline uses the same voice at 2.4rem to 3.75rem.
- **Headline** (800, 2rem rising to 2.6rem, 1.1): every section heading, set with an optional soft-ink intro at body-lead size.
- **Title** (800, 1.5rem, plus 1.7rem on door panels): card, pillar and event titles. **Title Small** (800, 1.25rem) for resource cards and definition terms.
- **Body Lead** (400, 1.125rem, relaxed 1.625): intros and story paragraphs, measure capped at 56 to 62ch.
- **Body** (400, 1rem, 1.625): card copy and descriptions. Legal prose runs at 17px, 1.75.
- **Label** (700, 15px): buttons, form labels, nav (600), meta lines (700, 14px).

### Named Rules
**The No Eyebrow Rule.** Headings stand alone. No uppercase kicker, pill or small label sits above a heading; a soft intro paragraph below is the only companion.

**The Balanced Heading Rule.** All headings take -0.025em tracking or tighter and `text-wrap: balance`; paragraphs take `text-wrap: pretty`.

## Layout

A centred container of 1152px (narrow reading container 768px) with 20px side gutters, widening to 32px from 640px. Sections are full-bleed colour bands with 80px vertical padding, 112px from 640px. At 1024px content moves onto a 12-column grid: hero copy takes seven columns and the mark five; story and pillars split 7/5 or 5/7. Below 1024px everything stacks in source order. Card grids go one column, then two at 768px, then three at 1024px with 16 to 24px gaps. The header is a sticky 72px white bar; below 1024px its links move into a full-height sheet with large extra-bold links.

## Elevation & Depth

The system is flat. Depth comes from colour fields placed next to each other and from ink panels against paper, never from shadows on cards. The single shadow in the build is functional: once the page scrolls past 8px, the sticky header picks up a hairline and a soft low shadow so it separates from content.

### Shadow Vocabulary
- **Header lift** (`box-shadow: 0 1px 0 #e3e6f0, 0 6px 20px -12px rgba(27,33,64,.18)`): the scrolled sticky header only.

### Named Rules
**The Flat Field Rule.** Cards, panels and images sit flat. If something needs separating, give it a different field colour.

## Shapes

Everything is round-cornered and soft. Actions and nav are full pills (9999px). Inputs are 12px, except the email sign-up, which is a pill to match its button. Soft cards, notes, the disclaimer and resource thumbnails are 16px. Feature panels (door panels, the newsletter panel, the empty-events panel) and all photo frames are 24px. Borders are rare: 1.5px hairlines on inputs and the secondary button ring, and 1px rules between list rows.

The illustration language is just two forms: a **circle** and a **capsule** (a rectangle with fully rounded ends). At hero scale, on the 404 and in the logo they overlap as the brand mark: a sun circle, a blue capsule, and their intersection clipped and filled ink (white in the light logo). Everywhere else they appear in quiet arrangements inside a soft colour field, cropped by the frame edge, never overlapping.

**The Two Forms Rule.** Only circles and capsules, in flat brand colours. No blobs, blurs, gradients, outlines or other shapes.

**The Mark Is Reserved Rule.** The overlapping mark with its ink intersection belongs to the hero, the 404 and the logo. Placeholder fields use the non-overlapping arrangements.

## Components

### Buttons
Friendly, solid and confident: a full pill with bold text.
- **Shape:** full pill (9999px), 48px tall with 24px side padding; small size 44px with 20px padding at 15px.
- **Primary:** Action Blue with white bold 16px text; hover darkens to Deep Action Blue.
- **Secondary:** transparent with ink text and a 1.5px inset ring of ink at 20%; hover takes the ring to full ink.
- **Sun:** Sunshine with ink text, for ink grounds; hover to Warm Sunshine.
- **Light:** white with ink text, for coloured fields; hover to Sky.
- **Press:** every pressable control scales to 0.97 on press over 160ms with the out curve; colour changes ease over 200ms.
- **Arrow:** an optional 16px trailing arrow nudges 2px right on hover where hover exists.
- **Text link:** bold blue with a trailing arrow, darkening on hover.

### Cards / Containers
- **Soft card** (event cards, founder note): Mist field, 16px corners, 28px padding, no border, no shadow.
- **Door panels:** the three ways in (Join, Volunteer, Partner) as solid Blue, Sunshine and Ink panels with 24px corners and 28 to 32px padding. The whole panel is one link with "Get started" and an arrow at its foot; it presses to 0.99.
- **Resource card:** a 16:10 shape-field thumbnail with 16px corners, then a small title that turns blue on hover. No frame around the card.

### Inputs / Fields
- **Style:** white with a 1.5px Hairline border, 12px corners, 14px by 16px padding, 16px ink text (so phones don't zoom); hover moves the border to Mist Ink.
- **Focus:** the border turns Action Blue with a 4px soft blue ring at 15%.
- **Error:** Alert Border outline with an Alert Red message and icon below; form-level errors sit in a Blush banner.
- **Email sign-up:** the pill variant, paired with a pill submit. On ink it becomes translucent white with a Sunshine focus.
- **Consent:** a 20px checkbox with blue accent beside 14px soft-ink copy and a blue privacy link.
- **Success:** a Mint panel with a check icon and an extra-bold confirmation. A form never shows success unless it was stored.

### Navigation
- **Desktop:** 15px semibold soft-ink pill links that darken to ink on hover; the current page sits in a Sky pill with blue text. A small primary "Join Our Community" button closes the bar.
- **Mobile:** a 44px Sky round menu button whose two bars rotate into a cross. The sheet drops 8px and fades in over 220ms, listing 24px extra-bold links on hairline rules, with a full-width join button and the tagline at the foot.
- **Footer:** an Ink ground with the tagline at headline scale (second half in Sunshine), four column groups with bold white headings and Mist Ink links that brighten to white, and 44px round translucent social buttons that turn Sunshine on hover.

### Focus
Every focusable element gets a 3px Action Blue outline with 3px offset and 8px corners; on ink grounds the outline is Sunshine.

### Breathing Mark (signature)
The hero's overlapping circle and capsule, about 34rem wide, scale gently from 1 to 1.045 and back over a 12-second cycle (6s in, 6s out). It is decorative and stops under reduced motion. Once a real hero photo exists, a 4:5 photo with 24px corners takes the mark's place.

### Disclaimer
A Sunsoft note with 16px corners: "We're a community, not a clinic." in extra-bold ink, then the scope and emergency guidance in 15px soft ink. It appears wherever support is discussed.

## Do's and Don'ts

### Do:
- **Do** give each section its own full-bleed field (paper, sky, sunsoft, blush, mint, mist or ink) and keep 80px, then 112px, of vertical padding.
- **Do** use Action Blue (#3347e6) for the one primary action in any group; use the secondary ring button beside it.
- **Do** set headings in Figtree 800 with negative tracking and let a soft-ink intro follow them.
- **Do** fill any missing photo with a shape field (circle and capsule on a pastel field) carrying the photo's alt text.
- **Do** keep motion to the one hero settle (700ms, out curve), 0.97 press feedback, colour-only hovers and the breathing mark, all removed under reduced motion.
- **Do** keep text inputs at 16px and touch targets at 44px or larger.

### Don't:
- **Don't** add eyebrows, kickers or pill labels above headings.
- **Don't** use blurred orbs, gradient blobs, glows, floating badges or marquees.
- **Don't** add per-section scroll reveals or staggered entrances.
- **Don't** put shadows on cards or panels; the header lift is the only shadow.
- **Don't** theme anything on sport or basketball: no balls, courts or jerseys as decoration.
- **Don't** use Coral or the pastels for text or buttons.
