import { Label, Surface, ToggleButton } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useStopwatch } from "react-timer-hook";

type Props = {
  formTime: number;
  updateTime: ({ time }: { time: number }) => void;
};

export default function Timer({ formTime, updateTime }: Props) {
  const initialOffset = new Date();
  initialOffset.setSeconds(initialOffset.getSeconds() + formTime);

  const { totalSeconds, seconds, minutes, hours, isRunning, start, pause } =
    useStopwatch({
      autoStart: false,
      offsetTimestamp: initialOffset,
    });

  const handleToggle = () => {
    if (isRunning) {
      pause();
      updateTime({ time: totalSeconds });
    } else {
      start();
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <Label isRequired>Timer</Label>
      <div className="flex items-center flex-row gap-2">
        <ToggleButton size="md" isSelected={isRunning} onChange={handleToggle}>
          <Icon icon={isRunning ? "mdi:pause" : "mdi:play"} />
        </ToggleButton>
        <Surface
          className="flex rounded-3xl px-6 h-9 items-center"
          variant="secondary">
          {`${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}
        </Surface>
      </div>
    </div>
  );
}
