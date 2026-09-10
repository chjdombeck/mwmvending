// Builds the Tailwind CSS, prepends the self-hosted @font-face rules,
// and injects the result inline into index.html between the
// <style id="site-css"> ... </style> markers.
//
// Run after changing any classes in index.html or any rule in src/.
//   node build.mjs   (or: npm run build)

import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';

execSync('npx tailwindcss -i src/input.css -o dist/tw.css --minify', { stdio: 'inherit' });

const css =
  readFileSync('src/fonts.css', 'utf8').trim() + '\n' + readFileSync('dist/tw.css', 'utf8').trim();

const html = readFileSync('index.html', 'utf8');
const marker = /<style id="site-css">[\s\S]*?<\/style>/;
if (!marker.test(html)) {
  console.error('ERROR: <style id="site-css">...</style> marker not found in index.html');
  process.exit(1);
}
const next = html.replace(marker, () => `<style id="site-css">${css}</style>`);
writeFileSync('index.html', next);
console.log(`Injected ${(css.length / 1024).toFixed(1)} KB of CSS into index.html`);
