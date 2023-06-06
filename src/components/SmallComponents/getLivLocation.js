import useLocation from "../Hooks/useLocation";
import { useEffect, useContext } from "react";
import { AllWeatherData } from "../../App";
const GetLiveLocation = () => {
  const { setCoords, setLiveCoords, setError } = useContext(AllWeatherData);
  const { coords, error, status } = useLocation();
  useEffect(() => {
    setLiveCoords(coords);
    setCoords(coords);
    setError(error);
  }, [coords,setCoords,error,setError,setLiveCoords]);

  return <></>;
};

export default GetLiveLocation;
