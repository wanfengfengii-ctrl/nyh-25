export const DEG_TO_RAD = Math.PI / 180;
export const RAD_TO_DEG = 180 / Math.PI;

export function toRad(deg: number): number {
  return deg * DEG_TO_RAD;
}

export function toDeg(rad: number): number {
  return rad * RAD_TO_DEG;
}

export function normalizeAngle(angle: number): number {
  let result = angle % 360;
  if (result < 0) result += 360;
  return result;
}

export function angleDifference(angle1: number, angle2: number): number {
  let diff = angle1 - angle2;
  while (diff > 180) diff -= 360;
  while (diff < -180) diff += 360;
  return diff;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t;
}

export function getDistance(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

export function getAngleBetweenPoints(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return (Math.atan2(dy, dx) * RAD_TO_DEG + 360) % 360;
}

export function safeAsin(value: number): number {
  return Math.asin(clamp(value, -1, 1));
}

export function safeAcos(value: number): number {
  return Math.acos(clamp(value, -1, 1));
}
