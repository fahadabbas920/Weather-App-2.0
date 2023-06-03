import {
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  Area,
  AreaChart,
  ResponsiveContainer,
} from "recharts";
import { useContext } from "react";
import { AllWeatherData } from "../../App";

const AirSpeedChart = () => {
  const { forecastData, metric } = useContext(AllWeatherData);

  let toggleSystem;
  if (metric === "m/s") {
    toggleSystem = "speed";
  } else {
    toggleSystem = "speedF";
  }

  const windSpeed = forecastData.filter((w, i) => {
    return i < 6;
  });
  const renderTooltipContent = (o) => {
    const { payload } = o;   //   ,label
    // const total = payload.reduce((result, entry) => result + entry.value, 0);
  
    return (
      <div className="customized-tooltip-content">
        {/* <p className="total">{`${label} (Total: ${total})`}</p> */}
        <ul className="Pollution-Chart-Container-UL">
          {payload.map((entry, index) => (
            <li key={`item-${index}`} style={{ color: "#ffffff" }}>
              {`${entry.name.substring(0, 5)}:`} &nbsp;<span> {entry.value.toFixed(2)} {metric}</span>
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
          data={windSpeed}
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
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <XAxis dataKey={"hour"} />
          <YAxis />
          <Tooltip content={renderTooltipContent}/>
          <Legend />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AirSpeedChart;
