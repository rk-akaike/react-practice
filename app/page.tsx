"use client";

import { FC, useEffect } from "react";
import Plotly from "plotly.js-basic-dist";
import PlotlyConfig from "./data.json";

interface PlotProps {
  data: Plotly.Data[];
  layout: Plotly.Layout;
}

const Plot: FC<PlotProps> = () => {
  useEffect(() => {
    PlotlyConfig.forEach((config, index) => {
      const dataCopy = JSON.parse(JSON.stringify(config.data));
      const layoutCopy = JSON.parse(JSON.stringify(config.layout));
      Plotly.newPlot(`plot${index}`, dataCopy, layoutCopy, {
        autosizable: true,
        responsive: true,
      });
    });
  }, []);

  return (
    <div className="flex flex-wrap">
      {PlotlyConfig.map((_, index) => (
        <div
          id={`plot${index}`}
          className="border border-red-600 h-[300px] w-[45%] m-4"
          key={index}
        />
      ))}
    </div>
  );
};

export default Plot;
