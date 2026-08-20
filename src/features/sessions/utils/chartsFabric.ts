import type { AgChartOptions, AgChartThemeName } from "ag-charts-community";
import type { ChartData, Resource } from "@types";
import { divideAndCapitalize } from "@utils/text";

export function createResourceChart(
  resource: Resource,
  data: ChartData[],
  theme: AgChartThemeName,
): AgChartOptions {
  const dataKey = `${resource}PerMinute`;
  const label = divideAndCapitalize(resource);

  return {
    theme,
    title: { text: `${label} per minute` },
    data,
    series: [
      {
        type: "bar",
        xKey: "id",
        yKey: dataKey,
      },
    ],
  };
}
