import { useContext, useEffect } from "react";
import { AllWeatherData } from "../../App";
import useFetch from "../Hooks/useFetch";
import { ChangeTimeFormat, timeConverter } from "./funcLibrary";

const GetAirForecastPollution = () => {
  const { coords, setAirDataForecast,weatherData } = useContext(AllWeatherData);
  const { data } = useFetch(
    `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=fed0b3710b7bef715d1a4f4e8864ffa9`
  );

  useEffect(() => {
    if (data !== null) {
      let dataArray = [];
      data.list.forEach((data) => {
        const [dayName, date, month, year, hour, min, sec] = timeConverter(
          data.dt,
          weatherData.timezone
        );
        const [Hour] = ChangeTimeFormat(hour);
        dataArray.push({
          co: data.components.co,
          nh3: data.components.nh3,
          no: data.components.no,
          no2: data.components.no2,
          o3: data.components.o3,
          pm2_3: data.components.pm2_5,
          pm10: data.components.pm10,
          so2: data.components.so2,
          dt: data.dt,
          aqi: data.main.aqi,
          dayName: dayName,
          date: date,
          month: month,
          year: year,
          hour: Hour,
          min: min,
          sec: sec,
        });
      });

      setAirDataForecast(dataArray);
    }
  }, [data, coords, setAirDataForecast,weatherData]);

  return <></>;
};

export default GetAirForecastPollution;
