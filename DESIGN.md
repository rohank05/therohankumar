---
name: Rohan Kumar
description: A software engineer's career as a sticker-bombed laptop lid; every project, job and stat is a die-cut vinyl sticker.
colors:
  lid: "#2b34e0"
  lid-deep: "#1f27b8"
  tomato: "#ff5a36"
  yellow: "#ffe03d"
  mint: "#3ee08f"
  pink: "#ff8ad1"
  foil: "#6fd3ff"
  ink: "#14112b"
  ink-soft: "#3b3566"
  vinyl: "#fffdf6"
typography:
  display:
    fontFamily: "Bagel Fat One, 'Arial Rounded MT Bold', sans-serif"
    fontSize: "clamp(84px, 13.4vw, 204px)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Bagel Fat One, 'Arial Rounded MT Bold', sans-serif"
    fontSize: "clamp(46px, 6.6vw, 96px)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  title-script:
    fontFamily: "Shrikhand, Georgia, serif"
    fontSize: "clamp(42px, 4.6vw, 64px)"
    fontWeight: 400
    lineHeight: 1.05
  title:
    fontFamily: "Bagel Fat One, 'Arial Rounded MT Bold', sans-serif"
    fontSize: "clamp(34px, 3.6vw, 54px)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.01em"
  sticker-block:
    fontFamily: "Bungee, 'Arial Black', sans-serif"
    fontSize: "22px"
    fontWeight: 400
    lineHeight: 1.05
  label-tape:
    fontFamily: "Rubik Mono One, 'Arial Black', sans-serif"
    fontSize: "16px"
    fontWeight: 400
    letterSpacing: "0.14em"
  devanagari:
    fontFamily: "Modak, sans-serif"
    fontSize: "66px"
    fontWeight: 400
    lineHeight: 1.25
  body:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  button:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 900
  data:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 400
rounded:
  tape: "4px"
  tag: "12px"
  sticker: "16px"
  label: "20px"
  card: "28px"
  pill: "999px"
  circle: "50%"
spacing:
  gutter: "clamp(16px, 4vw, 48px)"
  section: "clamp(96px, 12vw, 160px)"
  section-head: "clamp(56px, 7vw, 88px)"
  grid-row: "44px"
  grid-col: "32px"
  cluster: "16px"
  edge: "5px"
components:
  button-primary:
    backgroundColor: "{colors.tomato}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 26px"
  button-secondary:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 26px"
  button-quiet:
    backgroundColor: "{colors.vinyl}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 26px"
  nav-sticker:
    backgroundColor: "{colors.vinyl}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "7px 16px"
  nav-sticker-resume:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "7px 16px"
  chip-data:
    backgroundColor: "{colors.vinyl}"
    textColor: "{colors.ink}"
    typography: "{typography.data}"
    rounded: "{rounded.pill}"
    padding: "4px 11px"
  project-sticker:
    backgroundColor: "{colors.lid}"
    textColor: "{colors.vinyl}"
    rounded: "{rounded.card}"
    padding: "34px 34px 28px"
  label-tape:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.vinyl}"
    typography: "{typography.label-tape}"
    rounded: "{rounded.tape}"
    padding: "9px 16px 8px"
  intro-label:
    backgroundColor: "{colors.vinyl}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.label}"
    padding: "20px 24px"
---

# Design System: Rohan Kumar

## Overview

**Creative North Star: "The Sticker-Bombed Laptop Lid"**

The whole site is the lid of an engineer's laptop, drenched in ultramarine and covered in die-cut vinyl. Every surface that carries content is a sticker: flat colour, a thick white die-cut edge, a slight tilt, and a crisp lift shadow that says it sits on top of something. Depth comes from overlap and lift, never from gradients or glass. The mood is loud, joyful and hands-on; density is generous, with stickers scattered on the lid and packed on sheets further down.

Each section is a different ground the stickers sit on: the lid (ultramarine), a kiss-cut sticker sheet on a yellow liner, a black ink panel of HELLO name tags, a mint toolkit of label-maker tape, and back to the lid to close. The type case is raided rather than paired: several fat display faces each claim their own sticker, held together by one sturdy grotesk for reading and one mono reserved for data.

The world rejects the dark, serif-plus-mono developer portfolio with a single accent and hairline rows. It does not borrow neobrutalist hard block shadows: its shadows are soft vinyl lift, offset plus blur.

**Key Characteristics:**
- Ultramarine lid ground; seven vinyl skins, each a colour with a fixed legible text partner.
- White die-cut edge on every sticker (5px default, 3px on small ones, 6-7px on large ones).
- Every sticker is tilted a few degrees and straightens when peeled.
- Soft two-layer lift shadow; a higher lift while hovered or dragged.
- Motion grammar of slap, drop, unroll and peel, all removed under reduced motion.
- Every sticker states one true fact.

