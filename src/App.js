import "./App.css";
import Header from "./components/Header";
import LineChart from "./components/LineChart";
import SelectCountry from "./components/SelectCountry";

function App() {
  return (
    <div className="App">
      <Header />
      <SelectCountry />
      <LineChart />
    </div>
  );
}

export default App;
