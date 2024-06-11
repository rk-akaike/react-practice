// @ts-nocheck

import { getSeries, parseData } from "@/app/demo/charts";

export const getBarChartConfig = (data, columns, chart_config, data_types) => {
  const parsedData = data.map((item) => {
    const parsedItem = {};
    columns.forEach((column, index) => {
      const dataType = data_types[column];
      parsedItem[column] = parseData(item[index], dataType);
    });
    return parsedItem;
  });

  const config = {
    chart: {
      type: "column",
    },
    title: {
      text: chart_config.heading,
      align: "left",
    },
    yAxis: {
      title: {
        text: chart_config.y_axis,
      },
    },
    xAxis: {
      categories: parsedData.map((item) => item[chart_config.x_axis]),
      title: {
        text: chart_config.x_axis,
      },
    },
  };

  return {
    ...config,
    series: getSeries(data, columns, chart_config, data_types),
  };
};
export const getGroupedBarChartConfig = (
  data,
  columns,
  chart_config,
  data_types
) => {
  const parsedData = data.map((item) => {
    const parsedItem = {};
    columns.forEach((column, index) => {
      const dataType = data_types[column];
      parsedItem[column] = parseData(item[index], dataType);
    });
    return parsedItem;
  });

  const config = {
    chart: {
      type: "column",
    },
    title: {
      text: chart_config.heading,
      align: "left",
    },
    yAxis: {
      title: {
        text: chart_config.y_axis,
      },
    },
    xAxis: {
      categories: parsedData.map((item) => item[chart_config.x_axis]),
      title: {
        text: chart_config.x_axis,
      },
    },
    plotOptions: {
      column: {
        stacking: "normal",
      },
    },
  };

  return {
    ...config,
    series: getSeries(data, columns, chart_config, data_types),
  };
};
