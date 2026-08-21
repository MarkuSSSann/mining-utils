import { useAtomValue, useSetAtom } from "jotai";
import { getFormAtom, updateFormInputAtom } from "../../context/form";
import { RESOURCES } from "@data/constants.ts";
import { divideAndCapitalize } from "@utils/text";
import SmartNumberInput from "@components/SmartNumberInput";

export default function ValueInputs() {
  const formData = useAtomValue(getFormAtom);

  const updateInputs = useSetAtom(updateFormInputAtom);

  return (
    <fieldset className="xl:border-t-transparent xl:border-l xl:pl-3 border-t border-default-200">
      <legend className="mb-4 text-lg font-semibold text-foreground">
        Resources
      </legend>
      <div className="grid grid-cols-[minmax(7rem,1fr)_1fr_1fr] gap-4 pb-2 text-sm font-semibold text-default-500">
        <span>Resource</span>
        <span>Before</span>
        <span>After</span>
      </div>

      {RESOURCES.map((res) => (
        <div
          key={res}
          className="grid grid-cols-[minmax(7rem,1fr)_1fr_1fr] items-center gap-4 py-2">
          <span className="capitalize text-sm text-default-700">
            {divideAndCapitalize(res)}
          </span>
          <SmartNumberInput
            aria-label={`${res} before`}
            value={formData.before[res]}
            onChange={(value) =>
              updateInputs({ value, section: "before", field: res })
            }
          />
          <SmartNumberInput
            aria-label={`${res} after`}
            value={formData.after[res]}
            onChange={(value) =>
              updateInputs({ value, section: "after", field: res })
            }
          />
        </div>
      ))}
    </fieldset>
  );
}
