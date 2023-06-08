import { useContext, useEffect } from "react";
import { AllWeatherData } from "../../App";
import useFetch from "../Hooks/useFetch";

const GetGeocoding = () => {
  const { coords, setCoords, locationName, setStar,setError } =
    useContext(AllWeatherData);
  const { data } = useFetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${locationName}&appid=fed0b3710b7bef715d1a4f4e8864ffa9`
  );
  useEffect(() => {
    if (data !== null) {

      try {
        const { lat, lon } = data[0];
        setCoords({ lat, lon });
        const Coords = localStorage.getItem("Coords")
          ? JSON.parse(localStorage.getItem("Coords"))
          : null;
        if (Coords !== null) {
          if (Coords.lat === coords.lat && Coords.lon === coords.lon) {
            setStar(true);
          } else {
            setStar(false);
          }
        }
        setError(null)
      } catch (error) {
        setError(`Message: Write Name Correctly, Error Fetching Data: ${error.message}`)
      }


    }
  }, [locationName, data, setCoords, coords.lat, coords.lon, setStar,setError]);

  return <></>;
};

export default GetGeocoding;
