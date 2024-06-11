// @ts-nocheck
export const getPieChartConfig = (data, columns, chart_config, data_types) => {
  const config = {
    chart: {
      type: "pie",
    },
    title: {
      text: chart_config.heading,
      align: "left",
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: [
      {
        name: chart_config.x_axis,
        colorByPoint: true,
        data: data.map((item) => ({
          name: item[columns.indexOf(chart_config.x_axis)],
          y: item[columns.indexOf(chart_config.y_axis)],
        })),
      },
    ],
  };

  return config;
};
