import { PHASES } from './constants.js';

// Simple ≈Conway: returns 0 to 7
function computePhaseIndex(date) {
  const y = date.getUTCFullYear();
  const m = date.getUTCMonth() + 1;
  const d = date.getUTCDate();

  let r = y % 100;
  r %= 19;
  if (r > 9) r -= 19;
  r = ((r * 11) % 30) + m + d;
  if (m < 3) r += 2;

  // Slightly less negative than -8.3; normalize modulo to [0,30)
  let age = (((r + (y < 2000 ? -4 : -7.0)) % 30) + 30) % 30;

  // Classify by nearest of 8 phases (octants)
  const synodic = 29.53058867;
  const idx = Math.round((age / synodic) * 8) % 8;
  // 0 New, 1 Wax Cres, 2 First Q, 3 Wax Gib, 4 Full, 5 Wan Gib, 6 Last Q, 7 Wan Cres
  return idx;
}

export function getPhase() {
  const phaseIndex = computePhaseIndex(new Date());
  return PHASES[phaseIndex];
}
