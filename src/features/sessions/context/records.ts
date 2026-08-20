import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import type { MiningRecord } from "@types";

const __recordsAtom = atomWithStorage<MiningRecord[]>("mining-records", []);

const normalizeRecord = (value: MiningRecord): MiningRecord => ({
  ...value,
  enchantment:
    Array.isArray(value.enchantment) ? value.enchantment
    : value.enchantment ? [value.enchantment]
    : [],
});

const normalizeRecords = (value: unknown): MiningRecord[] => {
  if (Array.isArray(value)) {
    return value.map((record) => normalizeRecord(record as MiningRecord));
  }

  if (value && typeof value === "object" && "record" in value && value.record) {
    return [normalizeRecord(value.record as MiningRecord)];
  }

  return [];
};

export const getRecordsAtom = atom((get) =>
  normalizeRecords(get(__recordsAtom)),
);

export const setRecordAtom = atom(
  null,
  (_, set, { record }: { record: MiningRecord }) => {
    set(__recordsAtom, (prev) => [...normalizeRecords(prev), record]);
  },
);

export const deleteRecordAtom = atom(null, (_, set, { id }: { id: string }) => {
  set(__recordsAtom, (prev) =>
    normalizeRecords(prev).filter((record) => record.id !== id),
  );
});
