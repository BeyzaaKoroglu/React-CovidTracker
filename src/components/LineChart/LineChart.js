import { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Styled } from "./LineChart.styled";
import { getGlobalData, getGlobalTotal } from "../../redux/covid/services";
import { useDispatch, useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGlobalData());
    dispatch(getGlobalTotal());
  }, [dispatch]);

  const labels = useSelector((state) => state.covid.dates);
  const dailyInfecteds = useSelector(
    (state) => state.covid.globalDailyInfecteds
  );
  const dailyDeaths = useSelector((state) => state.covid.globalDailyDeaths);

  const data = {
    labels,
    datasets: [
      {
        label: "Infected",
        data: dailyInfecteds,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Deaths",
        data: dailyDeaths,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <Styled>
      <h2>Daily Global Data</h2>
      <Line data={data} />
    </Styled>
  );
};

export default LineChart;
