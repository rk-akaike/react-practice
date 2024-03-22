"use client";

import { forwardRef } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface ChartProps {
  options: any;
  className?: string;
}

const Chart = forwardRef<HighchartsReact.RefObject, ChartProps>(
  ({ options, className }, ref) => (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={ref}
      className={className + "m-6 border border-red-600"}
    />
  )
);

export default Chart;
