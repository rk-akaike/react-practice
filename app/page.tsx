"use client";

import React, { FC, useEffect, useRef, useState, useCallback } from "react";
import _ from "lodash";
import RGL, { Layout, WidthProvider } from "react-grid-layout";

import { charts, cols, rowHeight } from "@/app/constants";
import { generateLayout } from "@/app/utils";

import Chart from "@/app/components/Chart";

const ReactGridLayout = WidthProvider(RGL);

const Page: FC = () => {
  const [layout, setLayout] = useState([] as Layout[]);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLayout(generateLayout());
  }, []);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      setLayout(() => [...layout]);
    });

    if (chartRef.current) {
      resizeObserver.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        resizeObserver.unobserve(chartRef.current);
      }
    };
  }, [chartRef.current]);

  const onLayoutChange = useCallback((newLayout: Layout[]) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("layout", JSON.stringify(newLayout));
    }
  }, []);

  return (
    <ReactGridLayout
      layout={layout}
      className="layout w-full h-full"
      rowHeight={rowHeight}
      cols={cols}
      onLayoutChange={onLayoutChange}
      draggableHandle=".draggable-handle"
    >
      {layout.map((item: Layout, index: number) => (
        <div
          key={item.i}
          data-grid={item}
          ref={chartRef}
          className="border border-green-600 flex flex-col"
        >
          <div className="draggable-handle border border-blue-600 text-center cursor-pointer">
            click here to drag
          </div>
          <div className="border border-red-600  h-full">
            <Chart
              options={charts[index].data as unknown as Highcharts.Options}
            />
          </div>
          <div className="draggable-handle border border-blue-600 text-center cursor-pointer">
            click here to drag
          </div>
        </div>
      ))}
    </ReactGridLayout>
  );
};

export default Page;
