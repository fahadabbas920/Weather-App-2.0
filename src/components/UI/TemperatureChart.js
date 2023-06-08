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
// import { timeConverter } from "../SmallComponents/funcLibrary";

const TemperatureChart = () => {
  const { forecastData, metric } = useContext(AllWeatherData);

  let toggleTemp;
  if (metric === "km/h") {
    toggleTemp = "tempC";
  } else {
    toggleTemp = "tempF";
  }

  const Temp = forecastData.filter((w, i) => {
    return i < 6;
  });

  Temp.forEach((data) => {
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
              {`${entry.name.substring(0, 4)}:`} &nbsp;
              <span> {entry.value}°</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  // const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
  //   // console.log(payload)
  //   return (
  //     <text
  //       x={x + width / 2}
  //       y={y}
  //       fill="#000"
  //       textAnchor="middle"
  //       dy={-6}
  //     >{`value: ${value}`}</text>
  //   );
  // };
  return (
    <div className="Temperature-Chart-Container">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={600}
          height={250}
          data={Temp}
          margin={{
            top: 60,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#F4BB44" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#F4BB44" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey={toggleTemp}
            stroke="#FFAA33"
            strokeWidth={2}
            // fill="#F4BB44"
            // label={renderCustomBarLabel}
            fillOpacity={1}
            fill="url(#colorTemp)"
            label={{ fill: 'white', fontSize: 16, fontWeight: 'bold' }}
            // label={renderCustomBarLabel}
          />
          {/* <Area
            type="monotone"
            dataKey={toggleTempMin}
            stroke="#FFAA33"
            strokeWidth={2}
            // fill="#F4BB44"
            // label={renderCustomBarLabel}
            fillOpacity={1}
            fill="url(#colorTemp)"
            label={{ fill: 'black', fontSize: 16, fontWeight: 'bold' }}
          />
          <Area
            type="monotone"
            dataKey={toggleTempMax}
            stroke="#FFAA33"
            strokeWidth={2}
            // fill="#F4BB44"
            // label={renderCustomBarLabel}
            fillOpacity={1}
            fill="url(#colorTemp)"
            label={{ fill: 'black', fontSize: 16, fontWeight: 'bold' }}
          /> */}
          <XAxis dataKey={"XAxis"} tickSize={0} name="hour" tick={{fontSize: "12px",stroke: 'white'} } axisLine={false} label={{ offset: 0 }} />
          {/* <YAxis /> */}
          <Tooltip content={renderTooltipContent} />
          {/* <Tooltip /> */}
          {/* <Legend /> */}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TemperatureChart;

// stroke="#82ca9d" fill="#82ca9d"
