"use client";

import React, { FC, useState } from "react";
import _ from "lodash";
import RGL, { WidthProvider, Layout } from "react-grid-layout";

import barChart from "@/app/data/bar.json";
import lineChart from "@/app/data/line.json";
import pieChart from "@/app/data/pie.json";

import MakeLayout from "@/app/resizable";

import Chart from "@/app/components/Chart";

const ReactGridLayout = WidthProvider(RGL);

interface ResizableHandlesProps {
  className?: string;
  items?: number;
  rowHeight?: number;
  onLayoutChange?: (layout: Layout[]) => void;
  cols?: number;
  y?: number;
}

type ResizeHanlde = "s" | "w" | "e" | "n" | "sw" | "nw" | "se" | "ne";

const ResizableHandles: FC<ResizableHandlesProps> = (props) => {
  const className = "layout",
    rowHeight = 200,
    cols = 3;

  const charts = [barChart, lineChart, pieChart];

  const generateLayout = () => {
    const availableHandles: ResizeHanlde[] = [
      "s",
      "w",
      "e",
      "n",
      "sw",
      "nw",
      "se",
      "ne",
    ];

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

  const [layout, setLayout] = useState<Layout[]>(generateLayout());

  return (
    <ReactGridLayout
      layout={layout}
      className={className + " w-full h-full"}
      rowHeight={rowHeight}
      cols={cols}
      compactType="horizontal"
    >
      {layout.map((item, index) => (
        <div key={item.i} data-grid={item} className="border">
          <Chart options={charts[index]} />
        </div>
      ))}
    </ReactGridLayout>
  );
};

export default MakeLayout(ResizableHandles);
