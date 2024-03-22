"use client";

import React, { FC, useRef, useState } from "react";
import _ from "lodash";
import RGL, {
  WidthProvider,
  Layout,
  ReactGridLayoutProps as LayoutProps,
} from "react-grid-layout";
import { HighchartsReactRefObject } from "highcharts-react-official";

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
  const {
    className = "layout",
    items = 20,
    rowHeight = 200,
    onLayoutChange = () => {},
    cols = 2,
  } = props;
  const chartComponentRef = useRef<HighchartsReactRefObject | null>(null);

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

  const chartComponentRefs = layout.map(() =>
    useRef<HighchartsReactRefObject | null>(null)
  );

  return (
    <ReactGridLayout
      layout={layout}
      onLayoutChange={(layout) => {
        setLayout(layout);
        onLayoutChange(layout);
      }}
      onResizeStop={() => {
        chartComponentRefs.forEach((ref) => {
          if (ref.current && ref.current.chart) {
            ref.current.chart.reflow();
          }
        });
      }}
      className={className + " w-full h-full"}
      rowHeight={rowHeight}
      cols={cols}
      compactType="horizontal"
    >
      {layout.map((item, index) => (
        <div key={item.i} data-grid={item} className="border border-red-600">
          <Chart
            ref={chartComponentRefs[index]}
            options={charts[index]}
            className="h-full"
          />
        </div>
      ))}
    </ReactGridLayout>
  );
};

const ResizableHandlesWithLayout: FC<ResizableHandlesProps> = (props) => {
  const { onLayoutChange } = props;

  const handleLayoutChange = (layout: Layout[]) => {
    const convertedLayout: Layout[] = layout.map((item: any) => ({
      ...item,
      i: item.i.toString(),
    }));
    if (onLayoutChange) {
      onLayoutChange(convertedLayout);
    }
  };

  return <ResizableHandles {...props} onLayoutChange={handleLayoutChange} />;
};

export default MakeLayout(
  ResizableHandlesWithLayout as React.ComponentType<LayoutProps>
);
