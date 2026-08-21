import { Button, Card, useOverlayState } from "@heroui/react";
import { useAtomValue, useSetAtom } from "jotai";
import type { FormEvent } from "react";
import { getFormAtom, resetFormAtom } from "../../context/form";
import { setRecordAtom } from "../../context/records";
import { RESOURCES } from "@data/constants.ts";
import type { ResourceValues } from "@types";
import DataInputs from "./DataInputs";
import ValueInputs from "./ValueInputs";
import IconButton from "@components/IconButton";
import SessionSettingsModal from "./SessionSettingsModal";

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
      time: Number(formData.time),
      net: netResources,
    };

    setRecord({ record: newRecord });
    resetForm();
  };

  const modalState = useOverlayState();

  return (
    <>
      <SessionSettingsModal state={modalState} />
      <Card>
        <Card.Header className="flex flex-row">
          <Card.Title className="text-2xl pb-2">New session</Card.Title>
          <IconButton
            icon="mdi:cog"
            iconSize={20}
            size="sm"
            variant="tertiary"
            className="ml-auto"
            onToggle={modalState.open}
          />
        </Card.Header>
        <Card.Content>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 xl:grid-cols-2 xl:items-start">
              <DataInputs />
              <ValueInputs />
            </div>
            <Button type="submit" fullWidth variant="primary">
              Save results
            </Button>
          </form>
        </Card.Content>
      </Card>
    </>
  );
}
