// Batch-optimize oversized images in public/image (resize + recompress, high quality).
// Originals are backed up to .image-backup/ first, so this is fully reversible.
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.join(__dirname, "..");
const IMG_DIR = path.join(ROOT, "public", "image");
const BACKUP = path.join(ROOT, ".image-backup");

const THRESHOLD = 800 * 1024; // only touch files larger than this
const PHOTO_CAP = 2400;       // max long edge for photos / heroes
const DECO_CAP = 1100;        // smaller cap for faint decorative art
const DECO = new Set(["globe.png", "pakistan.png"]); // displayed small/faint

function walk(dir, acc = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walk(full, acc);
    else if (/\.(jpe?g|png)$/i.test(name)) acc.push(full);
  }
  return acc;
}

(async () => {
  const files = walk(IMG_DIR).filter((f) => fs.statSync(f).size > THRESHOLD);
  let before = 0, after = 0, changed = 0, skipped = 0;

  for (const file of files) {
    const rel = path.relative(IMG_DIR, file);
    const base = path.basename(file).toLowerCase();
    const origSize = fs.statSync(file).size;
    before += origSize;

    // Back up the original once.
    const backupPath = path.join(BACKUP, rel);
    if (!fs.existsSync(backupPath)) {
      fs.mkdirSync(path.dirname(backupPath), { recursive: true });
      fs.copyFileSync(file, backupPath);
    }

    const src = fs.existsSync(backupPath) ? backupPath : file;
    const meta = await sharp(src).metadata();
    const cap = DECO.has(base) ? DECO_CAP : PHOTO_CAP;
    const longEdge = Math.max(meta.width || 0, meta.height || 0);

    let pipe = sharp(src).rotate(); // honour EXIF orientation, then drop it
    if (longEdge > cap) pipe = pipe.resize({ width: meta.width >= meta.height ? cap : null, height: meta.height > meta.width ? cap : null, withoutEnlargement: true });

    const ext = path.extname(file).toLowerCase();
    if (ext === ".png") pipe = pipe.png({ compressionLevel: 9, effort: 10, palette: meta.channels === 4 ? false : false });
    else pipe = pipe.jpeg({ quality: 80, mozjpeg: true });

    const out = await pipe.toBuffer();
    if (out.length < origSize) {
      fs.writeFileSync(file, out);
      after += out.length;
      changed++;
      console.log(`  ${(origSize/1024).toFixed(0)}KB -> ${(out.length/1024).toFixed(0)}KB  ${rel}`);
    } else {
      after += origSize;
      skipped++;
    }
  }

  console.log(`\nOptimized ${changed} files (${skipped} already optimal).`);
  console.log(`Total: ${(before/1024/1024).toFixed(1)}MB -> ${(after/1024/1024).toFixed(1)}MB  (saved ${((before-after)/1024/1024).toFixed(1)}MB)`);
  console.log(`Originals backed up in .image-backup/`);
})().catch((e) => { console.error(e); process.exit(1); });
