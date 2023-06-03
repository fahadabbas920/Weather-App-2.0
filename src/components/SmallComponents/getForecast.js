import { useContext, useEffect } from "react";
import { AllWeatherData } from "../../App";
import useFetch from "../Hooks/useFetch";
import { ChangeTimeFormat, timeConverter } from "./funcLibrary";



const GetForecast = () => {
  const { coords, setForecastData } = useContext(AllWeatherData);
  const { data } = useFetch(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=fed0b3710b7bef715d1a4f4e8864ffa9`
  );
  useEffect(() => {
    if (data !== null) {
      // console.log(data.list[0]);
      let dataArray = [];

      
      
      data.list.forEach((data) => {
        const [dayName,date,month,year,hour,min,sec] = timeConverter(data.dt)
        const [Hour] = ChangeTimeFormat(hour)
        dataArray.push({
          clouds: data.clouds.all,
          dt: data.dt,
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
          speed: data.wind.speed,
          speedF: Number(data.wind.speed * 2.2369),
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
      });

      setForecastData(dataArray)

      // data.list
      //   .forEach((data) => {
      //     setForecastData({
      //       clouds: data.clouds.all,
      //       dt: data.dt,
      //       feels_like: data.main.feels_like,
      //       grnd_level: data.main.grnd_level,
      //       humidity: data.main.humidity,
      //       pressure: data.main.pressure,
      //       sea_level: data.main.sea_level,
      //       temp: data.main.temp,
      //       temp_kf: data.main.temp_kf,
      //       temp_max: data.main.temp_max,
      //       temp_min: data.main.temp_min,
      //       pop: data.pop,
      //       pod: data.sys.pod,
      //       visibility: data.visibility,
      //       description: data.weather[0].description,
      //       icon: data.weather[0].icon,
      //       weather_id: data.weather[0].id,
      //       main: data.weather[0].main,
      //       deg: data.wind.deg,
      //       gust: data.wind.gust,
      //       speed: data.wind.speed,
      //     });
      //   })
    }
  }, [coords, data, setForecastData]);

  return <></>;
};

export default GetForecast;

// {
//   temp: data.main.temp,
//   max_temp: data.main.temp_max,
//   min_temp: data.main.temp_min,
//   weather: data.weather[0].main,
//   clouds: data.clouds.all,
//   description: data.weather[0].description,
//   feels_like: data.main.feels_like,
//   pressure: data.main.pressure,
//   humidity: data.main.humidity,
//   wind: data.wind.speed,
//   gust: data.wind.gust,
//   weather_station: data.name,
//   timezone: data.timezone,
//   country: data.sys.country,
//   lat: data.coord.lat,
//   lon: data.coord.lon,
//   sunrise: data.sys.sunrise,
//   sunset: data.sys.sunset,
//   icon: data.weather[0].icon,
//   dt: data.dt,
// }

// {
//  clouds : data.clouds.all,
//  cod : data.cod,
//  lat : data.coord.lat,
//  lon : data.coords.lon,
//  dt : data.dt,
//  id : data.id,
//  feels_like : data.main.feels_like,
//  himidity : data.main.himidity,
//  pressure : data.main.pressure,
//  temp : data.main.temp,
//  temp_max : data.main.temp_max,
//  temp_min : data.main.temp_min,
//  name : data.name,
//  country : data.sys.country,
//  id : data.sys.id,
//  sunrise : data.sys.sunrise,
//  sunset : data.sys.sunset,
//  type : data.sys.type,
//  timezone : data.timezone,
//  visibility : data.visibility,
//  description : data.weather[0].description,
//  icon : data.weather[0].icon,
//  id : data.weather[0].id,
//  main : data.weather[0].main,
//  deg : data.window.deg,
//  speed : data.wind.speed,
// }
