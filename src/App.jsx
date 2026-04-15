import React from "react";
import "./App.css";
import D3PieChart from "./components/D3PieChart";

function App() {
  const data = [
    { label: "A", value: 30 },
    { label: "B", value: 70 },
    { label: "C", value: 45 },
    { label: "D", value: 65 },
  ];
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">D3 Pie Chart</h1>
      <D3PieChart data={data} />
    </div>
  );
}

export default App;
