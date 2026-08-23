import { MILLISECONDS_IN_MINUTE, NUMBER_SUFFIXES } from "@data/constants.ts";

export function parseCompactNumber(value: string): number {
  if (!value || value.trim() === "") return NaN;

  const cleanValue = value.toLowerCase().replace(/[\s,]/g, "");
  const suffixes = Object.keys(NUMBER_SUFFIXES).join("|");

  const match = cleanValue.match(
    new RegExp(`^(-?(?:\\d+(?:\\.\\d+)?|\\.\\d+))(${suffixes})?$`),
  );

  if (!match) return NaN;

  const number = Number(match[1]);
  const suffix = match[2] as keyof typeof NUMBER_SUFFIXES | undefined;

  return number * (suffix ? NUMBER_SUFFIXES[suffix] : 1);
}

export function formatCompactNumber(value: number): string {
  if (!Number.isFinite(value)) return String(value);

  const suffix = Object.entries(NUMBER_SUFFIXES)
    .reverse()
    .find(([, multiplier]) => Math.abs(value) >= multiplier);

  if (!suffix) return String(value);

  const [label, multiplier] = suffix;
  const compactValue = (value / multiplier).toFixed(2).replace(/\.?0+$/, "");

  return `${compactValue}${label}`;
}

export function formatTime(totalSeconds: number): string {
  const { hours, minutes, seconds } = processSeconds(totalSeconds);

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export function formatElapsed(timestamp: number, now: number) {
  const elapsedMinutes = Math.max(
    0,
    Math.floor((now - timestamp) / MILLISECONDS_IN_MINUTE),
  );
  if (elapsedMinutes < 1) return "just now";
  if (elapsedMinutes < 60) return `${elapsedMinutes}m ago`;
  const elapsedHours = Math.floor(elapsedMinutes / 60);
  if (elapsedHours < 24) return `${elapsedHours}h ago`;
  return `${Math.floor(elapsedHours / 24)}d ago`;
}

export function processSeconds(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const remainingSeconds = Math.floor(totalSeconds % 60);

  return { hours, minutes, seconds: remainingSeconds };
}
