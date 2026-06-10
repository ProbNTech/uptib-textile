// Convert photographic PNGs (no alpha) to JPEG; optimize transparent sketches in place.
// Originals already backed up in .image-backup/ by optimize-images.js.
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const IMG = path.join(__dirname, "..", "public", "image");

const toJpeg = ["who-we-are.png", "pak-map.png", "banners/banner116.png", "banners/banner100.png"];
const optPng = ["minarepakistan-sketch.png", "london-skyline-sketch.png"];

function resizeIf(pipe, meta, cap) {
  if (Math.max(meta.width || 0, meta.height || 0) > cap) {
    return pipe.resize({
      width: meta.width >= meta.height ? cap : null,
      height: meta.height > meta.width ? cap : null,
      withoutEnlargement: true,
    });
  }
  return pipe;
}

(async () => {
  for (const rel of toJpeg) {
    const src = path.join(IMG, rel);
    if (!fs.existsSync(src)) { console.log("skip (missing): " + rel); continue; }
    const out = src.replace(/\.png$/i, ".jpg");
    const before = fs.statSync(src).size;
    const meta = await sharp(src).metadata();
    await resizeIf(sharp(src).rotate(), meta, 2000).jpeg({ quality: 82, mozjpeg: true }).toFile(out);
    fs.rmSync(src);
    console.log(`  ${(before/1024).toFixed(0)}KB png -> ${(fs.statSync(out).size/1024).toFixed(0)}KB jpg  ${rel}`);
  }
  for (const rel of optPng) {
    const src = path.join(IMG, rel);
    if (!fs.existsSync(src)) { console.log("skip (missing): " + rel); continue; }
    const before = fs.statSync(src).size;
    const meta = await sharp(src).metadata();
    const buf = await resizeIf(sharp(src).rotate(), meta, 1200).png({ palette: true, colors: 128, compressionLevel: 9, effort: 10 }).toBuffer();
    if (buf.length < before) { fs.writeFileSync(src, buf); console.log(`  ${(before/1024).toFixed(0)}KB -> ${(buf.length/1024).toFixed(0)}KB  ${rel}`); }
    else console.log(`  kept (no gain): ${rel}`);
  }
})().catch((e) => { console.error(e); process.exit(1); });
