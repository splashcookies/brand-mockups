# Splash landing page mockups

Mockups for the splashbaking.com landing page after the October 2026 rebrand
(Figtree; Baking Sheet / Wonder Woman / Party Pink / mint / Chocolate Chip / Butter / Splash Blue;
hand-drawn logo marks and illustrations from `Splash_BrandGuide.pdf`).

**Live:** https://splashcookies.github.io/brand-mockups/

Every page uses the same copy and photos. Nothing is wired up — the forms just confirm.
Open any page and use the bar at the bottom, or the number keys `1`–`0`, to move between them.
`index.html` lists all ten.

## Round 4 (current) — the bolder set

Each of these is built around one real idea rather than a layout treatment.

1. **The bake** – `h.html` – Scroll position is oven time. A pinned stage takes the cookie from raw
   dough through the oven to done as you move down the page, the cavity glowing up around it, with
   the clock and the temperature counting alongside. Figtree only: the wildest page keeps the
   guide's single typeface, so the risk sits entirely in the mechanic.
2. **Michele's notebook** – `i.html` – The whole site as her test-kitchen book: ruled paper, taped
   photos, marker arrows, sticky notes. The signature is the batch log — forty-seven attempts,
   forty-six crossed out, the last one circled. Adds Caveat.
3. **Tear it open** – `j.html` – The hero is a sealed pouch you pull apart; the contents spill out
   and name themselves. Built on a range input, so it drags, takes arrow keys and announces itself
   rather than being a mouse-only stunt, and there is a "just open it" button for anyone who would
   rather not drag anything.

## Round 3 — the safe set

Four directions grounded in the brand guide, useful as a baseline to react against.

4. **Lab notebook** – `d.html` – Michele is a chemical engineer, so the kit gets a spec sheet:
   typed-report monospace, an exploded parts diagram, a procedure, and one deadpan chart about how
   much a cup of flour actually weighs. Adds IBM Plex Mono.
5. **Recipe card** – `e.html` – The page is the recipe. A ruled recipe card carries the middle of
   it, and the from-scratch ingredient list is struck through line by line until only "1 Splash
   kit" is left standing. Adds Fraunces and Caveat.
6. **Kitchen party** – `f.html` – Baking as the activity, loud. The guide draws its own colour
   swatches as irregular blobs, so blobs become the shape language: blob photos, blob cards,
   rotated sticker badges, a mess-o-meter. Adds Fredoka.
7. **Shelf ready** – `g.html` – As if it were already on the shelf at Target. Hard colour blocks,
   an expanded grotesque shouting one claim at a time, shelf-talker tags over the pack shot, and a
   Cookie Facts panel. Adds Archivo.

## Round 2

8. **Cream & line** – `a.html` – Graza + Fishwife. Bake video hero, line illustrations with
   typewriter captions, giant mark at the foot.
9. **Bakery counter** – `b.html` – Levain + Deux. Shoppable and photo-led: icon ticker, tilted
   photos on pink and blue panels, kit vs box mix table, big quote.
0. **The drop** – `c.html` – Last Crumb + Fly By Jing. Chocolate ground, countdown to the drop,
   poster-size manifesto, one loud peach family section.

## Round 1

Kept at `v1/` for reference: three recolours of the current page (Butter / Party / Chocolate Chip).

## Open questions for the rebrand

- **Typeface.** The guide says Figtree Regular and Figtree Light, full stop. Rounds 2–4 between
  them add Courier Prime, Instrument Serif, Patrick Hand SC, IBM Plex Mono, Fraunces, Caveat,
  Fredoka and Archivo. Each is flagged above; none is settled. `h.html` and `j.html` are the two
  that stay Figtree-only, and are worth comparing against the rest on that basis alone.
- **Tone.** The brand guide is playful — puffy hand-drawn marker lettering, loose ink sketches,
  colours drawn as wobbly blobs. "Cream & line" is elegant and restrained, which is a nice page but
  reads like a different company. Rounds 3 and 4 spread out deliberately across that range.
- **Accessibility.** Rounds 2–4 were not run through the project's WCAG gate, by request. They are
  built with real controls, labels, focus styles and reduced-motion handling, and checked for no
  sideways scroll at 320px, but contrast has not been audited and nothing here has been through
  `npm run a11y`. Whichever direction wins needs that pass before any of it reaches the site.

## Files

`h/i/j.html` (round 4), `d/e/f/g.html` (round 3), `a/b/c.html` (round 2), `v1/` (round 1),
`index.html` (contents), `shared.css` (brand tokens, logo and illustration masks, the switcher),
`switch.js` (switcher and keyboard shortcuts), `assets/`.

Logo marks and illustrations are black alpha-mask PNGs in `assets/`, recoloured per page with CSS
masks — set `color` on `.logo`/`.ill` and the artwork follows. Product names other than The
Everything, drop numbers, dates and kit counts are placeholders.
