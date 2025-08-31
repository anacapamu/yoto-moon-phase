// Usage A (remote URL):
//   YOTO_ACCESS_TOKEN=... COVER_IMAGE_URL=https://.../cover.png node scripts/upload-cover.mjs
// Usage B (local file):
//   YOTO_ACCESS_TOKEN=... COVER_IMAGE_PATH=./art/cover.png node scripts/upload-cover.mjs

const accessToken = process.env.YOTO_ACCESS_TOKEN?.trim();
if (!accessToken) {
  console.error('Missing YOTO_ACCESS_TOKEN');
  process.exit(1);
}

const coverType = (process.env.COVER_TYPE || 'myo').trim();
const auto = (process.env.AUTOCONVERT || 'true').trim();

const imageUrl = process.env.COVER_IMAGE_URL?.trim();
const imagePath = process.env.COVER_IMAGE_PATH?.trim();

let endpoint = `https://api.yotoplay.com/media/coverImage/user/me/upload?coverType=${encodeURIComponent(
  coverType
)}&autoconvert=${encodeURIComponent(auto)}`;

let options = {
  method: 'POST',
  headers: { Authorization: `Bearer ${accessToken}` },
};

if (imageUrl) {
  endpoint += `&imageUrl=${encodeURIComponent(imageUrl)}`;
} else if (imagePath) {
  const fs = await import('node:fs/promises');
  const path = await import('node:path');
  const buf = await fs.readFile(imagePath);
  const ext = path.extname(imagePath).toLowerCase();
  const type =
    ext === '.png'
      ? 'image/png'
      : ext === '.jpg' || ext === '.jpeg'
        ? 'image/jpeg'
        : ext === '.webp'
          ? 'image/webp'
          : 'application/octet-stream';
  options.headers['Content-Type'] = type;
  options.body = buf;
} else {
  console.error('Provide COVER_IMAGE_URL or COVER_IMAGE_PATH');
  process.exit(1);
}

const res = await fetch(endpoint, options);
const text = await res.text();
if (!res.ok) {
  console.error('Upload failed:', res.status, res.statusText);
  console.error(text);
  process.exit(1);
}

let out;
try {
  out = JSON.parse(text);
} catch {
  console.log(text);
  process.exit(0);
}

const mediaUrl = out?.coverImage?.mediaUrl;
const mediaId = out?.coverImage?.mediaId;

if (!mediaUrl) {
  console.log(out);
  process.exit(0);
}

console.log('mediaUrl:', mediaUrl);
if (mediaId) console.log('mediaId:', mediaId);
