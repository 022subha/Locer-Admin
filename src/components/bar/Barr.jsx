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
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  aspectRatio: 2,
  categoryPercentage: 0.8,
  barPercentage: 0.9,
  //  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        boxWidth: 0,
      },
      // position: 'top' as const,
    },
    // title: {
    //   display: true,
    //   text: "Chart.js Bar Chart",
    // },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      barThickness: 10,
      label: "",
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
      backgroundColor: "#316db3",
      data: [10, 8, 6, 9, 1, 5, 8, 4, 8, 2, 5, 9],
    },
    {
      barThickness: 10,
      label: "",
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
      backgroundColor: "#d9d9d9",
      data: [1, 1, 4, 7, 9, 5, 6, 3, 7, 2, 5, 4],
    },
  ],
};

export function Barr() {
  return (
    <div style={{ width: "62%", backgroundColor: "white",padding:"25px",borderRadius:"10px"}}>
      <Bar options={options} data={data} /* width={50} */ height={50} />
    </div>
  );
}
