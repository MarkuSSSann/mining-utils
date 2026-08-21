import type { ButtonProps } from "@heroui/react";
import type { ENCHANTMENTS, RESOURCES, STRATEGIES } from "./data/constants.ts";

export type Resource = (typeof RESOURCES)[number];
export type Enchantments = (typeof ENCHANTMENTS)[number];
export type Strategies = (typeof STRATEGIES)[number];

export type ResourceValues = Record<Resource, number | null>;
export type ResourceSection = "before" | "after";
export type TextField = "strategy" | "enchantment" | "timeMinutes";

export interface FormData {
  strategy: Strategies;
  enchantment: Enchantments[];
  timeMinutes: number;
  before: ResourceValues;
  after: ResourceValues;
}

export interface MiningRecord {
  id: string;
  strategy: Strategies;
  enchantment: Enchantments[];
  timeMinutes: number;
  net: ResourceValues;
}

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
