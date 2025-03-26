// src/components/KpiCard.jsx
import React from "react";

const KpiCard = ({ title, value, trend }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-bold mt-2">{value}</p>
      <p className={`mt-2 ${trend.includes("↑") ? "text-green-500" : trend.includes("↓") ? "text-red-500" : "text-gray-500"}`}>
        {trend}
      </p>
    </div>
  );
};

export default KpiCard;