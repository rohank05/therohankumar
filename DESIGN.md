---
name: Rohan Kumar
description: A software engineer's career as a 3D office floor printed in Risograph inks; six departments, six stock inks, files that slap open as stapled sheets.
colors:
  blue: "#3255a4"
  pink: "#ff48b0"
  yellow: "#ffe800"
  aqua: "#5ec8e5"
  orange: "#ff6c2f"
  green: "#00a95c"
  purple: "#765ba7"
  teal: "#006d74"
  ink: "#1b1f3b"
  ink-soft: "#3f4466"
  paper: "#f3f4f1"
  paper-shade: "#e2e4de"
typography:
  display:
    fontFamily: "Dela Gothic One, 'Arial Black', sans-serif"
    fontSize: "clamp(54px, 6.4vw, 96px)"
    fontWeight: 400
    lineHeight: 0.86
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Dela Gothic One, 'Arial Black', sans-serif"
    fontSize: "clamp(30px, 3vw, 46px)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Dela Gothic One, 'Arial Black', sans-serif"
    fontSize: "22px"
    fontWeight: 400
    lineHeight: 1.15
  label-display:
    fontFamily: "Dela Gothic One, 'Arial Black', sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.15
  lede:
    fontFamily: "Familjen Grotesk, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Familjen Grotesk, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  button:
    fontFamily: "Familjen Grotesk, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 700
    lineHeight: 1
  data:
    fontFamily: "Fragment Mono, ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 400
    letterSpacing: "0"
    fontFeature: "'tnum'"
  devanagari:
    fontFamily: "Hind, sans-serif"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: 1.1
rounded:
  print: "3px"
  sheet: "4px"
  key: "6px"
  board: "10px"
  dot: "50%"
spacing:
  xs: "6px"
  sm: "10px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  gutter: "clamp(16px, 2.4vw, 32px)"
  rail: "clamp(300px, 26vw, 380px)"
  sheet: "min(640px, 46vw)"
components:
  key-btn:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.key}"
    padding: "11px 16px"
  key-btn-primary:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.key}"
    padding: "11px 16px"
  directory-board:
    backgroundColor: "{colors.ink}"
    rounded: "{rounded.board}"
    padding: "8px"
    width: "{spacing.rail}"
  directory-key:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.key}"
    height: "58px"
    padding: "0 12px 0 10px"
  directory-key-here:
    backgroundColor: "{colors.pink}"
    textColor: "{colors.ink}"
    rounded: "{rounded.key}"
    height: "58px"
  file-sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
    width: "{spacing.sheet}"
  file-close:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.key}"
    padding: "8px 12px"
  file-close-hover:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
  room-tag:
    textColor: "{colors.ink}"
    typography: "{typography.label-display}"
    rounded: "{rounded.print}"
    padding: "6px 10px"
  room-tag-lit:
    backgroundColor: "{colors.pink}"
    textColor: "{colors.ink}"
  chip:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.data}"
    rounded: "{rounded.print}"
    padding: "4px 9px"
  fact-card:
    backgroundColor: "{colors.paper-shade}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
    padding: "14px 16px"
  stamp:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label-display}"
    rounded: "{rounded.sheet}"
    padding: "6px 12px"
---

# Design System: Rohan Kumar

## Overview

**Creative North Star: "The Riso Office"**

The whole site is one printed object: a three-quarter top-down office floor, run through a Risograph. Medium blue ink floods every pixel of the void; the floor plate, walls and furniture are cool white stock keylined in dark drum ink; each of six departments is printed in its own stock Riso ink. Shading is never a gradient. Light falling off a surface becomes halftone dots of a second ink overprinted on the first, with paper speckle where the drum starved, and keylines sit slightly out of register. The DOM layer (masthead, directory, files) is printed from the same inks and the same stock, so the interface reads as paper laid on top of the print, not chrome around a canvas.

The density is low and the scale is loud: a huge two-ink name at top-left, a dark directory board of six keys, and a single sheet that slaps open over the floor when a room is chosen. Fluorescent pink is the only ink that moves: the character, the selected room's frame, the lit room tag and the travelling "you are here" key. Everything else holds still.

