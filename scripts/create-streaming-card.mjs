const accessToken = process.env.YOTO_ACCESS_TOKEN?.trim();
const workerBase = process.env.WORKER_BASE?.replace(/\/+$/, ''); // strip trailing slash

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
const body = {
  title,
  content: {
    chapters: [
      {
        key: '01',
        title: 'Moon Tonight',
        tracks: [
          {
            key: '01',
            type: 'stream',
            format: 'mp3',
            title: 'Moon Tonight',
            trackUrl: `${workerBase}/moon`,
            display: { iconUrl16x16: `${workerBase}/moon/icon.png` },
          },
        ],
        display: { iconUrl16x16: `${workerBase}/moon/icon.png` },
      },
    ],
  },
  metadata: { description: 'Dynamic moon phase: stream + dynamic icon' }, // TODO: update as this shows up with the card
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
