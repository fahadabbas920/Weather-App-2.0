import { useEffect, useContext } from "react";
import { AllWeatherData } from "../../App";
import useFetch from "../Hooks/useFetch";
import { ChangeTimeFormat, timeConverter } from "./funcLibrary";

const GetWeatherData = () => {
  const { coords, setWeatherData, tZOffset, setTZOffset,setError } =
    useContext(AllWeatherData);

  const { data } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=fed0b3710b7bef715d1a4f4e8864ffa9`
  );
  useEffect(() => {
    if (data !== null) {
      try {
        const [dayName, date, month, year, hour, min, sec] = timeConverter(
          data.dt,
          data.timezone
        );
        const [Hour] = ChangeTimeFormat(hour);
        setWeatherData({
          clouds: data.clouds.all,
          cod: data.cod,
          lat: data.coord.lat,
          lon: data.coord.lon,
          dt: data.dt,
          id: data.id,
          feels_like: data.main.feels_like,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          temp: data.main.temp,
          temp_max: data.main.temp_max,
          temp_min: data.main.temp_min,
          name: data.name,
          country: data.sys.country,
          sys_id: data.sys.id,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          type: data.sys.type,
          timezone: data.timezone,
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
          // rain1h: data.rain['1h'],
          // rain3h: data.rain['3h'],
          // snow1h: data.snow['1h'],
          // snow3h: data.snow['3h'],
          dayName: dayName,
          date: date,
          month: month,
          year: year,
          hour: Hour,
          min: min,
          sec: sec,
          tempC: Math.floor(data.main.temp - 273.15),
          tempC_max: Math.floor(data.main.temp_max - 273.15),
          tempC_min: Math.floor(data.main.temp_min - 273.15),
          tempF: Math.floor(((data.main.temp - 273.15) * 9) / 5 + 32),
          tempF_max: Math.floor(((data.main.temp_max - 273.15) * 9) / 5 + 32),
          tempF_min: Math.floor(((data.main.temp_min - 273.15) * 9) / 5 + 32),
        });
        setError(null)
      } catch (error) {
        // console.log(error)
        // console.log()
        setError(`Error Fetching Data: ${error.message}`)
      }
      
    }
  }, [coords, data, setWeatherData, tZOffset, setTZOffset,setError]);

  return <></>;
};

export default GetWeatherData;
