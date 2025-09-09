import { getPhase } from './helpers.js';

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
      const info = getPhase(req);
      return new Response(
        JSON.stringify(
          {
            utc: new Date().toISOString(),
            timezone: info.tz,
            localDate: info.localDate,
            localTime: info.localTime,
            ageDays: info.ageDays,
            phaseIndex: info.idx,
            phaseName: info.phase.label,
            icon: info.phase.icon.url,
            audio: info.phase.audio.url,
          },
          null,
          2
        ),
        { headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (pathname === '/moon/icon.png') {
      const info = getPhase(req);
      const iconUrl = info.phase.icon.url;

      if (!iconUrl) return new Response('No icon.', { status: 404 });

      const upstream = await fetch(iconUrl, { cf: { cacheTtl: 3600 } });
      if (!upstream.ok) return new Response('icon upstream error', { status: 502 });

      const bytes = await upstream.arrayBuffer();

      return new Response(bytes, {
        headers: {
          'Content-Type': 'image/png',
          'Cache-Control': 'public, max-age=3600',
        },
      });
    }

    if (pathname === '/moon') {
      const info = getPhase(req);
      console.log(`Phase: ${info.phase.label}`);

      const upstream = await fetch(info.phase.audio.url);
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
