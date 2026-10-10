- Routes are declared once in src/AppRoutes.tsx (client passes lazy pages, src/entry-server.tsx passes eager ones) and `npm run build` prerenders every route via scripts/prerender.mjs — so crawlers get full HTML without a headless browser; new routes must be added to both the page map and the `routes` list in entry-server.

- Keep extended service content in src/data/services.ts and FAQs in src/data/faqs.ts; pages, structured data and the full AI profile consume those sources so answers stay in sync.
- Use native browser scrolling and IntersectionObserver reveals only; the shared action button has no motion dependency to keep prerendering simple and the client bundle small.
- Preserve the static public/sitemap.xml mechanism; exclude noindex routes and use only authoritative page-specific lastmod timestamps, never build-date fallbacks.
- Run scripts/verify-prerender.mjs at the end of prerendering to reject invalid metadata or JSON-LD and report the emitted main bundle size.
- Notes essays live in src/data/notes.ts as Markdown and render through src/components/Markdown.tsx (tiny SSR-safe renderer, no dependency); /notes/:slug routes come from that data in entry-server.
