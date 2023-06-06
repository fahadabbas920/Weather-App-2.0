import { useContext, useEffect } from "react";
import { AllWeatherData } from "../../App";
import useFetch from "../Hooks/useFetch";

const TimeZoneData = () => {
  const { setTZOffset, coords } = useContext(AllWeatherData);
  const { data } = useFetch(
    `https://api.ipgeolocation.io/timezone?apiKey=fdf03f206c944e82931ced52949cf6c7&lat=${coords.lat}&long=${coords.lon}`
  );

  useEffect(() => {
    if (data !== null) {
      setTZOffset(data.timezone_offset);
    }
  }, [data, coords, setTZOffset]);

  return <></>;
};

export default TimeZoneData;
