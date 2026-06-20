// Build a numbered contact sheet from a list of image URLs, so candidates can be
// curated visually in one view. Usage:
//   node scripts/contact-sheet.mjs <urlfile> <out.jpg> <mapout.json> [count=48] [offset=0] [cols=8] [filter]
import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";

const [urlfile, out, mapout, countS = "48", offsetS = "0", colsS = "8", filter = ""] = process.argv.slice(2);
const count = +countS, offset = +offsetS, cols = +colsS;
const TILE = 300, PAD = 6, LABEL = 26;

let urls = readFileSync(urlfile, "utf8")
  .split("\n")
  .map((l) => l.replace(/\\\//g, "/").trim())
  .filter((l) => /^https?:\/\//.test(l));
if (filter) urls = urls.filter((u) => u.includes(filter));
urls = urls.slice(offset, offset + count);

const sized = (u) => (u.includes("cdn.shopify.com") ? u + (u.includes("?") ? "&" : "?") + "width=500" : u);

const tiles = [];
const map = [];
let idx = offset;
for (const url of urls) {
  const n = idx++;
  try {
    const res = await fetch(sized(url), { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) { console.log(`skip ${n} HTTP ${res.status}`); continue; }
    const buf = Buffer.from(await res.arrayBuffer());
    const base = await sharp(buf).resize(TILE, TILE, { fit: "cover" }).jpeg().toBuffer();
    const label = Buffer.from(
      `<svg width="${TILE}" height="${LABEL}"><rect width="100%" height="100%" fill="#111"/><text x="6" y="19" font-family="monospace" font-size="18" fill="#fff">#${n}</text></svg>`
    );
    const tile = await sharp(base)
      .composite([{ input: label, top: 0, left: 0 }])
      .toBuffer();
    tiles.push(tile);
    map.push({ i: n, url });
  } catch (e) { console.log(`err ${n} ${String(e).slice(0, 80)}`); }
}

const rows = Math.ceil(tiles.length / cols);
const W = cols * TILE + (cols + 1) * PAD;
const H = rows * TILE + (rows + 1) * PAD;
const composites = tiles.map((t, k) => ({
  input: t,
  top: PAD + Math.floor(k / cols) * (TILE + PAD),
  left: PAD + (k % cols) * (TILE + PAD),
}));
await sharp({ create: { width: W, height: H, channels: 3, background: "#e8e1d4" } })
  .composite(composites)
  .jpeg({ quality: 82 })
  .toFile(out);
writeFileSync(mapout, JSON.stringify(map, null, 0));
console.log(`wrote ${out} (${tiles.length} tiles) + ${mapout}`);
