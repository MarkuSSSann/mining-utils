import { Select, ListBox, Label, NumberField } from "@heroui/react";
import { STRATEGIES, ENCHANTMENTS } from "@data/constants.ts";
import { useAtomValue, useSetAtom } from "jotai";
import {
  getFormAtom,
  updateEnchantmentAtom,
  updateStrategyAtom,
  updateTimeAtom,
} from "../../context/form";

export default function DataInputs() {
  const formData = useAtomValue(getFormAtom);

  const updateStrategy = useSetAtom(updateStrategyAtom);
  const updateEnchantment = useSetAtom(updateEnchantmentAtom);
  const updateTime = useSetAtom(updateTimeAtom);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <Select
        aria-label="Strategy"
        value={formData.strategy}
        onChange={(key) => updateStrategy({ key })}>
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
        <Label>Enchantments used</Label>
        <Select.Trigger>
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
      <div className="flex flex-col">
        <NumberField
          isRequired
          minValue={0}
          value={formData.timeMinutes}
          onChange={(e) => updateTime({ time: e })}>
          <Label>Time tracked (minutes)</Label>
          <NumberField.Group>
            <NumberField.DecrementButton />
            <NumberField.Input />
            <NumberField.IncrementButton />
          </NumberField.Group>
        </NumberField>
      </div>
    </div>
  );
}
