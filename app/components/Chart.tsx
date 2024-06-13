import { FC, useEffect, useState } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface ChartProps {
  options: Highcharts.Options;
}

const Chart: FC<ChartProps> = ({ options }) => {
  const [reload, setReload] = useState<boolean>(false);

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

  useEffect(() => {
    setReload(!reload);
  }, [options]);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={mergedOptions}
      containerProps={{ className: "h-full" }}
    />
  );
};

export default Chart;
