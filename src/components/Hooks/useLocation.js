import { useEffect,useState} from "react";
// import { AllWeatherData } from "../../App";


const useLocation = () => {
  // console.log("useLocation Called")
    // const {coords,setCoords,error,setError} = useContext(AllWeatherData)
    const [coords,setCoords] = useState({lat: null, lon: null})
    const [error,setError] = useState("")
    const [status, setStatus] = useState(false)

  useEffect(() => {
    navigator.permissions &&
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (PermissionStatus) {
          if (PermissionStatus.state === "granted") {
            navigator.geolocation.getCurrentPosition((e) => {
              const { latitude: lat, longitude: lon } = e.coords;
              setCoords({ lat: lat, lon: lon });
              console.log("1")
              setStatus(true)
              
            });
          } else if (PermissionStatus.state === "prompt") {
            setStatus(false)
            setError("Please Enable Live Location.");
            navigator.geolocation.getCurrentPosition((e) => {
                setCoords({lat:e.coords.latitude,lon: e.coords.longitude})
                console.log("2")
                setStatus(true)
            });
            // prompt - not yet grated or denied
            console.log("prompt");
          } else {
            //denied
            console.log("3")
            setStatus(false)
           
            console.log("denied");
            setError(
              `Live Location permission denied. Please enable Live Location and click live location button.`
            );
          }
        });
  }, []);
  // console.log("useLocation Ended")

  return {coords,error,status};
};

export default useLocation;
