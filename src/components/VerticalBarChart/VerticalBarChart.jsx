import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import { useLocation } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function VerticalBarChart({ config }) {
  const location = useLocation();

  const getData = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 500, 500);

    gradient.addColorStop(0, config.gradientStart || "#fff");
    gradient.addColorStop(1, config.gradientEnd || "#fff");

    return {
      labels: config.labels || [""],
      datasets: [
        {
          label: "Average Set Views",
          data: config.data || [0],
          backgroundColor: config.gradientStart ? gradient : config.bgColor,
          borderRadius: 10,
          barPercentage: config.barThickness,
          hoverBackgroundColor: config.hoverColor || "",
        },
      ],
    };
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        bodyFont: {
          size: 18,
          family: "Dubai Regular",
        },
        displayColors: false,
        callbacks: {
          label: function (tooltipItem) {
            return (
              tooltipItem.raw +
              (location.pathname === "/dashboard" ? " sessions" : " views")
            );
          },
          title: function () {},
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          lineWidth: 3,
          borderWidth: 0,
        },
        ticks: {
          font: {
            size: 22,
            weight: 600,
            family: "Dubai Regular",
          },
          maxTicksLimit: config.maxTicks || 5,
          color: "#919191",
          padding: 20,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 22,
            weight: 600,
            family: "Dubai Regular",
          },

          color: "#919191",
          padding: 20,
        },
      },
    },
  };

  const canvas = document.createElement("canvas");
  const chartData = getData(canvas);

  return <Bar options={options} data={chartData} />;
}
