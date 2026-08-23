import { VOTING_LINKS } from "@data/config";
import { Link, useTheme } from "@heroui/react";
import { Icon } from "@iconify/react";
import type { VoteLink } from "@types";
import { MILLISECONDS_IN_MINUTE } from "@data/constants";
import { formatElapsed } from "@utils/numbers";
import {
  themeQuartz,
  colorSchemeDarkBlue,
  colorSchemeLightCold,
  type ColDef,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useEffect, useMemo, useState } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { markLinksOpenedAtom, getLastOpenedAtom } from "../context/lastOpened";

export default function VoteTable() {
  const { resolvedTheme } = useTheme();
  const markLinksOpened = useSetAtom(markLinksOpenedAtom);
  const lastOpened = useAtomValue(getLastOpenedAtom);

  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const intervalId = window.setInterval(
      () => setNow(Date.now()),
      MILLISECONDS_IN_MINUTE,
    );
    return () => window.clearInterval(intervalId);
  }, []);

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
          onClick={() => {
            window.open(params.data.link, "_blank", "noopener,noreferrer");
            markLinksOpened({ links: [params.data.link] });
          }}>
          {params.data.link}

          <Icon icon="ph:arrow-square-out-bold" />
        </Link>
      ),
    },
    {
      headerName: "Last opened",
      valueGetter: ({ data }) => data && lastOpened[data.link],
      cellRenderer: (params: { data: VoteLink }) => {
        const timestamp = lastOpened[params.data.link];
        if (!timestamp) return "Never";

        return (
          <div className="flex flex-row">
            <span>{new Date(timestamp).toLocaleString()}</span>
            <span
              className={`text-xs ${
                now - timestamp >= 24 * 60 * MILLISECONDS_IN_MINUTE ?
                  "text-success"
                : "text-muted"
              }`}>
              {formatElapsed(timestamp, now)}
            </span>
          </div>
        );
      },
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
