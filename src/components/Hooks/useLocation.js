import { useEffect, useState } from "react";

const useLocation = () => {
  const [coords, setCoords] = useState({ lat: null, lon: null });
  const [error, setError] = useState("");
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const handleSuccess = (position) => {
      const { latitude: lat, longitude: lon } = position.coords;
      setCoords({ lat: lat, lon: lon });
      setStatus(true);
    };

    const handleError = (error) => {
      setStatus(false);
      setError(`Error occurred while retrieving location: ${error.message}`);
    };

    const fetchLocation = () => {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    };

    if (navigator.permissions) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((permissionStatus) => {
          if (permissionStatus.state === "granted") {
            fetchLocation();
          } else if (permissionStatus.state === "prompt") {
            setStatus(false);
            setError("Please Enable Live Location.");
            fetchLocation();
          } else {
            setStatus(false);
            setError(
              "Live Location permission denied. Please enable Live Location and click the Live Location button."
            );
          }
        })
        .catch((error) => {
          setError(`Error occurred while checking permission: ${error.message}`);
        });
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  return { coords, error, status };
};

export default useLocation;

