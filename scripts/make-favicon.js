// One-off: crop the emblem out of the stacked logo and emit favicon assets.
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "public", "image", "main-logo-v1.png");

// Emblem region within the 345x345 logo (drops the bottom wordmark band).
const region = { left: 38, top: 6, width: 270, height: 248 };

async function squarePng(size) {
  return sharp(SRC)
    .extract(region)
    .resize(size, size, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toBuffer();
}

function wrapIco(pngBuffer, size) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // count
  const entry = Buffer.alloc(16);
  entry.writeUInt8(size >= 256 ? 0 : size, 0); // width
  entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
  entry.writeUInt8(0, 2); // color palette
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // color planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(pngBuffer.length, 8); // image size
  entry.writeUInt32LE(22, 12); // offset
  return Buffer.concat([header, entry, pngBuffer]);
}

(async () => {
  const big = await squarePng(512);
  fs.writeFileSync(path.join(ROOT, "app", "icon.png"), big);
  fs.writeFileSync(path.join(ROOT, "public", "apple-touch-icon.png"), await squarePng(180));
  fs.writeFileSync(path.join(ROOT, "app", "apple-icon.png"), await squarePng(180));
  const icoPng = await squarePng(48);
  fs.writeFileSync(path.join(ROOT, "app", "favicon.ico"), wrapIco(icoPng, 48));
  fs.writeFileSync(path.join(ROOT, "public", "favicon.ico"), wrapIco(icoPng, 48));
  console.log("favicon assets written");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
