import * as React from "react";
import { PlotData, Layout } from "plotly.js";
import Plot from "react-plotly.js";
import FrappeChart from "./FrappeChart";

const PlotlyChart: React.FC = () => {
  let trace1: Partial<PlotData> = {
    type: "bar",
    x: [1, 2, 3, 4],
    y: [5, 10, 2, 8],
    marker: {
      color: "#C8A2C8",
      line: {
        width: 2.5,
      },
    },
  };

  var data: Partial<PlotData>[] = [trace1];

  const layout: Partial<Layout> = {
    title: "Sample Chart",
    font: { size: 18 },
    showlegend: false,
  };

  return (
    <div>
      <Plot data={data} layout={layout} />
      <FrappeChart />
    </div>
  );
};

export default PlotlyChart;
