// Runs Lighthouse (mobile preset) against a URL and prints scores + failing audits.
// Usage: node lighthouse.mjs [url] [desktop]
import { launch } from 'chrome-launcher';
import lighthouse from 'lighthouse';
import desktopConfig from 'lighthouse/core/config/desktop-config.js';
import { executablePath } from 'puppeteer';

const url = process.argv[2] || 'http://localhost:3000';
const desktop = process.argv[3] === 'desktop';

const chromePath = await executablePath();
const chrome = await launch({
  chromePath,
  chromeFlags: ['--headless=new', '--no-sandbox', '--disable-gpu', '--window-size=412,823'],
});

const runnerResult = await lighthouse(
  url,
  { port: chrome.port, logLevel: 'error', onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'] },
  desktop ? desktopConfig : undefined,
);

const { categories, audits } = runnerResult.lhr;
console.log(`\n=== SCORES (${desktop ? 'desktop' : 'mobile'}) ===`);
for (const key of ['performance', 'accessibility', 'best-practices', 'seo']) {
  console.log(`  ${key.padEnd(16)} ${Math.round((categories[key].score || 0) * 100)}`);
}

console.log('\n=== FAILING / IMPERFECT AUDITS ===');
for (const key of ['performance', 'accessibility', 'best-practices', 'seo']) {
  for (const ref of categories[key].auditRefs) {
    const a = audits[ref.id];
    if (['informative', 'notApplicable', 'manual'].includes(a.scoreDisplayMode)) continue;
    if (a.score === null || a.score >= 1) continue;
    const val = a.displayValue ? ` (${a.displayValue})` : '';
    console.log(`  [${key}] ${a.id}: ${a.title}${val}  score=${a.score}`);
  }
}

console.log('\n=== KEY METRICS ===');
for (const id of ['first-contentful-paint', 'largest-contentful-paint', 'total-blocking-time', 'cumulative-layout-shift', 'speed-index']) {
  if (audits[id]) console.log(`  ${id.padEnd(28)} ${audits[id].displayValue}`);
}

console.log('\n=== DETAILS ===');
for (const id of ['largest-contentful-paint-element', 'uses-responsive-images', 'modern-image-formats', 'color-contrast', 'aria-prohibited-attr', 'target-size', 'errors-in-console', 'unused-css-rules', 'render-blocking-resources']) {
  const a = audits[id];
  if (!a || !a.details || !a.details.items || !a.details.items.length) continue;
  console.log(`\n-- ${id} (score=${a.score}) --`);
  for (const it of a.details.items.slice(0, 10)) console.log('  ' + JSON.stringify(it).slice(0, 300));
}

try { await chrome.kill(); } catch { /* windows temp lock, ignore */ }
process.exit(0);
