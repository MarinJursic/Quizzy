import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const getTime = (val) => {
  switch (val) {
    case 0:
      return "12pm";
    case 1:
      return "5am";
    case 2:
      return "10am";
    case 3:
      return "3pm";
    case 4:
      return "8pm";
    case 5:
      return "12pm";
    default:
      return "";
  }
};

export const getDate = (val) => {
  switch (val) {
    case 1:
      return "11/3";
    case 2:
      return "Today";
    default:
      return "";
  }
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      align: "start",

      labels: {
        font: {
          size: 17,
          weight: 500,
        },
        color: "#8358e8",
        usePointStyle: true,
      },
    },
    tooltip: {
      bodyFont: {
        size: 18,
        family: "Dubai Regular",
      },
      displayColors: false,
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
          family: "Dubai Regular",
        },
        color: "#919191",
        padding: 30,
        maxTicksLimit: 8,
        stepSize: 1,

        callback: function (val, index) {
          // Hide the label of every 2nd dataset
          return getTime(val);
        },
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          size: 22,
          weight: 500,
          family: "Dubai Regular",
        },
        color: "#919191",
        padding: 30,

        callback: function (val, index) {
          // Hide the label of every 2nd dataset
          return getDate(val);
        },
      },
    },
  },
};

export const data = {
  datasets: [
    {
      label: "Your Views",
      data: Array.from({ length: 50 }, () => {
        const x = Math.floor(Math.random() * 100) / 100 + 1;

        const b = Math.random() * 0.8 * (Math.round(Math.random()) * 2 - 1);

        const y = Math.max(Math.min(Math.pow(x, 2) + b, 5), 0);

        return {
          x,
          y,
        };
      }),
      backgroundColor: "#8358e8",
      pointRadius: 10,
    },
  ],
};

export function ScatterChart() {
  return <Scatter options={options} data={data} />;
}
