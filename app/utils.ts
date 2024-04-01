import { charts, cols, resizeHandles } from "@/app/constants";

export const generateLayout = () => {
  if (typeof window !== "undefined") {
    const savedLayout = localStorage.getItem("layout");

    if (savedLayout) {
      return JSON.parse(savedLayout);
    }
  }

  return charts.map((_, index) => {
    return {
      x: index % cols,
      y: Math.floor(index / cols) * 2,
      w: 1,
      h: 2,
      i: index.toString(),
      resizeHandles: resizeHandles,
    };
  });
};