Motion is physical and short: sheets slap down with a slight rotation and overshoot, keys lift on hover and press on active, the lit key travels to the chosen department. Under reduced motion all of it stops.

**Key Characteristics:**
- Blue flood with drum grain as the only background; there is no white page.
- Six departments, six stock Riso inks; ink identity is the navigation.
- Halftone dots and misregistration in place of gradients and soft lighting.
- Fluorescent pink reserved for motion and selection.
- Files are stapled sheets of grained cool stock with an ink band, a rubber stamp and a tilt.

## Colors

A Risograph ink set: one flooding blue, one fluorescent signal, six department inks, a dark drum ink and cool white stock.

### Primary
- **Medium Blue** (blue): the flood. Page background, the rail's own flood when a file is open, the phone masthead strip, and the default overprint ink for halftone shading in the 3D scene. Also the browser theme colour.

### Secondary
- **Fluorescent Pink** (pink): the signal ink. Only the walking character, the selected room's overprinted frame, the lit room tag and the "you are here" directory key. Nothing static is pink.
- **Riso Yellow** (yellow): the name's top plate, the primary action (Email me), focus rings, text selection, the close button's hover, and Reception's ink. During a walk the "you are here" key alternates pink and yellow in two hard steps.

### Tertiary (department inks)
- **Riso Yellow** (yellow): Reception.
- **Aqua** (aqua): Product Floor; also the screened second plate under the name.
- **Riso Orange** (orange): HR Records.
- **Riso Green** (green): R&D Lab.
- **Riso Purple** (purple): Training Room.
- **Deep Teal** (teal): Mailroom; chosen dark enough to carry paper text.

A department's ink is passed to its sheet as one variable and drives the sheet's top band, its screened second plate, the stamp, the badges, the bullet dots, link underlines and the big mail block.

### Neutral
- **Drum Ink** (ink): keylines in the scene, all text on stock, the directory board, chips, the close button, the key lip under buttons.
- **Soft Ink** (ink-soft): secondary text on stock: ledes, meta lines, fact captions, italic subtitles, the footer.
- **Cool Stock** (paper): file sheets, key buttons, the floor plate and walls, and text on the blue flood and on dark inks.
- **Stock Shade** (paper-shade): fact cards and stack racks inside a sheet; the sheet's 2px bottom edge.

### Named Rules
**The Pink Moves Rule.** Fluorescent pink marks only what moves or is selected. If it is not the character, the active room, or the travelling key, it is not pink.

**The One Ink Per Department Rule.** Each department owns exactly one stock ink, and that ink appears on its room floor, its directory dot, its floor tag and every accent on its sheet. Never borrow another department's ink for a sheet's accents.

**The On-Ink Rule.** Text on an ink is chosen by the ink, not by taste: blue, purple, teal and drum ink carry Cool Stock text; yellow, aqua, orange, green and pink carry Drum Ink text. Apply the same pairing everywhere an ink becomes a surface.

## Typography

**Display Font:** Dela Gothic One (with Arial Black)
**Body Font:** Familjen Grotesk (with system-ui)
**Label/Mono Font:** Fragment Mono (with ui-monospace)
**Script support:** Hind 700 for Devanagari

**Character:** A fat gothic that prints like a poster headline against a quiet, slightly quirky grotesk for reading, with a mono for every number, date and stack name.

### Hierarchy
- **Display** (400, clamp(54px, 6.4vw, 96px), 0.86, uppercase, -0.02em): the name only, set in two lines with the second indented 0.32em, printed in yellow over a dot-screened aqua plate offset by about 0.05em. Drops to clamp(34px, 10vw, 56px) on tall screens.
- **Headline** (400, clamp(30px, 3vw, 46px), 1.02, max 16ch, balanced): sheet titles, written as a sentence in the first person, with a department-ink text shadow offset 0.05em as a misregistered second plate.
- **Title** (400, 20-22px, 1.15): entry and rack headings inside sheets.
- **Display label** (400, 13-15px, 1.15): directory key names, room tag names, the department stamp and status stamp (stamps uppercase with 0.03-0.04em tracking).
- **Lede** (400, 18px, 1.55, Soft Ink with Drum Ink for bold): the opening paragraph of a sheet.
- **Body** (400, 16px, 1.5, max 62ch): sheet prose and bullet lists.
- **Button** (700, 15px, 1): key buttons and entry links; 600 for the close button and the role line.
- **Data** (Fragment Mono 400, 10.5-13px, tabular figures, no tracking): dates, counts, the room tag datum, stack chips (12.5px), the role line's stack list. Fact figures go up to 24px.

