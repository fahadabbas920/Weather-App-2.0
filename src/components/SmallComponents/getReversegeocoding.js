import { useContext } from "react";
import { AllWeatherData } from "../../App";
import useFetch from "../Utility/useFetch";

const GetReverseGeoCoding = () => {
  const { coords } = useContext(AllWeatherData);
  const { data, loading, error } = useFetch(
    `http://api.openweathermap.org/geo/1.0/reverse?lat=${coords.lat}&lon=${coords.lon}&appid=fed0b3710b7bef715d1a4f4e8864ffa9`
  );
  console.log(data, loading, error);

  return {};
};

export default GetReverseGeoCoding;
