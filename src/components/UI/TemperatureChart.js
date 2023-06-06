import {
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  Area,
  AreaChart,
  ResponsiveContainer,
} from "recharts";
import { useContext, useEffect, useRef } from "react";
import { AllWeatherData } from "../../App";
// import { timeConverter } from "../SmallComponents/funcLibrary";

const TemperatureChart = () => {
  const { forecastData, metric, weatherData } = useContext(AllWeatherData);
  // console.log(weatherData)
  console.log(forecastData);
  // let filterer = [];
  // forecastData.forEach((data) => {
  //   filterer.push(
  //     Object.fromEntries(
  //       Object.entries(data).filter(([key]) => key.includes("temp"))
  //     )
  //   );
  // });

  let toggleSystem;
  if (metric === "km/h") {
    toggleSystem = "tempC";
  } else {
    toggleSystem = "tempF";
  }

  // const Temp = useRef()
  // useEffect(() => {
  const Temp = forecastData.filter((w, i) => {
    // return w.dayName === weatherData.dayName;
    return i < 6
  });

 Temp.forEach(data=>{
  data.XAxis = data.hour.replace(" ",'') + ' ' + data.dayName.slice(0,3)
 })

  // console.log(Temp)
  // }, [forecastData,weatherData.dayName,coords]);

  const renderTooltipContent = (o) => {
    const { payload } = o; //   ,label
    // const total = payload.reduce((result, entry) => result + entry.value, 0);

    return (
      <div className="customized-tooltip-content">
        {/* <p className="total">{`${label} (Total: ${total})`}</p> */}
        <ul className="Pollution-Chart-Container-UL">
          {payload.map((entry, index) => (
            <li key={`item-${index}`} style={{ color: "#ffffff" }}>
              {`${entry.name.substring(0, 4)}:`} &nbsp;
              <span> {entry.value}°</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <div className="Air-Chart-Container">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={600}
          height={250}
          data={Temp}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <Area
            type="monotone"
            dataKey={toggleSystem}
            stroke="#FFAA33"
            strokeWidth={2}
            fill="#F4BB44"
          />
          <XAxis dataKey={"XAxis"} />
          <YAxis />
          <Tooltip content={renderTooltipContent} />
          <Tooltip />
          <Legend />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TemperatureChart;

// stroke="#82ca9d" fill="#82ca9d"