## Colors

Saturated flat vinyl on an ultramarine lid, with near-black ink and warm white vinyl as the neutrals.

### Primary
- **Laptop-Lid Ultramarine** (lid): the ground of the hero and the closing section, the `theme-color`, the favicon plate, and a skin for project stickers, belt stickers and education stickers. Ink-blue company names on name tags use it as text.
- **Deep Lid** (lid-deep): only the underside colour revealed by the peel curl on the tomato mail sticker, where the curl sits on the lid.

### Secondary
- **Tomato** (tomato): the primary action skin (Email me, the mail sticker), plus project, belt and tape skins. Text on it is always ink.
- **Acid Yellow** (yellow): the secondary action skin (Resume), the RK logo, the starburst fill, the Work section's liner, the text selection colour and the focus halo.

### Tertiary
- **Mint** (mint): the Toolkit section ground and a sticker skin (NovoStack role, LinkedIn).
- **Bubblegum Pink** (pink): a sticker skin, the Devanagari name sticker, the Delhi city word on the clock, and the footer link underline.
- **Holo Foil** (foil): one stop in the single holographic sticker's conic sweep; not used flat anywhere else.

### Neutral
- **Ink** (ink): all text on light skins, the Experience ground, the ink skin, data chips on vinyl, the page's overscroll background and the focus outline.
- **Soft Ink** (ink-soft): body copy on vinyl and pink stickers (intro label, name-tag bullets), where full ink would be too heavy for running text.
- **Vinyl White** (vinyl): the die-cut edge of every sticker, text on lid and ink grounds, and the vinyl skin.

### Named Rules
**The Skin Pair Rule.** Every sticker takes a skin, and a skin is a fixed pair of fill and text: lid and ink carry vinyl text; tomato, yellow, mint, pink and vinyl carry ink text. Never set vinyl text on tomato, yellow, mint or pink.

**The Contrast Badge Rule.** A sticker stacked on another sticker takes a skin that contrasts with its host (on lid use yellow, on tomato vinyl, on yellow ink, on mint pink, on pink mint, on ink yellow, on vinyl tomato).

**The One Foil Rule.** The holographic conic sweep (pink, yellow, mint, foil, violet) appears on exactly one sticker per page. It is the only decorative gradient in the system.

## Typography

**Display Font:** Bagel Fat One (with Arial Rounded MT Bold)
**Script Font:** Shrikhand (with Georgia)
**Block Fonts:** Bungee (with Arial Black), Rubik Mono One (with Arial Black), Modak for Devanagari
**Body Font:** Schibsted Grotesk (with system-ui), weights 400, 500, 700, 900 and italic
**Data Font:** Martian Mono (with ui-monospace), weights 400 and 600

**Character:** A raided type case where each sticker picks its own face, anchored by a grotesk that does all the reading and a mono that only ever carries data.

### Hierarchy
- **Display** (Bagel Fat One 400, clamp(84px, 13.4vw, 204px), 0.9): the hero name only, set as die-cut word stickers.
- **Headline** (Bagel Fat One 400, clamp(46px, 6.6vw, 96px), 1.02, max 14ch, balanced): section titles, with one word lifted into an inline tag-word sticker. The closing title runs clamp(50px, 8vw, 118px).
- **Title, script** (Shrikhand 400, clamp(42px, 4.6vw, 64px), 1.05, tilted -2deg): company names on name tags, the Delhi clock city, starburst captions, sub-section titles (clamp(34px, 4vw, 52px)).
- **Title** (per-sticker face, clamp(34px, 3.6vw, 54px), 1): project titles; each project sticker names its own face (Bagel, Shrikhand, Bungee, Rubik Mono One or mono), with Rubik and mono scaled down to hold the same visual weight.
- **Sticker block** (Bungee 400, 22-30px): short shouty stickers such as the role and stack ribbon.
- **Label tape** (Rubik Mono One 400, 16px, 0.14em, uppercase): label-maker tape only; 12.5px at 0.1em for tape items.
- **Body** (Schibsted Grotesk 400, 17px desktop / 16px under 760px, 1.55, 44-60ch): intro, ledes, project descriptions, bullets. Emphasis is weight 900 in full ink; project subtitles are 700 italic.
- **Button** (Schibsted Grotesk 900, 19px): sticker buttons; nav stickers use 700 at 15px.
- **Data** (Martian Mono 400/600, 11.5-12px, tabular numbers on the clock): stack chips, dates, role and location chips, the timezone, the clock digits (600, 24px).

### Named Rules
**The Data-Only Mono Rule.** Martian Mono carries data (stack names, dates, times, versions, commands) and nothing else. Sentences and instructions are set in Schibsted Grotesk.

