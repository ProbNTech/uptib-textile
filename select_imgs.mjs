import sharp from 'sharp';
import fs from 'fs';

const src = '.imgsrc';
// destination folder -> { name: pexelsId }
const sets = {
  'public/image/textile/apparel': {
    'basics-1': 34156905, 'basics-2': 5746084, 'basics-3': 9594141, 'basics-4': 30569741,
    'knit-1': 6995884, 'knit-2': 9603626, 'knit-3': 6996083, 'knit-4': 6995898,
    'denim-1': 10133274, 'denim-2': 6764122, 'denim-3': 4109759, 'denim-4': 10133275,
    'uniform-1': 6347888, 'uniform-2': 8531904, 'uniform-3': 7671167, 'uniform-4': 5706273,
  },
  'public/image/textile/sportswear': {
    'gym-1': 6975260, 'gym-2': 5012971, 'gym-3': 7319722, 'gym-4': 5012082,
    'perf-1': 3927384, 'perf-2': 4695175, 'perf-3': 31961166, 'perf-4': 3927388,
    'team-1': 18256095, 'team-2': 36342247, 'team-3': 5350136,
    'tech-1': 8483369, 'tech-2': 10221743, 'tech-3': 7298921, 'tech-4': 10221755,
  },
  'public/image/textile/healthcare': {
    'scrubs-1': 5888143, 'scrubs-2': 4270366, 'scrubs-3': 5206921, 'scrubs-4': 5888156,
    'care-1': 4930705, 'care-2': 6303603, 'care-3': 7659867, 'care-4': 14438789,
    'linen-1': 31902663, 'linen-2': 28513850, 'linen-3': 8793477, 'linen-4': 19743644,
    'surgical-1': 24193881, 'surgical-2': 1250655, 'surgical-3': 4769122,
  },
};

// find the source file for an id (any group prefix)
function findSrc(id) {
  const f = fs.readdirSync(src).find(x => x.endsWith(`__${id}.jpg`));
  return f ? `${src}/${f}` : null;
}

for (const [dir, map] of Object.entries(sets)) {
  fs.mkdirSync(dir, { recursive: true });
  for (const [name, id] of Object.entries(map)) {
    const s = findSrc(id);
    if (!s) { console.log('MISSING', name, id); continue; }
    await sharp(s).resize(1600, 1600, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true }).toFile(`${dir}/${name}.jpg`);
  }
  console.log('done', dir, Object.keys(map).length);
}
