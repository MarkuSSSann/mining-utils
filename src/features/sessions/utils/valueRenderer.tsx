export default function valueFormatter(value: number) {
  const textColor =
    value > 0 ? "text-green-600"
    : value < 0 ? "text-red-600"
    : "";

  return (
    <span className={textColor}>
      {value > 0 ? "+" : ""}
      {value}
    </span>
  );
}
