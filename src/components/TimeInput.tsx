import { NumberField, Label } from "@heroui/react";

type Props = {
  formTime: number;
  updateTime: ({ time }: { time: number }) => void;
  label?: string;
};

export default function TimeInput({
  formTime,
  updateTime,
  label = "Time input",
}: Props) {
  return (
    <NumberField
      id="time-input"
      aria-label="time-input"
      isRequired
      minValue={0}
      value={formTime}
      onChange={(e) => updateTime({ time: e })}>
      <Label htmlFor="time-input">{label}</Label>
      <NumberField.Group>
        <NumberField.DecrementButton />
        <NumberField.Input />
        <NumberField.IncrementButton />
      </NumberField.Group>
    </NumberField>
  );
}
