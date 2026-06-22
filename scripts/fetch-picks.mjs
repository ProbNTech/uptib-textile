// Download curated picks (by "mapfile:index" tokens) to an output dir at high res,
// validating each is a real image via sharp. Usage:
//   node scripts/fetch-picks.mjs <outdir> <startNum> <mapfile:index> [more...]
import sharp from "sharp";
import { readFileSync, mkdirSync, writeFileSync } from "fs";

const [outdir, startS, ...tokens] = process.argv.slice(2);
let n = +startS;
mkdirSync(outdir, { recursive: true });

const cache = {};
const readMap = (f) => (cache[f] ??= JSON.parse(readFileSync(f, "utf8")));
const sized = (u) => (u.includes("cdn.shopify.com") ? u + (u.includes("?") ? "&" : "?") + "width=1600" : u);

for (const tok of tokens) {
  const c = tok.lastIndexOf(":");
  const mapfile = tok.slice(0, c);
  const idx = +tok.slice(c + 1);
  const entry = readMap(mapfile).find((e) => e.i === idx);
  if (!entry) { console.log(`MISS ${tok} (no index)`); continue; }
  const url = entry.url.replace(/\\\//g, "/");
  try {
    const res = await fetch(sized(url), { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) { console.log(`BAD ${tok} HTTP ${res.status}`); continue; }
    const buf = Buffer.from(await res.arrayBuffer());
    const meta = await sharp(buf).metadata();
    if (!meta.width || meta.width < 400) { console.log(`SMALL ${tok} ${meta.width}px`); continue; }
    // Normalise to a reasonable JPEG (handles webp/png sources).
    const jpg = await sharp(buf).resize(1600, 1600, { fit: "inside", withoutEnlargement: true }).jpeg({ quality: 86 }).toBuffer();
    const out = `${outdir}/${String(n).padStart(2, "0")}.jpg`;
    writeFileSync(out, jpg);
    console.log(`OK  ${out}  <- ${tok}  (${meta.width}x${meta.height} ${meta.format})`);
    n++;
  } catch (e) { console.log(`ERR ${tok} ${String(e).slice(0, 90)}`); }
}
console.log(`done; next index ${n}`);
