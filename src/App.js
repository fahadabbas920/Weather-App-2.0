import { createContext, useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/UI/navbar";
import GetGeocoding from "./components/SmallComponents/getGeocoding";
import GetWeatherData from "./components/SmallComponents/getData";
import GetAirPollution from "./components/SmallComponents/getAirPollution";
import GetForecast from "./components/SmallComponents/getForecast";
import GetAirForecastPollution from "./components/SmallComponents/getAirPollutionForecast";
import Header from "./components/UI/Header";
import Loading from "./components/UI/loading";
import ChartControlButtons from "./components/UI/chartControlButtons";
export const AllWeatherData = createContext();

function App() {
  const [state, setstate] = useState(false);
  const [star, setStar] = useState(false);
  const name = localStorage.getItem("name")
    ? JSON.parse(localStorage.getItem("name"))
    : "Lahore";
    console.log(name)
  const Coords = localStorage.getItem("Coords")
    ? JSON.parse(localStorage.getItem("Coords"))
    : null;

  useEffect(() => {
    if (Coords !== null) {
      setstate(true);
      setStar(true);
    } else {
      setstate(true);
    }
  }, []);

  const [liveCoords, setLiveCoords] = useState({ lat: null, lon: null });
  const [coords, setCoords] = useState({ lat: null, lon: null });
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState({
    clouds: "NaN",
    cod: "NaN",
    lat: "NaN",
    lon: "NaN",
    dt: "NaN",
    id: "NaN",
    feels_like: "NaN",
    himidity: "NaN",
    pressure: "NaN",
    temp: "NaN",
    temp_max: "NaN",
    temp_min: "NaN",
    name: "NaN",
    country: "NaN",
    sys_id: "NaN",
    sunrise: "NaN",
    sunset: "NaN",
    type: "NaN",
    timezone: "NaN",
    visibility: "NaN",
    description: "NaN",
    icon: "NaN",
    weather_id: "NaN",
    main: "NaN",
    deg: "NaN",
    gust: "NaN",
    speed: "NaN",
  });
  const [airData, setAirData] = useState({
    co: "NaN",
    nh3: "NaN",
    no: "NaN",
    no2: "NaN",
    o3: "NaN",
    pm2_3: "NaN",
    pm10: "NaN",
    so2: "NaN",
    dt: "NaN",
    aqi: "NaN",
  });
  const [locationName, setLocationName] = useState(name);
  const [airDataForecast, setAirDataForecast] = useState([]);
  const [forecastData, setForecastData] = useState([]);
  const [metricToggleVal, setMerticToggleVal] = useState();
  const [metric, setMetric] = useState("m/s");

  console.log(forecastData)
  return (
    <div className="App">
      <AllWeatherData.Provider
        value={{
          locationName,
          setLocationName,
          weatherData,
          setWeatherData,
          airData,
          setAirData,
          forecastData,
          setForecastData,
          coords,
          setCoords,
          error,
          setError,
          setLiveCoords,
          liveCoords,
          airDataForecast,
          setAirDataForecast,
          metricToggleVal,
          setMerticToggleVal,
          metric,
          setMetric,
          star,
          setStar,
        }}
      >
        {/* && locationName === "" */}
        {state ? <GetGeocoding /> : null}
        {coords.lat === null ? null : <GetWeatherData />}
        {coords.lat === null ? null : <GetAirPollution />}
        {coords.lat === null ? null : <GetForecast />}
        {coords.lat === null ? null : <GetAirForecastPollution />}
        {coords.lat === null ? (
          <Loading />
        ) : (
          <>
            <Navbar />
            <Header />
            <ChartControlButtons />
          </>
        )}
      </AllWeatherData.Provider>
    </div>
  );
}

export default App;
