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
import "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function HorizontalBarChart() {
  const data = {
    labels: [""],
    datasets: [
      {
        label: "Flashcards",
        data: [24],
        borderColor: "rgba(0, 0, 0, 0)",
        backgroundColor: "#8358e8",
        hoverBackgroundColor: "#6C3ADF",
        borderRadius: 100,
        barPercentage: 0.7,
      },
      {
        label: "Recall",
        data: [12],
        borderColor: "rgba(0, 0, 0, 0)",
        backgroundColor: "#e85871",
        hoverBackgroundColor: "#CF1938",
        borderRadius: 100,
        barPercentage: 0.7,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
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
      },
      datalabels: {
        display: true,
        color: "black",
        align: "end",
        anchor: "end",
        font: { size: "14" },
      },
    },

    scales: {
      y: {
        grid: {
          lineWidth: 0,
          borderWidth: 1,
          borderColor: "#707070",
        },
        ticks: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
          borderWidth: 0,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  return <Bar options={options} data={data} height={30} />;
}
