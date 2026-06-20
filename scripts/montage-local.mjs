// Contact sheet from LOCAL image files in a dir, labelled by filename.
// Usage: node scripts/montage-local.mjs <dir> <out.jpg> [cols=6]
import sharp from "sharp";
import { readdirSync, writeFileSync } from "fs";

const [dir, out, colsS = "6"] = process.argv.slice(2);
const cols = +colsS, TILE = 320, PAD = 6, LABEL = 24;
const files = readdirSync(dir).filter((f) => /\.(jpe?g|png|webp)$/i.test(f)).sort();

const tiles = [];
for (const f of files) {
  const base = await sharp(`${dir}/${f}`).resize(TILE, TILE, { fit: "cover" }).jpeg().toBuffer();
  const label = Buffer.from(
    `<svg width="${TILE}" height="${LABEL}"><rect width="100%" height="100%" fill="#111"/><text x="6" y="17" font-family="monospace" font-size="15" fill="#fff">${f}</text></svg>`
  );
  tiles.push(await sharp(base).composite([{ input: label, top: 0, left: 0 }]).toBuffer());
}
const rows = Math.ceil(tiles.length / cols);
const W = cols * TILE + (cols + 1) * PAD, H = rows * TILE + (rows + 1) * PAD;
await sharp({ create: { width: W, height: H, channels: 3, background: "#e8e1d4" } })
  .composite(tiles.map((t, k) => ({ input: t, top: PAD + Math.floor(k / cols) * (TILE + PAD), left: PAD + (k % cols) * (TILE + PAD) })))
  .jpeg({ quality: 82 })
  .toFile(out);
console.log(`wrote ${out} (${tiles.length} tiles)`);
