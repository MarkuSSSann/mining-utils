import { atom } from "jotai";
import { DEFAULT_FORM } from "@data/constants.ts";
import { ENCHANTMENTS, STRATEGIES } from "@data/config";

import type {
  Enchantments as Enchantment,
  Resource,
  ResourceSection,
  Strategies as Strategy,
  TextField,
  TimeInputStyle,
} from "@types";
import { parseCompactNumber } from "@utils/numbers";
import { atomWithStorage } from "jotai/utils";

const __formAtom = atom(DEFAULT_FORM);

export const getFormAtom = atom((get) => {
  return get(__formAtom);
});

export const updateFormInputAtom = atom(
  null,
  (
    _,
    set,
    payload: {
      value: string | number | null;
      section: ResourceSection;
      field: Resource | TextField;
    },
  ) => {
    const { field, section, value } = payload;

    const formattedValue =
      typeof value === "string" ? parseCompactNumber(value) : value;

    value: set(__formAtom, (prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: formattedValue ?? 0,
      },
    }));
  },
);

export const updateEnchantmentAtom = atom(
  null,
  (_, set, { keys }: { keys: readonly (string | number)[] }) => {
    const enchantments = Array.from(keys).filter((key): key is Enchantment =>
      ENCHANTMENTS.includes(key as Enchantment),
    );
    set(__formAtom, (prev) => ({ ...prev, enchantment: enchantments }));
  },
);

export const updateStrategyAtom = atom(
  null,
  (_, set, { key }: { key: string | number | null }) => {
    if (typeof key === "string" && STRATEGIES.includes(key as Strategy)) {
      const strategy = key as Strategy;
      set(__formAtom, (prev) => ({ ...prev, strategy }));
    } else {
      set(__formAtom, (prev) => ({ ...prev, strategy: "mole" }));
    }
  },
);

export const updateTimeAtom = atom(
  null,
  (_, set, { time }: { time: number | null }) => {
    if (time) {
      set(__formAtom, (prev) => ({ ...prev, time: time }));
    } else {
      set(__formAtom, (prev) => ({ ...prev, time: 0 }));
    }
  },
);

export const resetFormAtom = atom(null, (_, set) => {
  set(__formAtom, DEFAULT_FORM);
});

const __timeInputStyleAtom = atomWithStorage<TimeInputStyle>(
  "time-input-style",
  "stopwatch",
);

export const getTimeInputStyle = atom((get) => get(__timeInputStyleAtom));

export const setTimeInputStyle = atom(
  null,
  (_, set, { style }: { style: TimeInputStyle }) => {
    set(__timeInputStyleAtom, style);
  },
);
