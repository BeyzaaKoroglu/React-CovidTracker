import "./App.css";
import DetailCards from "./components/DetailCards";
import Header from "./components/Header";
import LineChart from "./components/LineChart";
import SelectCountry from "./components/SelectCountry";
import { useSelector } from "react-redux";
import { selectedCountry } from "../src/redux/covid/covidSlice";

function App() {
  useSelector(selectedCountry);

  return (
    <div className="App">
      <Header />
      <SelectCountry />
      <DetailCards />
      {useSelector(selectedCountry) === "" && <LineChart />}
    </div>
  );
}

export default App;
