import type { ButtonProps } from "@heroui/react";
import type { ENCHANTMENTS, RESOURCES, STRATEGIES } from "@data/config.ts";
import type zod from "zod";
import type { FaqMessageSchema } from "@data/schemas";

export type Resource = (typeof RESOURCES)[number];
export type Enchantments = (typeof ENCHANTMENTS)[number];
export type Strategies = (typeof STRATEGIES)[number];

export type ResourceValues = Record<Resource, number | null>;
export type ResourceSection = "before" | "after";
export type TextField = "strategy" | "enchantment" | "timeMinutes";

export type FormData = {
  strategy: Strategies;
  enchantment: Enchantments[];
  time: number;
  before: ResourceValues;
  after: ResourceValues;
};

export type MiningRecord = {
  id: string;
  strategy: Strategies;
  enchantment: Enchantments[];
  time: number;
  net: ResourceValues;
};

export type ChartData = {
  id: string;
  [key: string]: number | string;
};

export type TimeInputStyle = "stopwatch" | "input" | "range";

export type IconButtonProps = {
  onToggle?: () => void;
  icon: string;
  iconSize?: number;
  onPress?: never;
  "aria-label"?: string;
} & Omit<ButtonProps, "onPress">;

export type NavItem = {
  id: string;
  title: string;
  text: string;
  path: string;
  icon?: string;
  category?: string;
  image?: string;
};

export type VoteLink = {
  site: string;
  link: string;
};

export type FaqMessage = zod.infer<typeof FaqMessageSchema>;
