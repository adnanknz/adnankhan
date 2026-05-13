## Bold editorial rebuild of adnan.co.nz

Replace the current multi-page site with a single-page editorial scroll experience using a Bone & Oxblood palette, Fraunces/Inter/JetBrains Mono typography, and a print-magazine grid. Keep Web3Forms contact integration and existing repo/deploy setup.

### Scope

**Design system overhaul**
- `tailwind.config.ts`: add `paper`, `surface`, `ink`, `oxblood`, `sienna`, `hairline`, `bone` colours; add `serif` (Fraunces), `sans` (Inter), `mono` (JetBrains Mono) families; keep existing tokens for shadcn.
- `src/index.css`: set `paper` as default body background, `ink` text, add SVG grain overlay (200x200 tile via CSS background), `::first-letter` drop-cap utility, marquee `@keyframes`, focus outline, reduced-motion guards.
- `index.html`: preconnect + Google Fonts link for Fraunces / Inter / JetBrains Mono; preload Fraunces variable woff2; update `<title>` and meta description; Person JSON-LD with awards, alumniOf, worksFor, sameAs.

**Restyle shadcn primitives**
- `Button`: 2px radius, oxblood primary, ghost variant with hairline border + oxblood hover, trailing-arrow translate utility.
- `Accordion`: strip chrome, mono `+/x` indicator, hairline dividers.
- `Input` / `Textarea`: hairline bottom border, focus thickens to 2px oxblood; floating mono caption pattern.
- `Card`: no shadow, hairline border, hover lift + oxblood underline.

**Single-page route + nav**
- Convert `/` to a long-form scroll page composed of section components. Hidden `/notes` route as a lazy-loaded placeholder. Remove old multi-page routes from `App.tsx` (About, LegalAI, MarTech, Work, Insights, Speaking, Contact) since their content moves into the scroll. Anchor links replace nav links.
- New `Navbar`: AK monogram (Fraunces 900 oxblood + sienna underline) left, anchor links right, shrink-on-scroll, mobile full-screen oxblood overlay.

**Sections (one component each, in `src/components/sections/`)**
1. `Hero` — full viewport, mono coordinate caption, "Adnan Khan" Display 1 with Splitting per-word reveal, positioning line with `<mark>grow</mark>` underline draw-in, bio, two CTAs, vertical "SCROLL ↓".
2. `Marquee` — pure CSS infinite translateX, oxblood text, hairline borders, pause on hover, reduced-motion off.
3. `ClientWall` — TRUSTED BY eyebrow, 5-col wordmark grid with hairline cells + scroll-stagger fade, secondary heritage line.
4. `AwardsStrip` — full-bleed oxblood background, four count-up numerals (3x, 2x, 1x, 1 of 5) with mono captions, hairline verticals.
5. `SelectedWork` — three pinned case study cards (Turners, AA Smartfuel, Comvita) with headline left / outcomes right / hairline divider / image below.
6. `About` — essay (drop cap on first paragraph) + sticky timeline sidebar (2003→present roles).
7. `Services` — numbered Accordion 01–05 in priority order.
8. `StitchBlocks` — two side-by-side blocks for Stitch and Stitch Predict with CTA links.
9. `Thinking` — year-bucketed list (mono date / Fraunces title / Inter source) with bone hover row.
10. `Press` — "AS SEEN IN" row with mono asterisks separating outlets.
11. `Testimonials` — two pull quotes, oxblood left border.
12. `Contact` — left prompt + contact details, right Web3Forms form with floating mono captions; success swap.
13. `SiteFooter` — three mono columns (sitemap / social / colophon) above giant `ADNAN KHAN` Fraunces 900 oxblood wordmark anchored bottom, descenders cropped.

**Motion**
- Install `gsap @gsap/react lenis splitting` and wire `ReactLenis` at `App` root with `gsap.ticker` sync. Wrap every timeline in `gsap.matchMedia()` reduced-motion guard.
- Hero word reveal, "grow" underline draw, count-ups, case-study pins (`scrub: 0.5`), client wall stagger, footer wordmark slide-up, magnetic buttons (≤6px on hover within 80px).

**Accessibility & SEO**
- Single H1 in hero, sequential H2s. Skip-to-content link. 2px oxblood focus ring with offset. `aria-label` on form inputs matching floating captions. Keep existing `SEO` component but update default title/description; emit Person JSON-LD inline in `index.html`.
- Contact form keeps Zod validation, honeypot, throttle, Web3Forms key `1b6b76cb-2e33-43e6-9c08-77f081fdf043`.

**Cleanup**
- Delete old page files (`About.tsx`, `LegalAI.tsx`, `MarTech.tsx`, `Work.tsx`, `Insights.tsx`, `Speaking.tsx`, `Contact.tsx`) — content folded into the scroll. Keep `NotFound.tsx` and add `Notes.tsx` placeholder.
- Update `public/sitemap.xml` to just `/` and `/notes`. Update `Footer` (replaced by `SiteFooter`).
- Drop `react-helmet-async` usage from removed pages; keep `SEO` component for `Index` and `Notes`.

### Out of scope
- Blog CMS / live thinking feed (static seed list only).
- Auto-generated OG image at build time (use a static placeholder if any).
- Dark mode, auth, payments.

### Risks
- Cloudflare image optimisation isn't available in the Lovable preview — `loading="lazy"` only.
- Splitting.js + GSAP bundle adds ~80KB; acceptable for the design goal.

I'll proceed end-to-end without further questions unless something blocks.
