import {
  getTimeInputStyle,
  setTimeInputStyle,
} from "@features/sessions/context/form";
import { Label, Modal, ToggleButton, ToggleButtonGroup } from "@heroui/react";
import type { UseOverlayStateReturn } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useAtomValue, useSetAtom } from "jotai";

type Props = {
  state: UseOverlayStateReturn;
};

export default function SessionSettingsModal({ state }: Props) {
  const timerStyle = useAtomValue(getTimeInputStyle);
  const setTimerStyle = useSetAtom(setTimeInputStyle);

  return (
    <Modal.Backdrop isOpen={state.isOpen} onOpenChange={state.setOpen}>
      <Modal.Container>
        <Modal.Dialog>
          <Modal.CloseTrigger />
          <Modal.Header>
            <Modal.Heading>Session settings</Modal.Heading>
          </Modal.Header>
          <Modal.Body>
            <div className="flex flex-col">
              <Label>Timer style settings</Label>
              <ToggleButtonGroup
                defaultSelectedKeys={[timerStyle ?? "stopwatch"]}
                selectionMode="single"
                size="sm">
                <ToggleButton
                  id="stopwatch"
                  onPress={() => setTimerStyle({ style: "stopwatch" })}>
                  <Icon icon={"mdi:stopwatch-outline"} />
                  Stopwatch
                </ToggleButton>
                <ToggleButton
                  id="input"
                  onPress={() => setTimerStyle({ style: "input" })}>
                  <ToggleButtonGroup.Separator />
                  <Icon icon={"mdi:clock-digital"} />
                  Time input
                </ToggleButton>
                <ToggleButton
                  id="range"
                  onPress={() => setTimerStyle({ style: "range" })}>
                  <ToggleButtonGroup.Separator />
                  <Icon icon={"mdi:ray-start-end"} />
                  Time input range
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </Modal.Body>
        </Modal.Dialog>
      </Modal.Container>
    </Modal.Backdrop>
  );
}
