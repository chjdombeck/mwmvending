// Usage: node screenshot.mjs <url> [label]
// Saves full-page PNG to ./temporary screenshots/screenshot-N[-label].png (auto-incremented).
import { mkdirSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import puppeteer from 'puppeteer';

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] ? `-${process.argv[3]}` : '';
const outDir = join(process.cwd(), 'temporary screenshots');
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

let n = 1;
for (const f of readdirSync(outDir)) {
  const m = f.match(/^screenshot-(\d+)/);
  if (m) n = Math.max(n, Number(m[1]) + 1);
}
const outPath = join(outDir, `screenshot-${n}${label}.png`);

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
await new Promise((r) => setTimeout(r, 600)); // let fonts/CDN settle
await page.screenshot({ path: outPath, fullPage: true });
await browser.close();
console.log(`Saved ${outPath}`);
