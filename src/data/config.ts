import type { NavItem } from "@types";

export const RESOURCES = [
  "money",
  "orbs",
  "gems",
  "totalBlocks",
  "rawBlocks",
  "beacons",
] as const;

export const STRATEGIES = [
  "mole",
  "top-to-down",
  "sides",
  "stripes",
  "shift-mine",
] as const;

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

export const NAV_ITEMS: NavItem[] = [
  {
    id: "home",
    title: "Home",
    path: "/",
    category: "Utils",
  },
  {
    id: "sessions",
    title: "Session tracker",
    path: "/sessions",
    category: "Analytics",
  },
  { id: "voting", title: "Voting", path: "/voting", category: "Utils" },
];
