import { useContext, useEffect } from "react";
import { AllWeatherData } from "../../App";
import useFetch from "../Hooks/useFetch";

const GetGeocoding = () => {
  const { coords, setCoords, locationName, setStar } =
    useContext(AllWeatherData);
  console.log(locationName);
  const { data } = useFetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${locationName}&appid=fed0b3710b7bef715d1a4f4e8864ffa9`
  );
  // console.log(data)
  useEffect(() => {
    if (data !== null) {
      const { lat, lon } = data[0];
      setCoords({ lat, lon });
      const Coords = localStorage.getItem("Coords")
        ? JSON.parse(localStorage.getItem("Coords"))
        : null;
      if (Coords !== null) {
        // console.log(Coords.lat)
        // const newObj = JSON.parse(Coords);
        if (Coords.lat === coords.lat && Coords.lon === coords.lon) {
          setStar(true);
        } else {
          setStar(false);
        }
      }
    }
  }, [locationName, data, setCoords, coords.lat, coords.lon, setStar]);

  return <></>;
};

export default GetGeocoding;
