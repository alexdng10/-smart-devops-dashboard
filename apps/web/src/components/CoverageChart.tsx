"use client";

import { Bar } from "react-chartjs-2";
import "../lib/charts";
import { Metric } from "../lib/types";

interface Props {
  data: Metric[];
}

export default function CoverageChart({ data }: Props) {
  const chartData = {
    labels: data.map((m) => m.build_id),
    datasets: [
      {
        label: "Coverage (%)",
        data: data.map((m) => m.coverage),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: "Build ID",
        },
      },
      y: {
        title: {
          display: true,
          text: "Coverage (%)",
        },
      },
    },
  };
  return <Bar data={chartData} options={options} />;
}
