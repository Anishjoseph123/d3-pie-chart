import React from "react";
import * as d3 from "d3";

const D3PieChart = ({ data, width = 300, height = 300 }) => {
  const radius = Math.min(width, height) / 2;

  // Create pie layout
  const pie = d3.pie().value(d => d.value);
  const arcData = pie(data);

  // Arc generator
  const arc = d3.arc()
    .innerRadius(0) // full pie (change for donut)
    .outerRadius(radius);

  // Color scale
  const color = d3.scaleOrdinal(d3.schemeCategory10);

  return (
    <div className="flex justify-center items-center">
      <svg width={width} height={height} className="drop-shadow-lg">
        <g transform={`translate(${width / 2}, ${height / 2})`}>
          {arcData.map((d, i) => (
            <path
              key={i}
              d={arc(d)}
              fill={color(i)}
              className="hover:opacity-80 transition duration-200"
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default D3PieChart;


