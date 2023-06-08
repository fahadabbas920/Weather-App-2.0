import { useContext, useEffect } from "react";
import { AllWeatherData } from "../../App";
import useFetch from "../Hooks/useFetch";

const GetReverseGeoCoding = () => {
  const { liveCoords, setLocationName, setLive, setError } =
    useContext(AllWeatherData);
  const { data } = useFetch(
    `http://api.openweathermap.org/geo/1.0/reverse?lat=${liveCoords.lat}&lon=${liveCoords.lon}&appid=fed0b3710b7bef715d1a4f4e8864ffa9`
  );
  // console.log(data, loading, error);
  useEffect(() => {
    if (data !== null) {
      try {
        setLocationName(data[0].name);
        setLive(false);
        // setCoords(liveCoords)
        // setstate(false)
        setError(null);
      } catch (error) {
        // console.log(error)
        // console.log()
        setError(`Error Fetching Data: ${error.message}`);
      }
    }
  }, [data, setLocationName, setLive, setError]);

  return <></>;
};

export default GetReverseGeoCoding;
