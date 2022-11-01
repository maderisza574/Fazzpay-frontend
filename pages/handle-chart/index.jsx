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
export default function HandleChart(props) {
  console.log(props.data);
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      //   legend: {
      //     position: 'top' as const,
      //   },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Income",
        data: props.data.listIncome?.map((item) => item.total),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Expense",
        data: props.data.listExpense?.map((item) => item.total),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div className="container text-center">
      <hr />
      <Bar options={options} data={data} />
    </div>
  );
}
