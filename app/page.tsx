"use client";

import React, { FC, useEffect, useRef, useState, useCallback } from "react";
import _ from "lodash";
import RGL, { Layout, WidthProvider } from "react-grid-layout";
import { createPortal } from "react-dom";

import { charts, cols, rowHeight } from "@/app/constants";
import { generateLayout } from "@/app/utils";

import Chart from "@/app/components/Chart";
import Modal from "./components/Modal";

const ReactGridLayout = WidthProvider(RGL);

const Page: FC = () => {
  const [layout, setLayout] = useState([] as Layout[]);
  const [showModal, setShowModal] = useState(false);
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

  const toggleModal = () => setShowModal((prev) => !prev);

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
          <button onClick={toggleModal}>toggle modal</button>
          {createPortal(
            <Modal isOpen={showModal} onClose={toggleModal}>
              <div className="flex flex-col p-6 w-[400px] h-[400px] bg-red-400">
                <div className="pt-4 flex flex-col gap-1">
                  <p className="text-lg-semibold text-text-primary-light">
                    Remove metric
                  </p>
                  <p className="text-sm-regular text-text-tertiary-light">
                    Are you sure you want to delete this metric? This action
                    cannot be undone.
                  </p>
                </div>
              </div>
            </Modal>,
            document.getElementById("modal-root")!
          )}
        </div>
      ))}
    </ReactGridLayout>
  );
};

export default Page;
