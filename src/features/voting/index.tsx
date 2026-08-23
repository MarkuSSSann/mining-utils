import { Card } from "@heroui/react";
import VoteTable from "./components/VoteTable";
import OpenAll from "./components/OpenAll";

export default function index() {
  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title className="text-2xl pb-2">Voting table</Card.Title>
          <Card.Description>
            {
              <>
                <p>
                  For bulk link opening to work correctly, you need to allow
                  pop-ups for this site. Opening 7 pages at once may lag ur
                  browser for a bit
                </p>
                <p>
                  Alternatively, you can <b>Ctrl-click</b> (Cmd for Mac){" "}
                  <b>on a link</b> to open a new tab without switching to it.
                </p>
              </>
            }
          </Card.Description>
        </Card.Header>
        <Card.Content className="flex gap-4">
          <OpenAll />
          <VoteTable />
        </Card.Content>
      </Card>
    </>
  );
}
