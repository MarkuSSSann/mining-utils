import { VOTING_LINKS } from "@data/config";
import { Button, Link, useTheme } from "@heroui/react";
import { Icon } from "@iconify/react";
import type { VoteLink } from "@types";
import {
  themeQuartz,
  colorSchemeDarkBlue,
  colorSchemeLightCold,
  type ColDef,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useMemo } from "react";

export default function VoteTable() {
  const { resolvedTheme } = useTheme();

  const tableTheme = themeQuartz.withPart(
    resolvedTheme === "dark" ? colorSchemeDarkBlue : colorSchemeLightCold,
  );

  const columnDefs: ColDef<VoteLink>[] = [
    { field: "site", headerName: "Site" },
    {
      field: "link",
      headerName: "Link",
      cellRenderer: (params: { data: VoteLink }) => (
        <Link
          className="flex gap-1 items-baseline"
          onClick={() => window.open(params.data.link, "_blank")}>
          {params.data.link}

          <Icon icon="ph:arrow-square-out-bold" />
        </Link>
      ),
    },
  ];

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      filter: false,
      floatingFilter: false,
    };
  }, []);
  return (
    <div className="h-87 w-full">
      <AgGridReact<VoteLink>
        theme={tableTheme}
        rowData={VOTING_LINKS}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
      />
    </div>
  );
}
