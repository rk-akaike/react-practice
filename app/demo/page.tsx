// @ts-nocheck
"use client";

import { FC } from "react";
import Highcharts from "highcharts";

import Chart from "@/app/components/Chart";
import { createHighChartConfig } from "@/app/demo/charts";

const barChartData = {
  data: [
    ["Afghanistan", 4702],
    ["Albania", 2184],
    ["Algeria", 1058],
    ["Algérie ⵍⵣⵣⴰⵢⴻⵔ", 50],
    ["Andorra", 88],
  ],
  columns: ["Country", "AQI Value"],
  data_types: ["Text", "int"],
  chart_config: {
    x_axis: "Country",
    y_axis: "AQI Value",
    heading: "Varying AQI Values and Categories Across Different Countries",
    group_by: "",
    chart_type: "bar",
  },
};

const multiLineChartData = {
  data: [
    ["2018-01-01T00:00:00", "Female", 170714.0],
    ["2018-02-01T00:00:00", "Female", 146271.0],
    ["2018-03-01T00:00:00", "Female", 188905.0],
    ["2018-04-01T00:00:00", "Female", 264503.0],
    ["2018-05-01T00:00:00", "Female", 369700.0],
    ["2018-06-01T00:00:00", "Female", 284272.0],
    ["2018-07-01T00:00:00", "Female", 364821.0],
    ["2018-08-01T00:00:00", "Female", 300591.0],
    ["2018-09-01T00:00:00", "Female", 344350.0],
    ["2018-10-01T00:00:00", "Female", 335424.0],
    ["2018-11-01T00:00:00", "Female", 397525.0],
    ["2018-12-01T00:00:00", "Female", 337417.0],
    ["2018-01-01T00:00:00", "Male", 208913.0],
    ["2018-02-01T00:00:00", "Male", 186224.0],
    ["2018-03-01T00:00:00", "Male", 246597.0],
    ["2018-04-01T00:00:00", "Male", 332809.0],
    ["2018-05-01T00:00:00", "Male", 454802.0],
    ["2018-06-01T00:00:00", "Male", 358283.0],
    ["2018-07-01T00:00:00", "Male", 445384.0],
    ["2018-08-01T00:00:00", "Male", 363904.0],
    ["2018-09-01T00:00:00", "Male", 393953.0],
    ["2018-10-01T00:00:00", "Male", 407963.0],
    ["2018-11-01T00:00:00", "Male", 480356.0],
    ["2018-12-01T00:00:00", "Male", 429730.0],
  ],
  columns: ["Order_Date", "Gender", "Sales"],
  data_types: ["date", "text", "float"],
  chart_config: {
    x_axis: "Order_Date",
    y_axis: "Sales",
    heading: "Total Monthly Sales Trend Across Gender",
    group_by: "Gender",
    chart_type: "multiline",
  },
};

const lineChartData = {
  data: [
    ["1978-01-01", 53],
    ["1979-01-01", 59],
    ["1980-01-01", 253],
    ["1981-01-01", 302],
    ["1982-01-01", 300],
  ],
  columns: ["ApprovalDate", "LoanNr_ChkDgt"],
  data_types: ["date", "int"],
  chart_config: {
    x_axis: "ApprovalDate",
    y_axis: "LoanNr_ChkDgt",
    binning: "yearly",
    heading: "Yearly Loan Approval Trend",
    group_by: "",
    chart_type: "line",
  },
};

const groupedBarChartData = {
  data: [
    ["Auto & Accessories", "Female", 152877.8],
    ["Auto & Accessories", "Male", 331435.4],
    ["Electronic", "Female", 94930.5],
    ["Electronic", "Male", 79260.1],
    ["Fashion", "Female", 916936.5],
    ["Fashion", "Male", 1155687.4],
    ["Home & Furniture", "Female", 455660.1],
    ["Home & Furniture", "Male", 424398.8],
  ],
  columns: ["Product_Category", "Gender", "Profit"],
  data_types: ["text", "text", "float"],
  chart_config: {
    x_axis: "Product_Category",
    y_axis: "Profit",
    heading: "Total Profits for Each Product Type Split by Gender",
    group_by: "Gender",
    chart_type: "grouped_bar",
  },
};

const pieChartData = {
  data: [
    ["Female", 3504493.0],
    ["Male", 4308918.0],
  ],
  columns: ["Gender", "Sales"],
  data_types: ["text", "float"],
  // series: [
  //   {
  //     name: "gender",
  //     data: [
  //       { name: "Male", y: 4308918 },
  //       { name: "Female", y: 3504493.0 },
  //     ],
  //   },
  // ],
  chart_config: {
    x_axis: "Gender",
    y_axis: "Sales",
    heading: "Total Sales Across Gender",
    group_by: "",
    chart_type: "pie",
  },
};

const Demo: FC = () => {
  const formattedBarChartData: Highcharts.Options =
    createHighChartConfig(barChartData) || {};

  const formattedMultiLineData: Highcharts.Options =
    createHighChartConfig(multiLineChartData) || {};

  const formattedLineChartData: Highcharts.Options =
    createHighChartConfig(lineChartData) || {};

  const formattedGroupedBarChartData: Highcharts.Options =
    createHighChartConfig(groupedBarChartData) || {};
  console.log(
    "🚀 ~ formattedGroupedBarChartData:",
    formattedGroupedBarChartData
  );

  const formattedPieChartData: Highcharts.Options =
    createHighChartConfig(pieChartData) || {};

  return (
    <div className="m-40">
      <h2>Bar Chart</h2>
      <div className="border border-red-600 m-20">
        <Chart options={formattedBarChartData} />
      </div>
      <h2>Multi Line Chart</h2>
      <div className="border border-red-600 m-20">
        <Chart options={formattedMultiLineData} />
      </div>
      <h2>Line Chart</h2>
      <div className="border border-red-600 m-20">
        <Chart options={formattedLineChartData} />
      </div>
      <h2>Grouped Bar Chart</h2>
      <div className="border border-red-600 m-20">
        <Chart options={formattedGroupedBarChartData} />
      </div>
      <h2>Pie Chart</h2>
      <div className="border border-red-600 m-20">
        <Chart options={formattedPieChartData} />
      </div>
    </div>
  );
};

export default Demo;
