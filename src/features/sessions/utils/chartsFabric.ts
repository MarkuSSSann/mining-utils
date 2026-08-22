import type { AgChartOptions, AgChartThemeName } from "ag-charts-community";
import type { ChartData, Resource } from "@types";
import { divideAndCapitalize } from "@utils/text";
import { formatCompactNumber } from "@utils/numbers";

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

    axes: {
      x: {
        type: "category",
      },

      y: {
        type: "number",
        label: {
          formatter: ({ value }) => formatCompactNumber(value),
        },
      },
    },

    series: [
      {
        type: "bar",
        xKey: "id",
        yKey: dataKey,
      },
    ],
  };
}
