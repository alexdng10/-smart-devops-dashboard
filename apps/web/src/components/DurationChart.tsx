"use client";

import { Line } from "react-chartjs-2";
import "../lib/charts";
import { Metric } from "../lib/types";

interface Props {
  data: Metric[];
}

export default function DurationChart({ data }: Props) {
  const chartData = {
    labels: data.map((m) => m.build_id),
    datasets: [
      {
        label: "Duration (seconds)",
        data: data.map((m) => m.duration_seconds),
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
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
          text: "Duration (seconds)",
        },
      },
    },
  };
  return <Line data={chartData} options={options} />;
}
