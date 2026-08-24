import type { NavItem, VoteLink } from "@types";

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
    text: "Mining utilities for your everyday gameplay.",
    path: "/",
    category: "Utils",
    icon: "mdi:home",
  },
  {
    id: "sessions",
    title: "Session tracker",
    text: "Track your mining sessions and compare your progress.",
    path: "/sessions",
    category: "Analytics",
    icon: "mdi:timelapse",
    image: "/session-img.png",
  },
  {
    id: "voting",
    title: "Voting",
    text: "Support the server and collect your voting rewards.",
    path: "/voting",
    category: "Utils",
    icon: "mdi:checkbox-outline",
    image: "/vote-img.png",
  },
  {
    id: "faq",
    title: "FAQ",
    text: "Frequently Asked Questions.",
    path: "/faq",
    category: "Utils",
    icon: "mdi:chat-question-outline",
    image: "/faq-img.jpg",
  },
] as const;

export const VOTING_LINKS: VoteLink[] = [
  {
    site: "Curse Forge",
    link: "https://www.curseforge.com/servers/minecraft/game/sunrealms/vote",
  },
  {
    site: "Minecraft MP",
    link: "https://minecraft-mp.com/server/345406/vote/",
  },
  {
    site: "Minecraft servers .org",
    link: "https://minecraftservers.org/vote/680119",
  },
  {
    site: "Servers Minecraft",
    link: "https://servers-minecraft.net/server-sunrealms.41682",
  },
  {
    site: "Minecraft server list",
    link: "https://minecraft-server-list.com/server/512495/vote/",
  },
  {
    site: "Best Minecraft servers",
    link: "https://best-minecraft-servers.co/server-sunrealms.29690/vote",
  },
  {
    site: "Minecraft servers .co",
    link: "https://minecraft-servers.co/#vote=312",
  },
] as const;
