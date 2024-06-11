import { FC } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface ChartProps {
  options: Highcharts.Options;
}

const Chart: FC<ChartProps> = ({ options }) => {
  const mergedOptions = {
    ...options,
    title: {
      text: null,
    },
    credits: {
      ...options.credits,
      enabled: false,
    },
  };
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={mergedOptions}
      containerProps={{ className: "h-full" }}
    />
  );
};

export default Chart;
