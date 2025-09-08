const accessToken = process.env.YOTO_ACCESS_TOKEN?.trim();
const workerBase = process.env.WORKER_BASE?.replace(/\/+$/, ''); // strip trailing slash
const mediaUrl = process.env.MEDIA_URL?.trim();

if (!accessToken) {
  console.error('Missing YOTO_ACCESS_TOKEN (must be the ACCESS token)');
  process.exit(1);
}
if (!workerBase) {
  console.error('Missing WORKER_BASE (e.g. https://your-worker.subdomain.workers.dev)');
  process.exit(1);
}

// Quick read to confirm token works before POSTing
const mine = await fetch('https://api.yotoplay.com/content/mine', {
  headers: { Authorization: `Bearer ${accessToken}` },
});
if (!mine.ok) {
  console.error('Token cannot read /content/mine:', mine.status, await mine.text());
  process.exit(1);
}

const title = 'Moon Phases';
const description = `Learn About Moon Phases
Explore how the moon changes shape in our sky and try a simple hands-on demo at home.

Tracks
1) Moon Tonight — Dynamic audio with a matching pixel icon for tonight's phase.
2) Intro to Moon Phases — A quick intro on why the Moon doesn't actually glow.
3) Create Moon Phases at Home - Recreate all 8 moon phases at home using a lamp (Sun), a ball (Moon), and you (Earth), with step-by-step instructions.

Features:
- No AI voices`;

const body = {
  title,
  content: {
    chapters: [
      {
        key: '01',
        title: 'Learn About Moon Phases',
        tracks: [
          {
            key: '01',
            type: 'stream',
            format: 'mp3',
            title: 'Moon Tonight',
            trackUrl: `${workerBase}/moon`,
            display: { iconUrl16x16: `${workerBase}/moon/icon.png` },
          },
          {
            key: '02',
            type: 'stream',
            format: 'mp3',
            title: 'Intro to Moon Phases',
            trackUrl:
              'https://raw.githubusercontent.com/anacapamu/yoto-moon-phase-assets/main/audio/intro-to-moon-phases.mp3',
            display: {
              iconUrl16x16:
                'https://raw.githubusercontent.com/anacapamu/yoto-moon-phase-assets/main/icons/crescent_moon.png',
            },
          },
          {
            key: '03',
            type: 'stream',
            format: 'mp3',
            title: 'Create Moon Phases at Home',
            trackUrl:
              'https://raw.githubusercontent.com/anacapamu/yoto-moon-phase-assets/main/audio/moon-phase-lab.mp3',
            display: {
              iconUrl16x16:
                'https://raw.githubusercontent.com/anacapamu/yoto-moon-phase-assets/main/icons/full_moon_with_face.png',
            },
          },
        ],
        display: { iconUrl16x16: `${workerBase}/moon/icon.png` },
      },
    ],
  },
  metadata: {
    description: description,
    cover: { imageL: mediaUrl },
  },
};

const resp = await fetch('https://api.yotoplay.com/content', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
});

const text = await resp.text();
if (!resp.ok) {
  console.error('Create failed:', resp.status, resp.statusText);
  console.error(text);
  process.exit(1);
}

try {
  console.log('Created streaming playlist:');
  console.log(JSON.stringify(JSON.parse(text), null, 2));
} catch {
  console.log(text);
}
