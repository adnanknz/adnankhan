// Build-time static prerender: renders every route with the SSR bundle and writes
// dist/<route>/index.html. No headless browser required.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const serverDir = path.join(root, "dist-server");
const entry = fs.readdirSync(serverDir).find((f) => /^entry-server\.(m?js)$/.test(f));
const { render, routes } = await import(pathToFileURL(path.join(serverDir, entry)).href);

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

// Strip tags from the static template that Helmet emits per route, so nothing is duplicated.
const stripPatterns = [
  /\s*<title>[\s\S]*?<\/title>/gi,
  /\s*<meta\s+name="(description|robots|author|theme-color)"[^>]*>/gi,
  /\s*<meta\s+(name|property)="(og:[^"]*|twitter:[^"]*)"[^>]*>/gi,
  /\s*<meta\s+http-equiv="content-language"[^>]*>/gi,
  /\s*<link\s+rel="(canonical|alternate)"[^>]*>/gi,
  /\s*<!--\s*Open Graph[\s\S]*?-->/gi,
];
let base = template;
for (const re of stripPatterns) base = base.replace(re, "");

function page(url) {
  const { html, head, htmlAttributes } = render(url);
  let out = base.replace("</head>", `    ${head}\n  </head>`);
  out = out.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  if (htmlAttributes) out = out.replace(/<html[^>]*>/i, `<html ${htmlAttributes}>`);
  return out;
}

function write(file, content) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
  console.log("prerendered", path.relative(root, file));
}

for (const url of routes) {
  const file = url === "/" ? path.join(dist, "index.html") : path.join(dist, url, "index.html");
  write(file, page(url));
}
write(path.join(dist, "404.html"), page("/__not-found__"));
