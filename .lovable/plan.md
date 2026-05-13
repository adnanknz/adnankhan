## Adnan Khan site — multi-route rebuild on Vite SPA

### Reality check on "server-rendered"

The brief asks for SSR/SSG so AI crawlers see real HTML. Lovable's stack is **Vite + React + react-router-dom (client-rendered SPA)** — true SSR is not supported here. The closest viable approach within this stack is:

- **Per-route `<head>` via `react-helmet-async`** so every route has unique title/description/canonical/OG/Twitter/JSON-LD.
- **Static prerendering at deploy time via `vite-plugin-prerender-spa`** (or `react-snap`) so each route in `dist/` ships a real HTML file with the rendered DOM. Cloudflare Pages serves the prerendered HTML to crawlers; React then hydrates for users. This solves the "JS-only body" problem for GPTBot/ClaudeBot/Googlebot.
- **`public/_headers`, `public/robots.txt`, `public/llms.txt`, `public/sitemap.xml`** are picked up by Cloudflare Pages directly.

If you'd rather migrate the repo to Next.js or Astro for true SSR, that's a separate (larger) move outside Lovable's preview — say the word and I'll scope it.

### Routes (react-router-dom)

```
/                  Index (14-section one-pager, anchor nav)
/about             About
/services          Services + FAQ
/work              Work index
/work/turners      Case detail
/work/aa-smartfuel Case detail
/work/mr-apple     Case detail
/thinking          Thinking index (static seed list)
/thinking/:slug    Article (static MDX-style data file, 3 seed posts)
/contact           Contact (Web3Forms)
/notes             keep existing placeholder
*                  404 in Bone & Oxblood
```

### Files to add

- `src/layouts/SiteLayout.tsx` — shared Navbar + footer wrapper, skip link, sitewide JSON-LD `@graph`.
- `src/components/Navbar.tsx` — rebuild as multi-route nav (Home/About/Work/Services/Thinking/Contact), AK monogram, sticky shrink-on-scroll, mobile oxblood overlay.
- `src/components/SiteFooter.tsx` — three-column footer + final sienna marquee + giant ADNAN KHAN wordmark (reuse existing).
- `src/components/SEO.tsx` — wraps `react-helmet-async` `<Helmet>`; props for title, description, canonical, ogImage, jsonLd[].
- `src/components/Breadcrumbs.tsx` — emits BreadcrumbList JSON-LD + visible crumbs on subpages.
- `src/data/` — typed content modules: `caseStudies.ts`, `services.ts`, `faqs.ts` (12 Q&A from Part G), `thinking.ts`, `clients.ts`, `awards.ts`, `timeline.ts`, `speaking.ts`, `press.ts`, `certifications.ts`.
- `src/pages/About.tsx`, `Services.tsx`, `Work.tsx`, `WorkDetail.tsx`, `Thinking.tsx`, `ThinkingPost.tsx`, `Contact.tsx`.
- `src/components/sections/*` — keep existing section files; refactor to consume `src/data/*` (single source of truth, also used by FAQPage JSON-LD).
- `public/robots.txt` — full allow-list from Part I (GPTBot, ClaudeBot, etc.).
- `public/llms.txt` — Part I content.
- `public/_headers` — Cloudflare security headers from Part L.
- `scripts/generate-sitemap.ts` — wired to `predev`/`prebuild`, enumerates static routes + `thinking.ts` slugs.

### Files to edit

- `src/App.tsx` — add the new routes, wrap in `HelmetProvider` + `SiteLayout`.
- `src/main.tsx` — re-add `HelmetProvider` (was removed in earlier pass).
- `src/pages/Index.tsx` — keep 14-section scroll, but apply Part C content corrections (drop Comvita case study, fix AA Smartfuel copy, rephrase Effie credit, restructure client wall into Stitch-era + krunch.co row, add Certifications/Governance/Firsts section, add FAQ accordion).
- `index.html` — keep sitewide head + Person/Organization/ProfessionalService/WebSite `@graph` JSON-LD from Part J. Remove anything that should now be per-route.
- `package.json` — add `react-helmet-async`, `vite-plugin-prerender-spa` (or `vite-plugin-ssr`-lite alternative), update predev/prebuild.
- `vite.config.ts` — register prerender plugin with the route list.
- `tailwind.config.ts` / `src/index.css` — add `paper-2` (#E8E2D5) and `rule` (#1A1A1A1A) tokens; keep existing palette.

### Content corrections (vs current Index)

- Remove Comvita from SelectedWork; keep it only in the "krunch.co past work" row in ClientWall.
- AA Smartfuel: rewrite to "sold out within weeks", keep 8x ROAS, drop "8,000 tickets in 8 days".
- Effie language: "part of the Turners team that won 2x Gold Effies 2022".
- Replace Comvita slot in SelectedWork with Mr Apple / Tealium.
- ClientWall: split into Stitch-era 5-col grid + dimmer "Past global work (pre-Stitch, via krunch.co)" secondary row. Move Canon/Toyota/Honda into the secondary row.
- Add new section 12 (Certifications / Governance / Firsts) before Testimonials.
- Add FAQ accordion to home (12 Qs) + emit FAQPage JSON-LD.

### Motion / a11y / perf

- Keep Lenis + GSAP setup, but gate Lenis on `window.innerWidth >= 768` and reduced-motion (per Part K snippet) inside `App.tsx`.
- 2px sienna focus ring with offset on `:focus-visible` in `index.css`.
- `<img>` width/height + `loading="lazy"` (except hero LCP, which gets `fetchpriority="high"`).
- Self-hosting Fraunces/Inter is out of scope this pass — keep Google Fonts with preconnect + `display=swap` (already in place); flag self-hosting as a follow-up.

### OG images

Generate 6 OG images via `imagegen` (premium tier, 1200×630) — one per top-level route — placed at `public/og/{route}.jpg`. Bone background, oxblood Fraunces "Adnan Khan" + route tagline.

### Out of scope this pass

- True SSR (would require migrating off Vite SPA — flagged above).
- Self-hosting variable fonts.
- Pulling Marketing Association article bodies — the 3 thinking posts will be locally authored summaries with canonical link to the MA hub.
- Plausible/Cloudflare Web Analytics, Google Business Profile, Search Console submission (post-deploy ops).
- Podcast embed (placeholder card with external links only).

I'll proceed end-to-end once you approve.
