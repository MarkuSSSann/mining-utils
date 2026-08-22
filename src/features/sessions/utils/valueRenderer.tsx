import { formatCompactNumber } from "@utils/numbers";

export default function valueFormatter(value: number) {
  const textColor =
    value > 0 ? "text-green-600"
    : value < 0 ? "text-red-600"
    : "";

  const compactValue = formatCompactNumber(value);

  return (
    <span className={textColor}>
      {value > 0 ? "+" : ""}
      {compactValue}
    </span>
  );
}
