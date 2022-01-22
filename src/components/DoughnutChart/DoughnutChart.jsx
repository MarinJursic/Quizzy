import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

function DoughnutChart({ config }) {
  const plugins = [
    {
      beforeDraw: function (chart) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        var fontSize = (height / 160).toFixed(2);
        ctx.font = fontSize * 1.25 + "em Dubai, sans-serif";
        ctx.textBaseline = "top";
        var text = config.textInside || "",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / config.divider;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];

  const options = {
    rotation: config.rotate || 0,
    responsive: true,
    cutout: 105,
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
          padding: 20,

          filter: function (item, chart) {
            // Logic to remove a particular legend item goes here
            return !item.text.includes("NaN");
          },
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
            if (tooltipItem.label === "NaN") return "";

            const dataSum = config.data.reduce((a, b) => a + b);

            const masteryPercentage =
              config.data[config.labels.indexOf("Mastery Progress")] / dataSum;

            return config.mastery
              ? `You've mastered ${Math.round(
                  masteryPercentage * 100
                )}% of this set`
              : `${tooltipItem.label} (${tooltipItem.raw}m)`;
          },
        },
      },
    },
  };

  const data = {
    labels: config.labels || ["NaN"],
    datasets: [
      {
        data: config.data || [50, 50],
        backgroundColor: config.bgColor || ["red", "black"],
        borderWidth: 0,
        borderDash: [],
        borderStyle: "dash",
        line: { borderWidth: 0 },
      },
    ],
  };

  return (
    <Doughnut
      data={data}
      width={config.width || 350}
      height={config.height || 350}
      options={options}
      plugins={plugins}
    />
  );
}

export default DoughnutChart;
