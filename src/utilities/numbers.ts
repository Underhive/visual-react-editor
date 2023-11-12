export function numberBetween(min: number, max: number): number {
  return Math.floor(min + (Math.random() * (max - min)))
}

export function clamp(min: number, val: number, max: number): number {
  return Math.max(min, Math.min(val, max))
}