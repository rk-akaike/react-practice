// @ts-nocheck

import { parseData } from "@/app/demo/charts";

export const getAreaChartConfig = (data, columns, chart_config, data_types) => {
  const parsedData = data.map((item) => {
    const parsedItem = {};
    columns.forEach((column, index) => {
      const dataType = data_types[column];
      parsedItem[column] = parseData(item[column], dataType);
    });
    return parsedItem;
  });

  const config = {
    type: "area",
    data: {
      labels: parsedData.map((d) => d[columns[0]]),
      datasets: [
        {
          label: columns[1],
          data: parsedData.map((d) => d[columns[1]]),
          fill: true,
          borderColor: chart_config.borderColor,
          backgroundColor: chart_config.backgroundColor,
          borderWidth: chart_config.borderWidth,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: columns[0],
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: columns[1],
          },
        },
      },
    },
  };
  return config;
};
