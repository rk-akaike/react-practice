"use client";

import { FC, useRef } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Resizable } from "re-resizable";

interface ChartProps {
  options: any;
}

const Chart: FC<ChartProps> = ({ options }) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <Resizable
      className="border border-blue-400"
      enable={{
        right: true,
        left: true,
      }}
    >
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
      />
    </Resizable>
  );
};

export default Chart;
