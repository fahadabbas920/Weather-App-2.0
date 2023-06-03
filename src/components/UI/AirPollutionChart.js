import {
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  AreaChart,
  ResponsiveContainer,
  Area,
} from "recharts";
import { useContext } from "react";
import { AllWeatherData } from "../../App";

const AirPollutionChart = () => {
  const { airDataForecast } = useContext(AllWeatherData);
  const newArray = [];
  for (let i = 1; i <= 6; i++) {
    newArray.push(airDataForecast[i]);
  }

  const renderTooltipContent = (o) => {
    const { payload } = o;   //   ,label
    // const total = payload.reduce((result, entry) => result + entry.value, 0);
  
    return (
      <div className="customized-tooltip-content">
        {/* <p className="total">{`${label} (Total: ${total})`}</p> */}
        <ul className="Pollution-Chart-Container-UL">
          {payload.map((entry, index) => (
            <li key={`item-${index}`} style={{ color: "#ffffff" }}>
              {`${entry.name}:`} &nbsp;<span> {entry.value}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };


  return (
    <div className="Pollution-Chart-Container">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={600}
          height={250}
          data={newArray}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          {/* <Area type="monotone" dataKey="co" stroke="#8882d8" /> */}
          <Area type="monotone" dataKey="nh3" stroke="#020610" />
          <Area type="monotone" dataKey="no" stroke="#808000" />
          <Area type="monotone" dataKey="no2" stroke="#F00FF0" />
          <Area type="monotone" dataKey="o3" stroke="#000080" />
          <Area type="monotone" dataKey="pm2_3" stroke="#0000FF" />
          <Area type="monotone" dataKey="pm10" stroke="#008080" fill="#82ca9d"/>
          <Area type="monotone" dataKey="so2" stroke="#008000" />
          <Area type="monotone" dataKey="aqi" stroke="#8874d8" />
          <XAxis dataKey="hour" />
          <YAxis />
          <Tooltip content={renderTooltipContent}/>
          <Legend />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AirPollutionChart;
