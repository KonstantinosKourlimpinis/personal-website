import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, "..", "public");

const JPEG_QUALITY = 80;
const PNG_QUALITY = 80;
const MAX_WIDTH = 2400; // cap very large images — no browser needs wider

async function getImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      files.push(...(await getImages(full)));
    } else {
      const ext = extname(e.name).toLowerCase();
      if ([".jpg", ".jpeg", ".png"].includes(ext)) files.push(full);
    }
  }
  return files;
}

async function compress(filePath) {
  const before = (await stat(filePath)).size;
  const ext = extname(filePath).toLowerCase();
  const tmp = filePath + ".tmp";

  try {
    let pipeline = sharp(filePath).resize({ width: MAX_WIDTH, withoutEnlargement: true });

    if (ext === ".png") {
      pipeline = pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9 });
    } else {
      pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, progressive: true, mozjpeg: true });
    }

    await pipeline.toFile(tmp);

    const after = (await stat(tmp)).size;

    if (after < before) {
      // Replace original only if we actually saved space
      const { rename } = await import("fs/promises");
      await rename(tmp, filePath);
      const saved = ((before - after) / before * 100).toFixed(1);
      console.log(`✓ ${filePath.replace(PUBLIC_DIR, "")}  ${kb(before)} → ${kb(after)}  (-${saved}%)`);
    } else {
      const { unlink } = await import("fs/promises");
      await unlink(tmp);
      console.log(`– ${filePath.replace(PUBLIC_DIR, "")}  already optimal (${kb(before)})`);
    }
  } catch (err) {
    console.error(`✗ ${filePath.replace(PUBLIC_DIR, "")}  ${err.message}`);
    try { const { unlink } = await import("fs/promises"); await unlink(tmp); } catch {}
  }
}

function kb(bytes) {
  return bytes >= 1_000_000
    ? (bytes / 1_000_000).toFixed(1) + " MB"
    : Math.round(bytes / 1000) + " KB";
}

const images = await getImages(PUBLIC_DIR);
console.log(`Found ${images.length} images in /public\n`);

let totalBefore = 0;
let totalAfter = 0;

for (const img of images) {
  const before = (await stat(img)).size;
  await compress(img);
  const after = (await stat(img)).size;
  totalBefore += before;
  totalAfter += after;
}

console.log(`\nTotal: ${kb(totalBefore)} → ${kb(totalAfter)}  (saved ${kb(totalBefore - totalAfter)})`);
