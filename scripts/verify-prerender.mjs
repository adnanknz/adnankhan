import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import { gzipSync } from "node:zlib";

export function verifyPrerender(dist, routes) {
  let blocks = 0;
  const read = (route) => fs.readFileSync(path.join(dist, route, "index.html"), "utf8");
  for (const route of [...routes, "/404.html"]) {
    const file = route === "/404.html" ? path.join(dist, "404.html") : path.join(dist, route, "index.html");
    const html = fs.readFileSync(file, "utf8");
    assert.equal((html.match(/<title\b/g) || []).length, 1, `${route}: one title`);
    assert.equal((html.match(/<meta\b[^>]*name="description"/g) || []).length, 1, `${route}: one description`);
    assert.equal(html.includes("—"), false, `${route}: no em dashes`);
    for (const match of html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
      JSON.parse(match[1]);
      blocks++;
    }
    const canonical = html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/);
    assert.ok(canonical, `${route}: canonical`);
    for (const language of ["en-NZ", "x-default"]) {
      const tag = [...html.matchAll(/<link\b[^>]*>/g)].find(([value]) => value.toLowerCase().includes(`hreflang="${language}"`.toLowerCase()));
      assert.ok(tag?.[0].includes(`href="${canonical[1]}"`), `${route}: self-referencing ${language}`);
    }
    if (route.startsWith("/thinking/")) assert.match(html, /name="robots" content="noindex,follow"/);
  }
  const schemas = (html) => [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
  const faq = schemas(read("/")).find((s) => s["@type"] === "FAQPage");
  assert.equal(faq?.mainEntity.length, 12);
  assert.equal(schemas(read("/services")).filter((s) => s["@type"] === "Service").length, 5);
  assert.ok(schemas(read("/about")).some((s) => s["@type"] === "ProfilePage"));
  assert.match(read("/now"), /Last updated:/);
  console.log(`Verified ${routes.length + 1} HTML files: 12 FAQs, 5 Services, ProfilePage, thinking noindex, ${blocks} valid JSON-LD blocks, self-referencing alternates and zero em dashes.`);
  const assets = path.join(dist, "assets");
  if (fs.existsSync(assets)) {
    for (const file of fs.readdirSync(assets).filter((f) => /^index-.*\.js$/.test(f))) {
      const bytes = fs.readFileSync(path.join(assets, file));
      console.log(`Main JS bundle: ${file}, ${bytes.length} bytes (${gzipSync(bytes).length} bytes gzip).`);
    }
  }
}