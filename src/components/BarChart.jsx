// src/components/BarChart.jsx
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; // Required for Chart.js v3+

const BarChart = ({ title, data }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-medium mb-4">{title}</h3>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;