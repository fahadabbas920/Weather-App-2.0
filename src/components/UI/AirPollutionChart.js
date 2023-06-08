import {
  XAxis,
  // YAxis,
  Tooltip,
  Legend,
  // AreaChart,
  LineChart,
  ResponsiveContainer,
  // Area,
  // Brush,
  Line,
} from "recharts";
import { useContext } from "react";
import { AllWeatherData } from "../../App";

const AirPollutionChart = () => {
  const { airDataForecast , setAQI } = useContext(AllWeatherData);

  // const airChart = [];
  let AQI = 0;

  const airChart = airDataForecast.filter((w, i) => {
    return i < 6;
    // return w.dayName === weatherData.dayName;
  });
  airChart.forEach((data, index) => {
    if (index < 6) {
      AQI += data.aqi;
    }
    data.XAxis = data.hour;
    // data.XAxis = data.hour.replace(" ", "") + " " + data.dayName.slice(0, 3);
  });

  switch (Math.trunc(AQI / 6)) {
    case 1:
      setAQI("Good");
      break;
    case 2:
      setAQI("Fair");
      break;
    case 3:
      setAQI("Moderate");
      break;
    case 4:
      setAQI("Poor");
      break;
    case 5:
      setAQI("Very Poor");
      break;

    default:
      break;
  }

  const renderTooltipContent = (o) => {
    const { payload } = o; //   ,label
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
        <LineChart
          width={600}
          height={250}
          data={airChart}
          margin={{
            top: 60,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          {/* <Area type="monotone" dataKey="co" stroke="#8882d8" /> */}
          <Line
            type="monotone"
            dataKey="nh3"
            stroke="#F4C430"
            strokeWidth={2}
            dot={false}
            // label={{ fill: 'black', fontSize: 16, fontWeight: 'bold' }}
          />
          <Line
            type="monotone"
            dataKey="no"
            stroke="#808000"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="no2"
            stroke="#cc3336"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="o3"
            stroke="#82bfcf"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="pm2_3"
            stroke="#93C572"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="pm10"
            stroke="#008080"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="so2"
            stroke="#008000"
            strokeWidth={2}
            dot={false}
          />
          {/* <Line
            type="monotone"
            dataKey="aqi"
            stroke="#8874d8"
            strokeWidth={2}
            fill="#82ca9d"
          /> */}
          {/* <XAxis dataKey="XAxis" wrapperStyle={{ fontSize: 10 }} /> */}
          <XAxis
            dataKey={"XAxis"}
            tickSize={0}
            name="hour"
            tick={{ fontSize: "12px", stroke: "white", fontWeight: '100' }}
            axisLine={false}
            dy={10}
          />
          {/* <YAxis /> */}
          {airDataForecast !== [] && <Tooltip content={renderTooltipContent} />}
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AirPollutionChart;

// const newArray = airDataForecast.filter((w, i) => {
//   return w.dayName === "Thursday";
// });

// console.log(newArray)

// let temp = airDataForecast[0].dayName

// const airChart = AirPollutionChart.Map(data=>{

//   return (data.dayName === weatherData.dayNAme && data)
// })
// AQI += airDataForecast[i].aqi;
// for (let i = 1; i <= 6; i++) {

//   newArray.push(airDataForecast[i]);
// }
// return w.dayName === weatherData.dayName;
