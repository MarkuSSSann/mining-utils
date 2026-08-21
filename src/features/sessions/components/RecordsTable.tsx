import { Card, Button } from "@heroui/react";
import { RESOURCES } from "@data/constants.ts";
import { useAtomValue, useSetAtom } from "jotai";
import { deleteRecordAtom, getRecordsAtom } from "../context/records";
import type { MiningRecord } from "@types";
import { AgGridReact } from "ag-grid-react";
import {
  colorSchemeDarkBlue,
  colorSchemeLightCold,
  themeQuartz,
  type ColDef,
} from "ag-grid-community";
import { useMemo } from "react";
import valueFormatter from "../utils/valueRenderer";
import { divideAndCapitalize } from "@utils/text";
import { useTheme } from "next-themes";
import { formatTime } from "@utils/numbers";

export default function RecordsTable() {
  const records = useAtomValue(getRecordsAtom);
  const deleteRecord = useSetAtom(deleteRecordAtom);

  const { resolvedTheme } = useTheme();

  const tableTheme = themeQuartz.withPart(
    resolvedTheme === "dark" ? colorSchemeDarkBlue : colorSchemeLightCold,
  );

  const columnDefs: ColDef<MiningRecord>[] = [
    { field: "id", headerName: "Id" },
    { field: "strategy", headerName: "Strategy" },
    {
      field: "enchantment",
      headerName: "Enchantment",
      valueFormatter: (param) => param.data?.enchantment?.join(", ") || "---",
    },
    {
      field: "time",
      headerName: "Time",
      valueFormatter: (param) => formatTime(param.data?.time ?? 0),
    },

    ...RESOURCES.map(
      (res): ColDef<MiningRecord> => ({
        headerName: divideAndCapitalize(res),
        valueGetter: (params) => params.data?.net[res] ?? 0,
        cellRenderer: (params: { data: MiningRecord }) =>
          valueFormatter(params.data?.net[res] ?? 0),
      }),
    ),
    {
      headerName: "Action",
      cellRenderer: (params: { data: MiningRecord }) => (
        <Button
          variant="danger"
          onClick={() => deleteRecord({ id: params.data.id })}>
          Delete
        </Button>
      ),
      filter: false,
      floatingFilter: false,
    },
  ];

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      filter: true,
      floatingFilter: true,
    };
  }, []);

  return (
    <Card>
      <Card.Header>
        <Card.Title>History table</Card.Title>
      </Card.Header>
      <Card.Content>
        <div className="h-96 w-full">
          <AgGridReact<MiningRecord>
            theme={tableTheme}
            rowData={records}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
          />
        </div>
      </Card.Content>
    </Card>
  );
}
