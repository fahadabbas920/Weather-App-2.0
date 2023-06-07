import { useContext, useEffect } from "react";
import { AllWeatherData } from "../../App";
import useFetch from "../Hooks/useFetch";
import { ChangeTimeFormat, convertDateTimeToComponents } from "./funcLibrary";

const GetForecast = () => {
  const { coords, setForecastData, setError } = useContext(AllWeatherData);
  const { data } = useFetch(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=fed0b3710b7bef715d1a4f4e8864ffa9`
  );
  useEffect(() => {
    if (data !== null) {
      try {
        console.log(data);
        // const tz = data.city.timezone;
        let dataArray = [];
        data.list.forEach((data) => {
          const { dayName, hour, minute, month, year, sec } =
            convertDateTimeToComponents(data.dt_txt);
          const [Hour] = ChangeTimeFormat(hour);
          dataArray.push({
            clouds: data.clouds.all,
            dt: data.dt,
            dt_txt: data.dt_txt,
            feels_like: data.main.feels_like,
            grnd_level: data.main.grnd_level,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            sea_level: data.main.sea_level,
            temp: data.main.temp,
            temp_kf: data.main.temp_kf,
            temp_max: data.main.temp_max,
            temp_min: data.main.temp_min,
            pop: data.pop,
            pod: data.sys.pod,
            visibility: data.visibility,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
            weather_id: data.weather[0].id,
            main: data.weather[0].main,
            deg: data.wind.deg,
            gust: data.wind.gust,
            speed: parseInt(data.wind.speed.toFixed(2)),
            speedC: parseInt(((data.wind.speed * 3600) / 1000).toFixed(2)),
            speedF: parseInt((data.wind.speed * 2.2369).toFixed(2)),
            dayName: dayName,
            month: month,
            year: year,
            hour: Hour,
            min: minute,
            sec: sec,
            tempC: Math.floor(data.main.temp - 273.15),
            tempC_max: Math.floor(data.main.temp_max - 273.15),
            tempC_min: Math.floor(data.main.temp_min - 273.15),
            tempF: Math.floor(((data.main.temp - 273.15) * 9) / 5 + 32),
            tempF_max: Math.floor(((data.main.temp_max - 273.15) * 9) / 5 + 32),
            tempF_min: Math.floor(((data.main.temp_min - 273.15) * 9) / 5 + 32),
          });
        });
        setForecastData(dataArray);
        setError(null);
      } catch (error) {
        // console.log(error)
        // console.log()
        setError(`Error Fetching Data: ${error.message}`);
      }
    }
  }, [coords, data, setForecastData,setError]);

  return <></>;
};

export default GetForecast;
