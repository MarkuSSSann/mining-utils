import TimeInput from "@components/TimeInput";
import Timer from "@components/Timer";
import TimeRangeInput from "@components/TimeRangeInput";
import {
  getTimeInputStyle,
  updateTimeAtom,
} from "@features/sessions/context/form";
import { useAtomValue, useSetAtom } from "jotai";

type Props = {
  formTime: number;
  label?: string;
};

export default function SessionTimeInput({ formTime }: Props) {
  const timerStyle = useAtomValue(getTimeInputStyle);

  const updateTime = useSetAtom(updateTimeAtom);

  switch (timerStyle) {
    case "input":
      return <TimeInput formTime={formTime} updateTime={updateTime} />;

    case "stopwatch":
      return <Timer formTime={formTime} updateTime={updateTime} />;

    case "range":
      return <TimeRangeInput formTime={formTime} updateTime={updateTime} />;

    default:
      return <p className="text-rose-800">Bad identifier specified</p>;
  }
}
