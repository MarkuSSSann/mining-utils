import { Label, Surface, ToggleButton } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useStopwatch } from "react-timer-hook";
import IconButton from "./IconButton";

type Props = {
  formTime: number;
  updateTime: ({ time }: { time: number }) => void;
};

export default function Timer({ formTime, updateTime }: Props) {
  const initialOffset = new Date();
  initialOffset.setSeconds(initialOffset.getSeconds() + formTime);

  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({
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

  const handleRestore = () => {
    reset(undefined, false);
    updateTime({ time: 0 });
  };

  return (
    <div className="flex flex-col gap-1">
      <Label isRequired>Timer</Label>
      <div className="flex items-center flex-row">
        <ToggleButton
          className="rounded-r-none rounded-l-lg px-3"
          size="md"
          isSelected={isRunning}
          onChange={handleToggle}>
          <Icon icon={isRunning ? "mdi:pause" : "mdi:play"} />
        </ToggleButton>
        <Surface
          className="flex rounded-none px-3 h-9 items-center"
          variant="secondary">
          {`${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}
        </Surface>
        <IconButton
          className="rounded-l-none pr-1"
          variant="tertiary"
          size="md"
          onToggle={handleRestore}
          icon="mdi:restore"
        />
      </div>
    </div>
  );
}
