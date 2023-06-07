import {
  XAxis,
  // YAxis,
  // Legend,
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
  if (metric === "km/h") {
    toggleSystem = "speedC";
  } else {
    toggleSystem = "speedF";
  }

  const windSpeed = forecastData.filter((w, i) => {
    return i < 6;
    // return w.dayName === weatherData.dayName;
  });
  windSpeed.forEach((data) => {
    data.XAxis = data.hour;
    // data.XAxis = data.hour.replace(" ", "") + " " + data.dayName.slice(0, 3);
  });

  const renderTooltipContent = (o) => {
    const { payload } = o; //   ,label
    // const total = payload.reduce((result, entry) => result + entry.value, 0);

    return (
      <div className="customized-tooltip-content">
        {/* <p className="total">{`${label} (Total: ${total})`}</p> */}
        <ul className="Pollution-Chart-Container-UL">
          {payload.map((entry, index) => (
            <li key={`item-${index}`} style={{ color: "#ffffff" }}>
              {`${entry.name.substring(0, 5)}:`} &nbsp;
              <span>
                {" "}
                {entry.value} {metric}
              </span>
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
            top: 60,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorWind" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#7eaed3" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#7eaed3" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey={toggleSystem}
            stroke="#c3cde6"
            strokeWidth={2}
            // fill="#7eaed3"
            fillOpacity={1}
            fill="url(#colorWind)"
            label={{ fill: 'black', fontSize: 16, fontWeight: 'bold' }}
          />
          <XAxis dataKey={"XAxis"} tickSize={0} name="hour" tick={{fontSize: "12px",stroke: 'white'}} axisLine={false}/>
          {/* <YAxis /> */}
          <Tooltip content={renderTooltipContent} />
          {/* <Legend /> */}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AirSpeedChart;