**The Own-Face Rule.** Display faces belong to stickers, not to roles: a sticker may pick any face from the case, but body copy never leaves Schibsted Grotesk.

## Layout

A centred wrap (max 1320px) with a fluid gutter (clamp(16px, 4vw, 48px)) sits on full-bleed section grounds. Sections breathe with clamp(96px, 12vw, 160px) vertical padding; the heading-to-content gap is clamp(56px, 7vw, 88px).

The hero is a free board, not a grid: the name and intro hold the left side (max 820px) while fact stickers are absolutely placed by percentage around them on screens 1000px and wider. Below 1000px the facts fall into a centred, wrapping cluster under the intro (gaps 22px by 18px).

The Work sheet uses a 12-column grid with mixed spans (7/5, 4/4/4, 8 plus an empty peeled-off slot), 44px row and 32px column gaps; it becomes two columns at 1100px and one at 760px, where the empty slot is hidden. Name tags sit in two columns with the second offset 64px down, collapsing to one at 760px. Toolkit groups run four columns, two at 1100px, one at 340px. Education is a wrapping flex row of differently sized stickers.

The nav is a fixed, pointer-transparent strip at the top; on phones it drops the Jobs and Toolkit stickers (under 760px) and, under 400px, keeps only Work and Resume.

## Elevation & Depth

