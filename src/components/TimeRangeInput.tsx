import { Label, TimeField, Button, type TimeValue } from "@heroui/react";
import { useEffect, useState } from "react";
import { Time, getLocalTimeZone, now } from "@internationalized/date";

type Props = {
  formTime: number;
  updateTime: ({ time }: { time: number }) => void;
};

function timeToSeconds(time: TimeValue): number {
  return time.hour * 3600 + time.minute * 60 + (time.second || 0);
}

export default function TimeRangeInput({ formTime, updateTime }: Props) {
  const [endValue, setEndValue] = useState<TimeValue | null>(() => {
    if (formTime) {
      const currentTime = now(getLocalTimeZone());

      return new Time(currentTime.hour, currentTime.minute, currentTime.second);
    } else return null;
  });

  const [startValue, setStartValue] = useState<TimeValue | null>(() => {
    if (formTime) {
      const currentEnd = now(getLocalTimeZone());
      const diff = currentEnd.subtract({ seconds: formTime });

      return new Time(diff.hour, diff.minute, diff.second);
    } else return null;
  });

  const handleNow = (part: "start" | "end") => {
    const currentTime = now(getLocalTimeZone());

    const timeObj = new Time(
      currentTime.hour,
      currentTime.minute,
      currentTime.second,
    );

    switch (part) {
      case "start":
        setStartValue(timeObj);
        break;

      case "end":
        setEndValue(timeObj);
        break;

      default:
        console.log("how did u get here?");
        break;
    }
  };

  useEffect(() => {
    if (!startValue || !endValue) return;

    const startSec = timeToSeconds(startValue);
    const endSec = timeToSeconds(endValue);

    let diffInSeconds = endSec - startSec;

    if (diffInSeconds < 0) {
      diffInSeconds += 86400;
    }

    updateTime({ time: diffInSeconds });
  }, [startValue, endValue, updateTime]);

  return (
    <div className="flex flex-row gap-1">
      <div className="flex flex-col gap-1">
        <Label htmlFor="start-time">Start time</Label>
        <div className="flex align-baseline">
          <TimeField
            className="w-21"
            name="start time"
            value={startValue}
            onChange={setStartValue}>
            <TimeField.Group className="rounded-r-none" id="start-time">
              <TimeField.Input>
                {(segment) => <TimeField.Segment segment={segment} />}
              </TimeField.Input>
            </TimeField.Group>
          </TimeField>
          <Button
            variant="tertiary"
            className="rounded-l-none rounded-r-xl px-2"
            onPress={() => handleNow("start")}>
            now
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <Label htmlFor="end-time">End time</Label>
        <div className="flex align-baseline">
          <TimeField
            className="w-21"
            name="end time"
            value={endValue}
            onChange={setEndValue}>
            <TimeField.Group className="rounded-r-none" id="end-time">
              <TimeField.Input>
                {(segment) => <TimeField.Segment segment={segment} />}
              </TimeField.Input>
            </TimeField.Group>
          </TimeField>
          <Button
            variant="tertiary"
            className="rounded-l-none rounded-r-xl px-2"
            onPress={() => handleNow("end")}>
            now
          </Button>
        </div>
      </div>
    </div>
  );
}
