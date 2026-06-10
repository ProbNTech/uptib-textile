/**
 * Extracts a poster image from public/videos/banner.mp4.
 * Run after replacing the banner video:  node scripts/extract-banner-poster.js
 *
 * Requires devDependencies: ffmpeg-static, sharp
 */
const path = require("path");
const fs = require("fs");
const { spawnSync } = require("child_process");
const ffmpegPath = require("ffmpeg-static");
const sharp = require("sharp");

const VIDEO = path.resolve(__dirname, "..", "public", "videos", "banner.mp4");
const POSTER = path.resolve(__dirname, "..", "public", "videos", "banner-poster.jpg");
const TMP = path.resolve(__dirname, "..", "public", "videos", "_poster.raw.jpg");
const SEEK = "00:00:01";

if (!fs.existsSync(VIDEO)) {
  console.error(`✗ banner video missing: ${VIDEO}`);
  process.exit(1);
}

const ff = spawnSync(
  ffmpegPath,
  ["-y", "-ss", SEEK, "-i", VIDEO, "-frames:v", "1", "-q:v", "3", "-update", "1", TMP],
  { stdio: "inherit" }
);
if (ff.status !== 0) {
  console.error("✗ ffmpeg failed");
  process.exit(ff.status ?? 1);
}

(async () => {
  const buf = await sharp(TMP)
    .resize(1920, null, { fit: "inside" })
    .jpeg({ quality: 78, mozjpeg: true, progressive: true })
    .toBuffer();
  fs.writeFileSync(POSTER, buf);
  fs.unlinkSync(TMP);
  console.log(`✓ ${path.relative(process.cwd(), POSTER)}  ${(buf.length / 1024).toFixed(1)} KB`);
})();
