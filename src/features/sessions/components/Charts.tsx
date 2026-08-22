import { Card } from "@heroui/react";
import { useAtomValue } from "jotai";

import { getRecordsAtom } from "../context/records";
import { RESOURCES } from "@data/constants.ts";
import type { ChartData } from "@types";

import { AgCharts } from "ag-charts-react";
import { useTheme } from "next-themes";
import { createResourceChart } from "../utils/chartsFabric";

export default function Charts() {
  const records = useAtomValue(getRecordsAtom);

  const { resolvedTheme } = useTheme();
  const chartTheme: "ag-default" | "ag-default-dark" =
    resolvedTheme === "dark" ? "ag-default-dark" : "ag-default";

  const chartsData: ChartData[] = records.map((record) => ({
    id: record.id,
    ...Object.fromEntries(
      RESOURCES.map((resource) => [
        `${resource}PerMinute`,
        Number((((record.net[resource] ?? 0) / record.time) * 60).toFixed(2)),
      ]),
    ),
  }));

  return (
    <Card>
      <Card.Header>
        <Card.Title className="text-2xl pb-2">Charts</Card.Title>
      </Card.Header>
      <Card.Content>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {RESOURCES.map((resource) => (
            <div className="rounded-lg border border-transparent overflow-clip">
              <AgCharts
                key={resource}
                options={createResourceChart(resource, chartsData, chartTheme)}
              />
            </div>
          ))}
        </div>
      </Card.Content>
    </Card>
  );
}
