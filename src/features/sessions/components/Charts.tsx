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

  console.log("resolvedTheme :>> ", resolvedTheme);

  const chartsData: ChartData[] = records.map((record) => ({
    id: record.id,
    ...Object.fromEntries(
      RESOURCES.map((resource) => [
        `${resource}PerMinute`,
        Number((record.net[resource] ?? 0 / record.timeMinutes).toFixed(2)),
      ]),
    ),
  }));

  return (
    <Card>
      <Card.Header>
        <Card.Title>Charts</Card.Title>
      </Card.Header>
      <Card.Content>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {RESOURCES.map((resource) => (
            <AgCharts
              key={resource}
              options={createResourceChart(resource, chartsData, chartTheme)}
            />
          ))}
        </div>
      </Card.Content>
    </Card>
  );
}
