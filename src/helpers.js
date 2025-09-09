import { PHASES } from './constants.js';

// Constants
const SYNODIC = 29.530588853;
const DAY_MS = 86400000;
const SYNODIC_MS = SYNODIC * DAY_MS;

// 1) Use a RECENT anchor (or env override). Fallback to the old epoch if missing.
const DEFAULT_ANCHOR_ISO = '2025-08-23T06:06:00Z'; // real new moon near test window
const FALLBACK_EPOCH_ISO = '2000-01-06T18:14:00Z'; // old reference
function getAnchorMs(env) {
  const iso = (env && env.LUNAR_ANCHOR_ISO) || DEFAULT_ANCHOR_ISO;
  const t = Date.parse(iso);
  return Number.isNaN(t) ? Date.parse(FALLBACK_EPOCH_ISO) : t;
}

function getParams(req) {
  const url = new URL(req.url);
  return {
    tz: url.searchParams.get('tz') || req.cf?.timezone || 'UTC',
    lastNewISO: url.searchParams.get('lastNew') || null,
  };
}

function nowInTZ(tz) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).formatToParts(new Date());
  const v = (t) => +parts.find((p) => p.type === t).value;
  const y = v('year'),
    m = v('month'),
    d = v('day'),
    hh = v('hour'),
    mm = v('minute'),
    ss = v('second');
  const instant = new Date(Date.UTC(y, m - 1, d, hh, mm, ss));
  const ymd = `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
  const hms = `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;
  return { instant, ymd, hms };
}

// 2) Compute last new from the recent anchor (or explicit ?lastNew)
function lastNewMoonMs(instant, lastNewISO, env) {
  if (lastNewISO) {
    const t = Date.parse(lastNewISO);
    if (!Number.isNaN(t)) return t;
  }
  const anchor = getAnchorMs(env);
  const cycles = Math.floor((instant.getTime() - anchor) / SYNODIC_MS);
  return anchor + cycles * SYNODIC_MS;
}

function phaseIndexFromAgeDays(age) {
  if (age < 1.84566) return 0; // New
  if (age < 5.53699) return 1; // Waxing Crescent
  if (age < 9.22831) return 2; // First Quarter
  if (age < 12.91963) return 3; // Waxing Gibbous
  if (age < 16.61096) return 4; // Full
  if (age < 20.30228) return 5; // Waning Gibbous
  if (age < 23.99361) return 6; // Last Quarter
  if (age < 27.68493) return 7; // Waning Crescent
  return 0;
}

export function getPhase(req, env) {
  const { tz, lastNewISO } = getParams(req);
  const { instant, ymd, hms } = nowInTZ(tz);

  const lastNewMs = lastNewMoonMs(instant, lastNewISO, env);
  const ageDaysRaw = (instant.getTime() - lastNewMs) / DAY_MS;
  const ageDays = ((ageDaysRaw % SYNODIC) + SYNODIC) % SYNODIC;

  const idx = phaseIndexFromAgeDays(ageDays);
  const phase = PHASES[idx];
  return {
    phase,
    idx,
    tz,
    localDate: ymd,
    localTime: hms,
    ageDays: +ageDays.toFixed(2),
    lastNew: new Date(lastNewMs).toISOString(),
    nextNew: new Date(lastNewMs + SYNODIC_MS).toISOString(),
  };
}
