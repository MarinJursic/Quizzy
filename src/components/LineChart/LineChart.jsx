/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import "./LineChart.scss";
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";

function LineChart({ width, height }) {
  const data = {
    labels: [
      "",
      "07 am",
      "",
      "08 am",
      "",
      "09 am",
      "",
      "10 am",
      "",
      "11 am",
      "",
      "12 am",
      "",
      "1 pm",
    ],
    datasets: [
      {
        label: "Accounting Flashcards",
        data: [0, 0, 0, 60, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        fill: false,
        borderColor: "#8358E8",
        backgroundColor: "#8358E8",
        lineTension: 0,
        stepped: true,
        pointRadius: 0,
      },
      {
        label: "CALC101",
        data: [0, 0, 0, 0, 0, 0, 0, 30, 0, 30, 0, 0, 0, 0],
        fill: false,
        borderColor: "#E85871",
        backgroundColor: "#E85871",
        lineTension: 0,
        stepped: true,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        align: "start",
        labels: {
          font: {
            size: 18,
            weight: 700,
          },
          usePointStyle: true,
        },
      },
      tooltip: {
        bodyFont: {
          size: 18,
          family: "Dubai Regular",
        },
        displayColors: false,

        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw} mins`;
          },
          title: function () {},
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
            weight: 500,
            family: "Dubai Regular",
          },
          color: "#919191",
          padding: 15,

          callback: function (val, index) {
            // Hide the label of every 2nd dataset
            return val + "m";
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
            family: "Dubai Regular",
          },
          padding: 15,
          color: "#919191",
        },
      },
    },
  };

  return (
    <Line data={data} width={width} height={height} options={options}></Line>
  );
}

export default LineChart;
