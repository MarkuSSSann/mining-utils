import { Select, ListBox, Label } from "@heroui/react";
import { STRATEGIES, ENCHANTMENTS } from "@data/constants.ts";
import { useAtomValue, useSetAtom } from "jotai";
import {
  getFormAtom,
  updateEnchantmentAtom,
  updateStrategyAtom,
} from "../../context/form";
import SessionTimeInput from "./SessionTimeInput";

export default function DataInputs() {
  const formData = useAtomValue(getFormAtom);

  const updateStrategy = useSetAtom(updateStrategyAtom);
  const updateEnchantment = useSetAtom(updateEnchantmentAtom);

  return (
    <fieldset className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-1 xl:border-none border-t border-default-200 md:pb-0 pb-2">
      <legend className="mb-4 text-lg font-semibold text-foreground">
        Session data
      </legend>
      <Select
        aria-label="Strategy"
        value={formData.strategy}
        onChange={(key) => updateStrategy({ key })}
        className="min-w-36">
        <Label>Mining strategy</Label>
        <Select.Trigger>
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            {STRATEGIES.map((strategy) => (
              <ListBox.Item key={strategy} id={strategy} textValue={strategy}>
                {strategy}
              </ListBox.Item>
            ))}
          </ListBox>
        </Select.Popover>
      </Select>

      <Select
        aria-label="Enchantment"
        value={formData.enchantment}
        placeholder="None"
        selectionMode="multiple"
        onChange={(keys) => updateEnchantment({ keys })}>
        <Label htmlFor="enchantment-select">Enchantments used</Label>
        <Select.Trigger id="enchantment-select">
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox selectionMode="multiple">
            {ENCHANTMENTS.map((enchantment) => (
              <ListBox.Item
                key={enchantment}
                id={enchantment}
                textValue={enchantment}>
                {enchantment}
                <ListBox.ItemIndicator />
              </ListBox.Item>
            ))}
          </ListBox>
        </Select.Popover>
      </Select>
      <SessionTimeInput formTime={formData.time} />
    </fieldset>
  );
}
