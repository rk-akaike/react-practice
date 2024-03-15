"use client";

import React, { useState } from "react";
import ReactDOM from "react-dom";
import "@/app/styles.css";
import "@/app/example-styles.css";

export default function makeLayout(Layout) {
  const ListeningLayout = (props) => {
    const [layout, setLayout] = useState([]);

    const onLayoutChange = (layout) => {
      setLayout(layout);
    };

    return (
      
        <div className="h-screen w-screen border border-blue-600">
          <Layout onLayoutChange={onLayoutChange} {...props} />
        </div>
      
    );
  };

  function run() {
    const contentDiv = document.getElementById("content");
    const gridProps = window.gridProps || {};
    ReactDOM.render(
      React.createElement(ListeningLayout, gridProps),
      contentDiv
    );
  }
  if (!document.getElementById("content")) {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }

  return ListeningLayout;
}
