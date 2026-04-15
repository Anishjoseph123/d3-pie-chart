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


// import React, { useRef, useEffect } from "react";
// import * as d3 from "d3";

// const DonutChart = ({ data, width = 350, height = 350 }) => {
//   const ref = useRef();

//   useEffect(() => {
//     const svg = d3.select(ref.current);
//     svg.selectAll("*").remove(); // clear previous render

//     const radius = Math.min(width, height) / 2;

//     const g = svg
//       .attr("width", width)
//       .attr("height", height)
//       .append("g")
//       .attr("transform", `translate(${width / 2}, ${height / 2})`);

//     // Tooltip
//     const tooltip = d3
//       .select("body")
//       .append("div")
//       .attr(
//         "class",
//         "absolute bg-black text-white text-sm px-3 py-1 rounded shadow-lg pointer-events-none opacity-0"
//       );

//     // Pie layout
//     const pie = d3.pie().value((d) => d.value);

//     const arcData = pie(data);

//     // Arc generator (DONUT)
//     const arc = d3
//       .arc()
//       .innerRadius(radius * 0.5) // donut hole
//       .outerRadius(radius - 10);

//     const color = d3.scaleOrdinal(d3.schemeTableau10);

//     // DRAW PATHS
//     const paths = g
//       .selectAll("path")
//       .data(arcData)
//       .enter()
//       .append("path")
//       .attr("fill", (_, i) => color(i))
//       .attr("stroke", "#fff")
//       .attr("stroke-width", 2)
//       .on("mouseover", (event, d) => {
//         tooltip
//           .style("opacity", 1)
//           .html(`${d.data.label}: ${d.data.value}`);
//       })
//       .on("mousemove", (event) => {
//         tooltip
//           .style("top", event.pageY - 40 + "px")
//           .style("left", event.pageX + 10 + "px");
//       })
//       .on("mouseout", () => {
//         tooltip.style("opacity", 0);
//       });

//     // ANIMATION
//     paths
//       .transition()
//       .duration(1000)
//       .attrTween("d", function (d) {
//         const interpolate = d3.interpolate(
//           { startAngle: 0, endAngle: 0 },
//           d
//         );
//         return function (t) {
//           return arc(interpolate(t));
//         };
//       });

//     // LABELS (centroid)
//     g.selectAll("text")
//       .data(arcData)
//       .enter()
//       .append("text")
//       .text((d) => d.data.label)
//       .attr("transform", (d) => `translate(${arc.centroid(d)})`)
//       .style("text-anchor", "middle")
//       .style("font-size", "12px")
//       .style("fill", "white");

//   }, [data, width, height]);

//   return (
//     <div className="flex justify-center items-center">
//       <svg ref={ref}></svg>
//     </div>
//   );
// };

// export default DonutChart;

// import React from "react";
// import DonutChart from "./DonutChart";

// const App = () => {
//   const data = [
//     { label: "React", value: 40 },
//     { label: "Angular", value: 25 },
//     { label: "Vue", value: 20 },
//     { label: "Svelte", value: 15 },
//   ];

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <h1 className="text-2xl font-bold mb-6">Donut Chart with D3</h1>
//       <DonutChart data={data} />
//     </div>
//   );
// };

// export default App;