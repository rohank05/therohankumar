---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: []
---

# Surface: home (app/page.tsx)

Mode: Experience. Audience: recruiters and hiring managers, often on phones, skimming. Job: remember Rohan, then email him or download the resume. Constraint: all content in lib/data.ts stays reachable without playing (via the directory and the semantic DOM). Real 3D (three.js via react-three-fiber), lazy-loaded; reduced motion means no walking and no camera flights.

## Direction contract

THESIS: A real 3D office floor where each department holds one part of the career. The character walks to a room and a riso-printed file opens. It refuses both the scrolling-sections portfolio and the pastel low-poly diorama.

OWN-WORLD: Printed in Riso inks. Medium Blue #3255A4 floods the void, each of the six rooms takes its own stock Riso ink (Yellow, Aqua, Orange, Green, Purple, deep Teal), so six departments read as six keys, on cool white stock, and Ink #1B1F3B carries linework. Shading is halftone dots, not gradients, and edges sit slightly out of register. Fluorescent pink is reserved for the character and the active room. Files are stapled zine sheets with grain and an overprinted stamp.

STORY: Arrive in Reception and see who Rohan is. Choose a department from the directory or click a room. Watch the walk along the printed route line, read the file, then reach Mailroom actions (email, resume) in one click from anywhere.

FIRST VIEWPORT: The blue flood fills the screen, with a huge overprinted ROHAN KUMAR at top-left over the floor. The six-room floor plate sits at three-quarter top-down, centre-right. A directory strip runs along the left edge (bottom on phones), with Email and Resume always pinned.

FORM: 3D office diorama in Riso print, #4 of seven. Seed c33a0d53. Signature interaction: select a room, the lit "you are here" key travels along the directory, the character walks the route, and the file slaps open over the scene.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