### Named Rules
**The Mono Is Data Rule.** Every number, date, timezone and technology name is set in Fragment Mono with tabular figures. Prose never is.

**The Gothic Prints Rule.** Dela Gothic One is used at weight 400 only and only for things that are printed: the name, sheet titles, headings, stamps, tags and key names. Never for paragraphs or buttons.

## Layout

The 3D floor fills the viewport as a fixed stage; nothing scrolls except the open sheet's body. On wide screens (860px and up, aspect wider than 20:23) a left rail of `rail` width sits inside a `gutter` margin: masthead pinned top-left, directory pinned bottom-left, and the floor sits centre-right. An open sheet is pinned top-right at `sheet` width, full height minus gutters, and the rail gets its own blue flood so the floor reads as cropped at its edge like a trimmed print; only the lit room keeps its floor tag.

On tall screens (below 860px or taller than 20:23) the masthead becomes a two-column header (name and role left, Email and Resume stacked right), the directory becomes a horizontally scrolling, snap-aligned strip of 148px keys along the bottom edge, and sheets rise from the bottom as a bottom sheet of at least 52dvh with 8px side insets. Fact and rack grids collapse from two columns to one. On short wide screens (under 640px tall) keys shrink to 46px and drop their second line.

Spacing inside sheets runs on 6 / 10 / 16 / 24 / 40px; sheet padding is clamp(24px, 3vw, 40-44px) with 40px at the bottom. Entries are separated by 22px of padding and a 2px dashed Drum Ink rule at 35% opacity.

## Elevation & Depth

Depth comes from the print, not from light. The 3D scene uses real cast shadows, but they render as halftone dots of the overprint ink rather than grey; DOM objects get one hard lip in Drum Ink (the edge of a key or the thickness of stock) plus a single long, tight, dark drop that reads as the object lifting off the flood. No glows, no blur halos, no soft card shadows.

### Shadow Vocabulary
- **Key lip** (`box-shadow: 0 2px 0 var(--ink), 0 12px 20px -14px rgb(27 31 59 / 0.9)`): key buttons at rest; grows to a 4px lip on hover and a 1px lip on press.
- **Sheet stack** (`box-shadow: 0 2px 0 var(--paper-shade), 0 3px 0 rgb(27 31 59 / 0.25), 0 40px 60px -30px rgb(10 12 30 / 0.85)`): an open file; the stock edge plus a deep drop over the floor.
- **Board** (`box-shadow: 0 2px 0 rgb(0 0 0 / 0.25), 0 26px 40px -22px rgb(10 12 30 / 0.9)`): the directory board.
- **Tag** (`box-shadow: 0 1px 0 var(--ink), 0 10px 18px -10px rgb(27 31 59 / 0.7)`): room tags hanging over the floor.
- **Misregistration** (`box-shadow: 1.5px 1.5px 0 var(--paper)` on dark, `var(--ink)` on light): ink dots (directory numbers, bullet dots) printed slightly off their keyline. This is a plate offset, not a drop shadow.

### Named Rules
**The Halftone, Not Gradient Rule.** Shading is dots of a second ink or nothing. Do not shade with gradients, blur or opacity ramps.

**The Out Of Register Rule.** A second plate sits slightly off the first: the name's aqua screen, the sheet title's ink shadow, the dots' keyline, the 3D keylines nudged about 0.07 units. Keep offsets small (0.05em or 1.5px); misregistration is a texture, not a shadow style.

## Shapes

Corners are barely softened, like trimmed stock: 3px for printed strips (tags, badges, chips), 4px for sheets, fact cards, stamps and focus rings, 6px for keys and buttons, 10px for the directory board, and full circles only for ink dots. Things that are pasted or stamped are tilted: sheets land at -0.6deg, room tags at -2deg, badges at -1.5deg, stamps at -3 to -4deg; tilt straightens on hover for tags. A grey wire staple caps every sheet at top-left. Halftone dot screens (5px cells) appear as masks on second plates, and both the flood and the stock carry a fractal-noise grain.

