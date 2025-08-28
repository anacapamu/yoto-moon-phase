import { computePhaseIndex, b64ToBytes } from "./helpers.js";
import { PHASES } from "./constants.js";

export default {
  async fetch(req) {
    const { pathname } = new URL(req.url);

    if (pathname === "/") {
      return new Response(
        "OK. Try /moon for audio, /moon/icon.png for icon, /debug for text, /health for status.",
        { headers: { "Content-Type": "text/plain; charset=utf-8" } }
      );
    }

    if (pathname === "/health") {
      return new Response("healthy", { headers: { "Content-Type": "text/plain" } });
    }

    if (pathname === "/debug") {
      const now = new Date();
      const i = computePhaseIndex(now);
      const phase = PHASES[i]
      return new Response(JSON.stringify({
        utc: now.toISOString(),
        phaseIndex: i,
        phaseName: phase.label,
        iconDataUri: phase.icon.b64
      }, null, 2), { headers: { "Content-Type": "application/json" } });
    }

    if (pathname === "/moon/icon.png") {
      const i = computePhaseIndex(new Date());
      const phase = PHASES[i];      
      const b64 = phase.icon.b64              
      if (!b64) return new Response("no icon", { status: 404 });

      const bytes = b64ToBytes(b64);               
      return new Response(bytes, {
        headers: {
          "Content-Type": "image/png",
          "Cache-Control": "public, max-age=3600"
        }
      });
  }

    if (pathname === "/moon") {
      const now = new Date();
      const phaseIndex = computePhaseIndex(now);
      const phase = PHASES[phaseIndex]; 
      const phaseName = phase.label;

      console.log(`Phase: ${phaseName} (${phaseIndex}) at ${now.toISOString()}`);

      const upstream = await fetch(phase.audio.url);
      if (!upstream.ok) return new Response("upstream error", { status: 502 });
      const bytes = await upstream.arrayBuffer();

      return new Response(bytes, {
        headers: {
          "Content-Type": "audio/mpeg",
          "Cache-Control": "no-store"
        }
      });
    }

    return new Response("Not found", { status: 404 });
  },
};
