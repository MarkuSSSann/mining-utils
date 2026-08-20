import { NUMBER_SUFFIXES } from "@data/constants.ts";

export function parseCompactNumber(value: string): number {
  if (!value || value.trim() === "") return NaN;

  const cleanValue = value.toLowerCase().replace(/[\s,]/g, "");

  const match = cleanValue.match(/^(\d+(?:\.\d+)?|\.\d+)(qi|k|m|b|t|q)?$/);

  if (!match) return NaN;

  const number = Number(match[1]);
  const suffix = match[2] as keyof typeof NUMBER_SUFFIXES | undefined;

  return number * (suffix ? NUMBER_SUFFIXES[suffix] : 1);
}
