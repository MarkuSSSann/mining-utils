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

export const NavItems: NavItem[] = [
  { title: "Session Tracker", path: "/", category: "Analytics" },
  { title: "Voting", path: "/strategies", category: "Utils" },
];
