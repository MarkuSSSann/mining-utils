import type { FormData } from "../types";

export const GITHUB_REPO_URL = "https://github.com/MarkuSSSann/mining-utils";

export const RESOURCES = [
  "money",
  "orbs",
  "gems",
  "totalBlocks",
  "rawBlocks",
  "beacons",
] as const;

export const STRATEGIES = ["mole", "top-to-down", "sides"] as const;

export const ENCHANTMENTS = [
  "Dragon Burst",
  "Explosive Tip",
  "Laser Enchant",
  "Zeus Lightning",
  "Earthquake Strike",
  "Tnt Rain",
  "Reversed Dragon",
  "Warden Rage",
  "Dragon Rage",
  "Tengai Shinsei",
] as const;

export const DEFAULT_FORM: FormData = {
  strategy: "top-to-down",
  enchantment: [],
  time: 0,
  before: {
    orbs: null,
    gems: null,
    rawBlocks: null,
    totalBlocks: null,
    beacons: null,
    money: null,
  },
  after: {
    orbs: null,
    gems: null,
    rawBlocks: null,
    totalBlocks: null,
    beacons: null,
    money: null,
  },
};

export const NUMBER_SUFFIXES = {
  k: 1e3,
  m: 1e6,
  b: 1e9,
  t: 1e12,
  q: 1e15,
  qi: 1e18,
  sx: 1e21,
  sp: 1e24,
  oc: 1e27,
  no: 1e30,
} as const;

export const MAX_TIME_IN_SECONDS = 999 * 3600 + 59 * 60 + 59;
