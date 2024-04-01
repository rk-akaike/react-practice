import barChart from "@/app/data/bar.json";
import lineChart from "@/app/data/line.json";
import pieChart from "@/app/data/pie.json";

export const charts = [
  { id: "barChart", data: barChart },
  { id: "lineChart", data: lineChart },
  { id: "pieChart", data: pieChart },
];

export const cols = 3;
export const rowHeight = 200;
export const compactType = "horizontal";
export const resizeHandles = ["s", "w", "e", "n", "sw", "nw", "se", "ne"];
