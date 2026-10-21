# Splash landing page mockups

Mockups for the splashbaking.com landing page after the October 2026 rebrand
(Figtree; Baking Sheet / Wonder Woman / Party Pink / mint / Chocolate Chip / Butter / Splash Blue;
hand-drawn logo marks and illustrations from `Splash_BrandGuide.pdf`).

**Live:** https://splashcookies.github.io/brand-mockups/

## Round 2 (current)

Three directions built from the inspiration board (Graza, Fishwife, Levain, Deux, Last Crumb, Fly By Jing).
Each is its own page; the bar at the bottom (or keys 1, 2, 3) switches between them.

1. **Cream & line** – `a.html` – Graza + Fishwife. Bake video hero, cream pages carried by the kit
   illustrations with typewriter captions, one peach product panel, kit-vs-box-mix table, giant textured
   mark at the foot. Adds Courier Prime for captions.
2. **Bakery counter** – `b.html` – Levain + Deux. Shoppable and photo-led: two-panel pink/blue hero,
   illustrated icon ticker, kit cards, cutout headline, tilted photos on pastel panels, "us vs them" table,
   big quote with cookies peeking in.
3. **The drop** – `c.html` – Last Crumb + Fly By Jing. Chocolate ground, live countdown to the drop,
   featured-collection cards, poster-size manifesto, "the mixing / the scooping / the enlightenment",
   one loud peach "Hey, it's Michele" band with sticker badges. Adds Instrument Serif for the italics.

Font additions (Courier Prime, Instrument Serif, Patrick Hand SC) are departures from the guide's
Figtree-only rule, flagged for discussion.

## Round 1

Kept at `v1/` for reference: three recolours of the current page (Butter / Party / Chocolate Chip).

Notes
- Same copy and photos as the live site. Nothing is wired up (forms just confirm). Product names other
  than The Everything, drop numbers, dates and kit counts are placeholders.
- Logo marks and illustrations are black alpha-mask PNGs in `assets/`, recoloured per page with CSS masks.
- Round 2 was not run through the accessibility gate by request; round 1 was.

Files: `a.html`, `b.html`, `c.html`, `shared.css` (brand tokens, masks, switcher), `switch.js`, `assets/`, `v1/`.
