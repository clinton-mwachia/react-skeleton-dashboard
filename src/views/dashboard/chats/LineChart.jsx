import { Chart } from "primereact/chart";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "blue",
      tension: 0.4,
    },
    {
      label: "Second Dataset",
      data: [28, 48, 40, 19, 86, 27, 90],
      fill: false,
      borderColor: "pink",
      tension: 0.4,
    },
  ],
};
const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    title: {
      display: true,
      text: "Line Chat",
    },
  },
};

const LineChart = () => {
  return <Chart type="line" data={data} options={options} />;
};

export default LineChart;
