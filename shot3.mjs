import { chromium } from 'playwright-core';
import fs from 'fs';
const base = process.env.LOCALAPPDATA + '\\ms-playwright';
let exe = null;
for (const d of fs.readdirSync(base)) {
  if (d.startsWith('chromium')) { const p = `${base}\\${d}\\chrome-win\\chrome.exe`; if (fs.existsSync(p)) { exe = p; break; } }
}
const browser = await chromium.launch({ executablePath: exe, headless: true });
const slugs = ['apparel-accessories', 'sportswear-activewear', 'healthcare-textile'];
for (const slug of slugs) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(`http://localhost:3137/products/${slug}`, { waitUntil: 'load', timeout: 60000 });
  // dismiss cookie banner
  for (const t of ['Accept All', 'Accept all', 'Accept']) {
    const b = await page.$(`text="${t}"`); if (b) { await b.click().catch(()=>{}); break; }
  }
  // slow scroll to trigger every lazy image, then settle
  const h = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < h; y += 400) { await page.evaluate(_y => window.scrollTo(0, _y), y); await page.waitForTimeout(220); }
  await page.evaluate(() => window.scrollTo(0, 0));
  // wait for all imgs to finish decoding
  await page.evaluate(async () => { await Promise.all(Array.from(document.images).map(i => i.complete ? 0 : i.decode().catch(()=>{}))); });
  await page.waitForTimeout(1200);
  const sec = await page.$('section.bg-\\[\\#F7F3EA\\]');
  if (sec) await sec.screenshot({ path: `.imgsrc/show_${slug}.png` });
  console.log('shot', slug);
  await page.close();
}
await browser.close();
