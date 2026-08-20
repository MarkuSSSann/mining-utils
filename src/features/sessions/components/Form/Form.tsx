import { Button, Card } from "@heroui/react";
import { useAtomValue, useSetAtom } from "jotai";
import type { FormEvent } from "react";
import { getFormAtom, resetFormAtom } from "../../context/form";
import { setRecordAtom } from "../../context/records";
import { RESOURCES } from "@data/constants.ts";
import type { ResourceValues } from "@types";
import DataInputs from "./DataInputs";
import ValueInputs from "./ValueInputs";

export default function Form() {
  const formData = useAtomValue(getFormAtom);

  const setRecord = useSetAtom(setRecordAtom);
  const resetForm = useSetAtom(resetFormAtom);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const netResources = {} as ResourceValues;
    RESOURCES.forEach((res) => {
      netResources[res] =
        (formData.after[res] ?? 0) - (formData.before[res] ?? 0);
    });
    const dateNow = new Date();

    const dateId = `${dateNow.getHours()}-${dateNow.getMinutes()}-${dateNow.getSeconds()}`;

    const newRecord = {
      id: dateId,
      strategy: formData.strategy,
      enchantment: formData.enchantment,
      timeMinutes: Number(formData.timeMinutes),
      net: netResources,
    };

    setRecord({ record: newRecord });
    resetForm();
  };
  return (
    <Card>
      <Card.Header>
        <Card.Title className="text-2xl pb-2">New session</Card.Title>
      </Card.Header>
      <Card.Content>
        <form onSubmit={handleSubmit} className="space-y-6">
          <DataInputs />
          <ValueInputs />
          <Button type="submit" fullWidth variant="primary">
            Save results
          </Button>
        </form>
      </Card.Content>
    </Card>
  );
}
