import { MAX_TIME_IN_SECONDS } from "@data/constants";
import { Input, Label, TextField } from "@heroui/react";
import { constructClassName } from "@utils/miniUtils";
import { processSeconds } from "@utils/numbers";

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
  const totalSeconds = Math.min(
    MAX_TIME_IN_SECONDS,
    Math.max(0, Math.trunc(formTime)),
  );
  const { hours, minutes, seconds } = processSeconds(totalSeconds);

  const updatePart = (part: "hours" | "minutes" | "seconds", value: string) => {
    const parsedValue = value === "" ? 0 : Number(value);
    if (!Number.isFinite(parsedValue)) return;

    const multipliers = {
      hours: 3600,
      minutes: 60,
      seconds: 1,
    };
    const nextValue = Math.max(0, Math.trunc(parsedValue));
    const currentTimeInSeconds = hours * 3600 + minutes * 60 + seconds;
    const currentPartInSeconds =
      { hours, minutes, seconds }[part] * multipliers[part];
    const nextTimeInSeconds = Math.min(
      MAX_TIME_IN_SECONDS,
      currentTimeInSeconds -
        currentPartInSeconds +
        nextValue * multipliers[part],
    );

    updateTime({ time: nextTimeInSeconds });
  };

  const identifierClasses =
    "absolute right-4 bottom-1.5 text-s text-gray-500 pointer-events-none transition-opacity duration-150 group-hover:opacity-0 group-focus-within:opacity-0";

  return (
    <div>
      <Label>{label}</Label>
      <div className="flex flex-row items-center">
        <TextField
          value={hours.toString()}
          onChange={(value) => updatePart("hours", value)}
          className="group relative flex items-center">
          <Input
            id="time-hours"
            className="rounded-r-none w-16"
            type="number"
            min={0}
            max={999}
          />
          <span className={identifierClasses}>h</span>
        </TextField>
        <span className="font-bold text-default-500">:</span>
        <TextField
          value={minutes.toString()}
          onChange={(value) => updatePart("minutes", value)}
          className="group relative flex items-center">
          <Input
            id="time-minutes"
            className="rounded-none w-15"
            type="number"
            min={0}
          />
          <span className={identifierClasses}>m</span>
        </TextField>
        <span className="font-bold text-default-500">:</span>
        <TextField
          value={seconds.toString()}
          onChange={(value) => updatePart("seconds", value)}
          className="group relative flex items-center">
          <Input
            id="time-seconds"
            className="rounded-l-none max-w-15"
            type="number"
            min={0}
          />
          <span className={constructClassName(identifierClasses, "right-4.5")}>
            s
          </span>
        </TextField>
      </div>
    </div>
  );
}
