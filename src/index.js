import { b64ToBytes, getPhase } from './helpers.js';

export default {
  async fetch(req) {
    const { pathname } = new URL(req.url);

    if (pathname === '/') {
      return new Response(
        'Try /moon for audio, /moon/icon.png for icon, /debug for text, /health for status.',
        { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
      );
    }

    if (pathname === '/health') {
      return new Response('Healthy.', { headers: { 'Content-Type': 'text/plain' } });
    }

    if (pathname === '/debug') {
      const phase = getPhase();

      return new Response(
        JSON.stringify(
          {
            utc: new Date().toISOString(),
            phaseName: phase.label,
            icon: phase.icon.b64,
            audio: phase.audio.url,
          },
          null,
          2
        ),
        { headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (pathname === '/moon/icon.png') {
      const phase = getPhase();
      const b64 = phase.icon.b64;

      if (!b64) return new Response('No icon.', { status: 404 });

      const bytes = b64ToBytes(b64);
      return new Response(bytes, {
        headers: {
          'Content-Type': 'image/png',
          'Cache-Control': 'public, max-age=3600',
        },
      });
    }

    if (pathname === '/moon') {
      const phase = getPhase();
      console.log(`Phase: ${phase.label}`);

      const upstream = await fetch(phase.audio.url);
      if (!upstream.ok) return new Response('Upstream error.', { status: 502 });

      const bytes = await upstream.arrayBuffer();

      return new Response(bytes, {
        headers: {
          'Content-Type': 'audio/mpeg',
          'Cache-Control': 'no-store',
        },
      });
    }

    return new Response('Not found.', { status: 404 });
  },
};
