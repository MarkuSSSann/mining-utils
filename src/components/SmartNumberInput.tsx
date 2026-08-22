import { FieldError, Input, Label, TextField } from "@heroui/react";
import { useState, useEffect } from "react";
import { parseCompactNumber } from "../utils/numbers";

type Props = {
  value: number | null | undefined;
  onChange: (value: number | null) => void;
  label?: string;
  [key: string]: any;
};

export default function SmartNumberInput({
  value,
  onChange: outerOnChange,
  label = "",
  ...props
}: Props) {
  const [inputValue, setInputValue] = useState(
    value !== null && value !== undefined ? value.toString() : "",
  );

  const handleChange = (text: string) => {
    setInputValue(text);

    if (text.trim() === "") {
      outerOnChange(null);
      return;
    }

    const parsed = parseCompactNumber(text);

    if (!isNaN(parsed)) {
      outerOnChange(parsed);
    }
  };

  useEffect(() => {
    if (value === null || value === undefined) {
      setInputValue("");
      return;
    }

    const currentParsed = parseCompactNumber(inputValue);
    if (value !== currentParsed && !isNaN(value)) {
      setInputValue(value.toString());
    }
  }, [value]);

  const isInvalid =
    inputValue.trim() !== "" && isNaN(parseCompactNumber(inputValue));

  return (
    <TextField
      isInvalid={isInvalid}
      value={inputValue}
      onChange={handleChange}
      className="min-w-12"
      {...props}>
      {label !== "" && <Label />}
      <Input placeholder="e.g. 4.6b or 3000" />
      {isInvalid && <FieldError>bad format</FieldError>}
    </TextField>
  );
}
