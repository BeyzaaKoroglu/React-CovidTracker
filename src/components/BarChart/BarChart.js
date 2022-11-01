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
import { Styled } from "./BarChart.styled";
import { useSelector } from "react-redux";
import { CasesDetail } from "../../redux/covid/covidSlice";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const detail = useSelector(CasesDetail);
  const labels = detail.map((data) => data.id);
  const data = {
    labels,
    datasets: [
      {
        label: "People",
        data: detail.map((data) => data.value),
        backgroundColor: detail.map((data) => data["color-2"]),
      },
    ],
  };
  return (
    <Styled>
      <Bar data={data} />
    </Styled>
  );
};

export default BarChart;
