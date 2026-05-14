# Adnan.co.nz — Iteration 3 Master Update Plan

This is a large, multi-part update. I'll execute it in phases, preserving the existing Bone & Oxblood design system, Web3Forms integration, and Cloudflare Pages deployment.

## Phase 1 — Technical foundation

1. **Prerendering**: Add `vite-plugin-prerender` (or `react-snap`) to `vite.config.ts` with the route list (`/`, `/about`, `/work`, `/services`, `/thinking`, `/casestudies`, `/contact`, `/now`, `/uses`, `/cv`). Build output will contain rendered HTML per route.
2. **Routing fixes**:
   - Add `/casestudies`, `/now`, `/uses`, `/cv` routes in `src/App.tsx`.
   - Rename current `/work/:slug` flow as needed; consolidate case studies under `/casestudies` (single page with anchors, since the brief says "render five cards previewing" with `/casestudies#anchor` links).
   - Add `/case-studies` and `/case-studies/*` 301 redirects via `public/_redirects` (and a runtime fallback `<Navigate>` for SPA paths).
3. **Per-page SEO**: Update each page's `SEO` component call with the exact title, description, and canonical from the brief.
4. **JSON-LD**: 
   - Replace site-wide graph in `SiteLayout.tsx` with the 4 blocks: Person, Stitch Org, Stitch Predict Org, ProfessionalService.
   - Add FAQPage schema on Home and Contact (6 Qs from brief).
   - Add Article schema per case study on `/casestudies`.
5. **robots.txt**: Replace `public/robots.txt` with the expanded AI-crawler allowlist (including Bytespider, Amazonbot, cohere-ai, Meta-ExternalAgent, FacebookBot, CCBot now allowed).
6. **sitemap.xml**: Replace `public/sitemap.xml` with the 10-URL list and 2026-05-14 lastmod dates.
7. **llms.txt + llms-full.txt**: Create both at `public/llms.txt` and `public/llms-full.txt` with the exact content from the brief plus long-form bio.
8. **Headers/manifest**: 
   - Update `public/_headers` with security headers from §4.5.
   - Create `public/_redirects` for case-studies → casestudies.
   - Create `public/manifest.json` with name/icons/theme_color #6B1F2A, background_color #F5F1EA.
   - Update `index.html`: theme-color meta, manifest link, apple-touch-icon, `link rel="me"` LinkedIn + mailto, robots meta with max-image-preview.

## Phase 2 — Content per page

9. **Home (`src/pages/Index.tsx`)** — confirm sections in order: Hero, Credentials strip, What I Do (5 services), Recent Work (5 case study cards), Achievements counters, Built With (Stitch + Stitch Predict), Recent Thinking (3 items), FAQ accordion (6 Qs), Contact teaser (Web3Forms), Footer. Replace hero H1/subhead/CTAs with brief copy. Update credentials strip text.
10. **About (`src/pages/About.tsx`)** — replace body with verbatim About copy (multi-paragraph bio, education, certifications, recognition, speaking).
11. **Work (`src/pages/Work.tsx`)** — H1 + intro from brief; render two logo groups (Stitch era list + krunch.co heritage list) with caption.
12. **Services (`src/pages/Services.tsx`)** — five sections in exact order with descriptions from brief.
13. **Case Studies (new `src/pages/CaseStudies.tsx`)** — replace `/work/:slug` detail flow. Single page with 5 case study sections (Comvita, AA Smartfuel, Turners, Mr Apple, Cisco) each with result strip + body + Article JSON-LD; anchor IDs match home links.
14. **Thinking (`src/pages/Thinking.tsx`)** — replace with the seeded 2024–2026 entries from brief, reverse-chronological.
15. **Contact (`src/pages/Contact.tsx`)** — H1, intro, contact rail (email/phone/LinkedIn/Facebook/Stitch/Stitch Predict), Web3Forms form with honeypot, address line, FAQ schema.
16. **Now (`src/pages/Now.tsx`)** — new page, single paragraph from brief.
17. **Uses (`src/pages/Uses.tsx`)** — new page, brief sections for hardware/software/AI tools/martech.
18. **CV (`src/pages/CV.tsx`)** — new page, full role timeline + education + certifications.

## Phase 3 — Data updates

19. Update `src/data/clients.ts` — split into Stitch era (Group A) and krunch.co heritage (Group B) per brief list.
20. Update `src/data/caseStudies.ts` — add Comvita and Cisco; refresh existing 3 with brief copy + metrics.
21. Update `src/data/thinking.ts` — replace with 2024–2026 entries.
22. Update `src/data/faqs.ts` — replace with the 6 Qs matching the FAQPage schema.
23. Update `src/data/site.ts` — confirm address (295 Parnell Road), phone, email, all sameAs URLs, founding dates.

## Phase 4 — Design polish

24. Verify header nav includes: Home, About, Work, Services, Case Studies, Thinking, Contact + "Work with me" CTA → /contact. Mobile burger preserved.
25. Verify all `<img>` alt text; add where missing on logos and case study heroes.
26. Verify focus rings + skip-to-content link present.

## Technical notes

- Prerendering: `vite-plugin-prerender` requires a headless Chromium step at build. If install/build issues arise on Lovable preview, I'll fall back to `react-snap` (postbuild) or `vite-plugin-ssg`. The Cloudflare Pages build will run the prerender step.
- The current code uses `react-helmet-async` for per-route meta — that's preserved and used for all per-page tags.
- The `_redirects` file is Cloudflare-compatible (Lovable preview hosting ignores it but it ships in `dist/`).
- I'll keep the existing oxblood/bone/Fraunces/Inter design tokens in `tailwind.config.ts` and `src/index.css` untouched unless a content addition needs a new utility.

## What I won't do

- Won't change the Web3Forms key (kept as-is).
- Won't alter the GitHub repo or Cloudflare Pages binding.
- Won't generate new OG images unless you ask — I'll keep the existing `/og-image.jpg` reference.
- Won't run Lighthouse from inside Lovable (no headless browser CI here); you'll run that post-deploy.

Approve and I'll execute end-to-end.