## Components

### Buttons
Cut from the same stock as the directory keys: solid, tactile, pressed rather than glowing.
- **Shape:** gently squared (6px), 11px 16px padding, icon then label with an 8px gap.
- **Primary (Email me):** Riso Yellow with Drum Ink text. **Secondary (Resume, GitHub, LinkedIn):** Cool Stock with Drum Ink text.
- **Hover / Active:** lifts 2px with a 4px Drum Ink lip; presses down 1px to a 1px lip; 0.3s on the slap curve.
- **On a sheet:** buttons gain a 2px inset Drum Ink keyline so they hold against stock.
- **Close:** Drum Ink with stock text, 8px 12px, 600 weight; flips to yellow with ink text on hover.

### Chips
- **Style:** Drum Ink fill, stock text, Fragment Mono 12.5px, 3px corners, 4px 9px; used for stack lists only.
- **Badges:** the department's ink with its on-ink text, 700 weight 13px, tilted -1.5deg; used for a project's headline fact or a job's role.

### Cards / Containers
- **File sheet:** grained Cool Stock, 4px corners (6px top-only as a phone bottom sheet), sheet-stack shadow, staple, and a header band: a 12px strip of the department ink with a 7px dot-screened plate slipping off it, the department stamp at left and the close button at right. Slaps in over 0.55s (from 40px low, 4deg, 1.04 scale); on phones it rises from 60% below.
- **Fact cards and racks:** Stock Shade fill, 4px corners, 14-16px padding, in two-column grids; the figure in display or mono at 24px, the caption in Soft Ink 14px.
- **Mail block:** the department ink as a full block with its on-ink text, display face clamp(18px, 2vw, 26px), 20px 22px padding; tilts -1deg and lifts on hover.

### Navigation
The building directory is the site's navigation and the signature component.
- **Board:** a Drum Ink board (10px corners, 8px padding) holding six keys in route order, with a plain-language hint above it on a blue patch.
- **Keys:** 58px tall; a 30px department-ink dot with the number knocked out in mono, the department name in the display face at 15px, and what the file holds at 13px, 78% opacity. Hover tints the key with stock at 9%.
- **You are here:** a pink key-sized light behind the keys that travels to the chosen department (0.6s, out curve) and flips the key's text to Drum Ink; while the character walks it alternates pink and yellow in two hard steps.
- **Mobile:** the board becomes a horizontal snap-scrolling strip of 148px keys pinned to the bottom edge, respecting the safe area; the keyboard hint is dropped.

### Room Tags
Label-maker strips hung on each room in the 3D floor: the room's ink with its on-ink text, display name at 13px over a mono datum at 10.5px, 3px corners, tilted -2deg and raised. Hover straightens and lifts the tag; the room being walked to turns its tag pink.

### Stamps
Rubber stamps overprinted on stock with multiply blending: a 3px border, uppercase display face at 15px, tilted -3 to -4deg. The department stamp on a sheet's band uses the department ink mixed 55% toward Drum Ink with a double inset rule; the status stamp ("Available for opportunities") is plain Drum Ink.

## Do's and Don'ts

### Do:
- **Do** flood every background with Medium Blue plus drum grain; the floor and the sheets are the only light surfaces.
- **Do** route a department's ink through one variable and its text colour through the On-Ink pairing (blue, purple, teal, ink take stock text; the rest take Drum Ink).
- **Do** shade with halftone dots of a second ink and keep second plates out of register by 0.05em or 1.5px.
- **Do** set numbers, dates and stack names in Fragment Mono with tabular figures.
- **Do** keep Email and Resume pinned and reachable in one click from every state.
- **Do** use the yellow 3px focus ring with a 3px offset on everything focusable, and stop all animation and transition under reduced motion.

### Don't:
- **Don't** use fluorescent pink for anything that is not moving or selected.
- **Don't** shade with gradients, blur glows or soft ambient card shadows.
- **Don't** give a department a second ink, or reuse one department's ink as another's accent.
- **Don't** set paragraphs or buttons in Dela Gothic One, or use it at any weight but 400.
- **Don't** introduce a white or off-white page background; stock is an object laid on the flood, never the page.
