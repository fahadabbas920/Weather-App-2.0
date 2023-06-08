import { useContext, useEffect } from "react";
import { AllWeatherData } from "../../App";
import useFetch from "../Hooks/useFetch";

const GetAirPollution = () => {
  const { coords, setAirData } = useContext(AllWeatherData);
  const { data } = useFetch(
    `http://api.openweathermap.org/data/2.5/air_pollution?lat=${coords.lat}&lon=${coords.lon}&appid=fed0b3710b7bef715d1a4f4e8864ffa9`
  );

  useEffect(() => {
    if (data !== null) {
      setAirData({
        co: data.list[0].components.co,
        nh3: data.list[0].components.nh3,
        no: data.list[0].components.no,
        no2: data.list[0].components.no2,
        o3: data.list[0].components.o3,
        pm2_3: data.list[0].components.pm2_5,
        pm10: data.list[0].components.pm10,
        so2: data.list[0].components.so2,
        dt: data.list[0].dt,
        aqi: data.list[0].main.aqi,
      });
    }
  }, [data, coords,setAirData]);

  return <></>;
};

export default GetAirPollution;
