"use client";

import { FC } from "react";
import PlotlyConfig from "./data.json";
import dynamic from "next/dynamic";

const Plot = dynamic(() => import("react-plotly.js"), {
  ssr: false,
  loading: () => <>Loading...</>,
});

interface PlotProps {
  data: Plotly.Data[];
  layout: Plotly.Layout;
}

const PlotGraph: FC = () => {
  return (
    <div className="flex flex-wrap">
      {PlotlyConfig.map((config, index) => (
        // @ts-ignore
        <Plot data={config.data} layout={config.layout} key={index} />
      ))}
    </div>
  );
};

export default PlotGraph;