Depth is physical: stickers overlap, carry a white die-cut edge, and sit on a soft two-layer shadow in ink (rgba of #14112b), a tight contact shadow plus a longer negative-spread drop. There are no hard offset block shadows anywhere. Lift is a state: hover, peel and drag raise a sticker to the high lift. Die-cut words and starbursts use equivalent drop-shadow filters because they are not boxes.

### Shadow Vocabulary
- **Vinyl lift** (`box-shadow: 0 1px 1px rgba(20,17,43,.28), 0 8px 16px -8px rgba(20,17,43,.55)`): every sticker at rest, the logo, tape, the round go button.
- **Vinyl lift, high** (`box-shadow: 0 2px 2px rgba(20,17,43,.2), 0 22px 34px -12px rgba(20,17,43,.6)`): hovered, peeled or grabbed stickers.
- **Chip lift** (`box-shadow: 0 1px 1px rgba(20,17,43,.25), 0 3px 6px -3px rgba(20,17,43,.4)`): small data chips sitting on a sticker.
- **Name-tag lift** (`box-shadow: 0 2px 2px rgba(0,0,0,.3), 0 26px 40px -18px rgba(0,0,0,.7)`): name tags on the ink ground, where ink shadows would vanish.
- **Die-cut drop** (`filter: drop-shadow(0 2px 1px rgba(20,17,43,.3)) drop-shadow(0 14px 18px rgba(20,17,43,.35))`): die-cut words and starbursts.

### Named Rules
**The Vinyl Lift Rule.** Shadows are contact plus blur, tinted ink, and always pair a tight near layer with a soft far one. A shadow with zero blur and a solid offset is not vinyl and does not belong here.

**The Lift Is State Rule.** Resting stickers use the base lift; only hover, peel and drag earn the high lift.

## Shapes

Sticker silhouettes are the form language: pills (999px) for buttons, nav, badges, ribbons and belt stickers; circles (50%) for the logo, holo and small pack stickers; tags (10-12px) for the clock, tapes and code stickers; softly rounded cards (16-28px) for content stickers; a lumpy blob (46% 54% 42% 58% / 55% 45% 55% 45%) for the Devanagari sticker; and a 14-point starburst drawn in SVG with a fat round-joined vinyl stroke. Label-maker tape is nearly square (4px, 3px for the hint tape).

Every sticker has a vinyl border as its die-cut edge, and every sticker is rotated a few degrees (typically -3deg to 7deg, up to ±14deg for slapped pack stickers). Die-cut words get their edge from a 28-offset text-shadow ring at 0.085em, not a stroke, so the outline stays round.

## Components

### Buttons
Tactile sticker buttons that peel on hover.
- **Shape:** pill (999px) with the 5px vinyl die-cut edge, tilted -2deg to 2deg.
- **Primary:** tomato skin, ink text, Schibsted Grotesk 900 at 19px, 14px by 26px padding, leading 24px line icon.
- **Secondary:** yellow skin (Resume); quiet variants use vinyl or mint skins (GitHub, LinkedIn).
- **Hover / Focus:** the sticker straightens to 0deg, scales to 1.03, rises 3px and takes the high lift, all on the slap curve over 0.35s; active presses to 0.97. Focus draws a 3px ink outline offset 3px with a 7px yellow halo.

### Chips
- **Style:** Martian Mono 11.5px on vinyl with ink text (inverted to ink on vinyl stickers), pill, 4px by 11px, chip lift. Name-tag data chips are ink with vinyl text; the first takes the tag's own colour.
- **State:** static; chips carry data only.

### Cards / Containers
- **Corner Style:** 28px for project and mail stickers, 26px name tags, 24px education, 20px intro label.
- **Background:** any skin; project stickers rotate through lid, tomato, mint, pink, ink and vinyl.
- **Shadow Strategy:** vinyl lift at rest, high lift on peel (see Elevation & Depth).
- **Border:** 6px vinyl die-cut edge on project stickers, 7px on the mail sticker and the degree; on the Work sheet a faint 2px ink kiss-cut line sits 12px outside each sticker.
- **Internal Padding:** 34px 34px 28px on projects; 30px 32px on name-tag bodies.
- **Badge:** each project carries a small pill badge stuck over its top-right corner (tilted 7deg) stating one fact, in the contrast skin for its host.

### Navigation
- **Style:** a fixed strip of small vinyl pill stickers (3px edge, 700 at 15px), alternately tilted -2deg and 1.5deg, with a yellow Resume sticker last. The RK logo is a yellow 60px disc with a 5px vinyl edge at -10deg that spins a full turn on hover.
- **Mobile:** 50px logo, 14px nav text; section links drop away at 760px and 400px.

### Name Tag
A HELLO-my-name-is tag: a vinyl card with a 6px border in the tag colour, a coloured header band with HELLO in uppercase Bagel and "I shipped code at" beneath, the company in tilted Shrikhand, data chips, bullets marked by small colour dots ringed in vinyl, and a colour foot band. Tags drop in from above on reveal.

### Label-Maker Tape
Toolkit group headings and items are embossed label tape: Rubik Mono One uppercase, tracked 0.14em (0.1em small), 4px corners, a 1px embossed text shadow, vinyl lift, slight tilt. Headings unroll left to right on reveal.

### Die-Cut Word
Giant words (the hero name, the closing title's last word, inline tag-words) are either text coloured by the skin with a vinyl text-shadow ring (hero, closing) or small stickers wrapped around a word inside a headline (tag-words).

### The Lid Toy
On fine pointers with hover at 1000px and wider, every hero sticker can be dragged and re-slapped (grab scales to 1.08 and straightens; release plays a 0.32s landing), and clicking empty lid slaps the next sticker from a fixed pack of 15. Up to 24 slapped stickers persist with their positions in localStorage under `rk-lid-v1`; a tape hint, a Slap one button and a Clean lid reset appear only while the toy is enabled. Touch and narrow screens get a static lid.

### Motion
- **Slap** (0.45-0.55s, cubic-bezier(0.2, 1.5, 0.35, 1)): from scale 1.35 and transparent, landing with a deliberate overshoot. Hero load (staggered by --d) and project/education reveals.
- **Drop** (0.7s, slap curve): from 60px above and -9deg. Name tags.
- **Unroll** (0.6s, cubic-bezier(0.16, 1, 0.3, 1)): clip-path wipe from the left. Label tape.
- **Peel** (0.35s): straighten, lift and a 46px corner curl split diagonally between the vinyl backing (#e7e3d6) and the ground beneath.
- **Belts** loop at 48s and 54s in opposite directions and pause on hover; the foil sweep turns every 9s.
- **Reduced motion** removes every animation and transition, shows all reveal content immediately, and turns the belts into static wrapped rows of six.

## Do's and Don'ts

### Do:
- **Do** give every content surface a skin, a vinyl die-cut edge and a few degrees of tilt (typically -3deg to 7deg).
- **Do** make every sticker state one true fact about Rohan's work (a number, a stack, a place, a date).
- **Do** pair fills with their fixed text colour: vinyl on lid and ink; ink on tomato, yellow, mint, pink and vinyl.
- **Do** use the two lift shadows (base at rest, high on hover, peel and drag) in ink with blur.
- **Do** keep Martian Mono for data: stack chips, dates, times, versions and commands.
- **Do** change the ground per section: lid, yellow kiss-cut liner, ink, mint, lid.
- **Do** run the slap curve cubic-bezier(0.2, 1.5, 0.35, 1) for landings and keep every motion removable under prefers-reduced-motion.
- **Do** focus with the 3px ink outline offset 3px plus the 7px yellow halo.

### Don't:
- **Don't** add eyebrows or kickers above headings; a section opens with its Bagel headline and one tag-word sticker.
- **Don't** use gradients except the single holographic foil sticker and the hard 50/50 split of the peel curl.
- **Don't** use hard offset block shadows or zero-blur shadows; lift is always contact plus blur.
- **Don't** set sentences or instructions in Martian Mono.
- **Don't** put vinyl text on tomato, yellow, mint or pink skins.
- **Don't** add a second holographic sticker.
- **Don't** return to a dark serif-plus-mono layout with one accent and hairline rows.
- **Don't** enable dragging on touch or on screens under 1000px.
