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
  const phase = (r + (y < 2000 ? -4 : -8.3)) % 30;

  if (phase < 1) return 0; // New
  if (phase < 7) return 1; // Waxing Crescent
  if (phase < 9) return 2; // First Quarter
  if (phase < 15) return 3; // Waxing Gibbous
  if (phase < 17) return 4; // Full
  if (phase < 23) return 5; // Waning Gibbous
  if (phase < 25) return 6; // Last Quarter
  return 7; // Waning Crescent
}

export function getPhase() {
  const phaseIndex = computePhaseIndex(new Date());
  return PHASES[phaseIndex];
}
