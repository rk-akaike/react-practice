"use client";

import React, { useState, ComponentType } from "react";
import ReactDOM from "react-dom";
import "@/app/styles.css";
import "@/app/example-styles.css";
import { Layout as LayoutType } from "react-grid-layout";

interface LayoutProps {
  onLayoutChange?: (layout: LayoutType[]) => void;
  [key: string]: any;
}

const MakeLayout = (LayoutComponent: ComponentType<LayoutProps>) => {
  const ListeningLayout: React.FC<LayoutProps> = (props) => {
    const [layout, setLayout] = useState<LayoutType[]>([]);

    const onLayoutChange = (layout: LayoutType[]) => {
      setLayout(layout);
      if (typeof props.onLayoutChange === "function") {
        props.onLayoutChange(layout);
      }
    };

    return (
      <div className="h-screen w-screen border border-blue-600">
        <LayoutComponent {...props} onLayoutChange={onLayoutChange} />
      </div>
    );
  };

  if (typeof document !== "undefined") {
    const run = () => {
      const contentDiv = document.getElementById("content");
      const gridProps = (window as any).gridProps || {};
      ReactDOM.render(<ListeningLayout {...gridProps} />, contentDiv);
    };
    if (!document.getElementById("content")) {
      document.addEventListener("DOMContentLoaded", run);
    } else {
      run();
    }
  }

  return ListeningLayout;
};

export default MakeLayout;
