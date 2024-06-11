// @ts-nocheck

import {
  getBarChartConfig,
  getGroupedBarChartConfig,
} from "@/app/demo/charts/column";
import {
  getLineChartConfig,
  getMultiLineChartConfig,
} from "@/app/demo/charts/line";
import { getPieChartConfig } from "@/app/demo/charts/pie";
import { getAreaChartConfig } from "@/app/demo/charts/area";

export const createHighChartConfig = (generatedData) => {
  const { data, columns, chart_config, data_types } = generatedData;

  const chartType = chart_config.chart_type;

  switch (chartType) {
    case "bar":
      return getBarChartConfig(data, columns, chart_config, data_types);

    case "grouped_bar":
      return getGroupedBarChartConfig(data, columns, chart_config, data_types);

    case "line":
      return getLineChartConfig(data, columns, chart_config, data_types);

    case "multiline":
      return getMultiLineChartConfig(data, columns, chart_config, data_types);

    case "pie":
      return getPieChartConfig(data, columns, chart_config, data_types);

    case "area":
    case "stacked_area":
      return getAreaChartConfig(data, columns, chart_config, data_types);
  }
};

export const getSeries = (data, columns, chart_config, data_types) => {
  let series = {};

  if (chart_config.group_by) {
    const groupByColumnIndex = columns.indexOf(chart_config.group_by);
    const groupByValues = Array.from(
      new Set(data.map((item) => item[groupByColumnIndex]))
    );

    series = groupByValues.map((value) => {
      const filteredData = data.filter(
        (item) => item[groupByColumnIndex] === value
      );

      const yAxisData = filteredData.map((item) =>
        parseData(
          item[columns.indexOf(chart_config.y_axis)],
          data_types[columns.indexOf(chart_config.y_axis)]
        )
      );

      return {
        name: value,
        data: yAxisData,
      };
    });
  } else {
    const yAxisIndex = columns.indexOf(chart_config.y_axis);

    const yAxisData = data.map((item) =>
      parseData(item[yAxisIndex], data_types[yAxisIndex])
    );

    series = {
      name: chart_config.y_axis,
      data: yAxisData,
    };
  }

  return series;
};

export const parseData = (value, type) => {
  switch (type) {
    case "date":
      const originalDate = new Date(value);
      const newDate = originalDate.toISOString().split("T")[0];
      return newDate;
    case "int":
      return parseInt(value);
    case "float":
      return parseFloat(value);
    case "text":
      return value.toString();
    default:
      return value;
  }
};
