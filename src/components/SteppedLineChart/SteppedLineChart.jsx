import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      align: "start",

      labels: {
        font: {
          size: 16,
          weight: 600,
          family: "Segoe UI Regular",
        },
        usePointStyle: true,

        filter: function (item, chart) {
          return !item.text.includes("NaN");
        },
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(112, 112, 112, 0.24)",
        lineWidth: 3,
        borderWidth: 0,
      },
      ticks: {
        font: {
          size: 18,
          weight: 600,
          family: "Segoe UI Regular",
        },
        maxTicksLimit: 8,
        stepSize: 25,
        color: "#919191",
        padding: 30,

        callback: function (val, index) {
          // Hide the label of every 2nd dataset
          return val + "%";
        },
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          size: 18,
          weight: 600,
          family: "Segoe UI Regular",
        },
        color: "#919191",
        padding: 20,
      },
    },
  },
};

export function SteppedLineChart({ config }) {
  const getData = () => {
    return {
      labels: config.labels,
      datasets: [
        {
          label: config.fillTitle || "NaN",
          data: config.fillData || [],
          backgroundColor: "#8358E8",
          borderColor: "#8358E8",
          borderWidth: 5,
          tension: 0.4,
          radius: 4,
        },
        {
          label: config.dashTitle || "",
          data: config.dashData || [],
          backgroundColor: "rgba(112, 112, 112, 0.4)",
          borderColor: "rgba(112, 112, 112, 0.4)",
          borderDash: [20, 20],
          tension: 0.4,
          radius: 0,
        },
      ],
    };
  };

  const data = getData();

  return <Line options={options} data={data} height={80} />;
}
