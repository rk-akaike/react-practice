"use client";

import { FC, useState } from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";

import barChart from "@/app/data/bar.json";
import lineChart from "@/app/data/line.json";
import pieChart from "@/app/data/pie.json";

import makeLayout from "./test-hook";

import Chart from "./components/Chart";

const ReactGridLayout = WidthProvider(RGL);
interface ResizableHandlesProps {
  className?: string;
  items?: number;
  rowHeight?: number;
  onLayoutChange?: (layout: any) => void;
  cols?: number;
  y?: number;
}

const ResizableHandles: FC<ResizableHandlesProps> = (props) => {
  const {
    className = "layout",
    items = 20,
    rowHeight = 200,
    onLayoutChange = () => {},
    cols = 2,
  } = props;

  const charts = [barChart, lineChart, pieChart];

  const generateLayout = () => {
    const availableHandles = ["s", "w", "e", "n"];

    return charts.map((chart, index) => {
      return {
        x: index % cols,
        y: Math.floor(index / cols) * 2,
        w: 1,
        h: 2,
        i: index.toString(),
        resizeHandles: availableHandles,
      };
    });
  };

  const [layout, setLayout] = useState(generateLayout());

  return (
    <ReactGridLayout
      layout={layout}
      onLayoutChange={(layout) => {
        setLayout(layout);
        onLayoutChange(layout);
      }}
      className={className + " w-full h-full"}
      rowHeight={rowHeight}
      cols={cols}
    >
      {layout.map((item, index) => (
        <div key={item.i} data-grid={item} className="border border-red-600">
          <Chart options={charts[index]} />
        </div>
      ))}
    </ReactGridLayout>
  );
};

export default makeLayout(ResizableHandles);
