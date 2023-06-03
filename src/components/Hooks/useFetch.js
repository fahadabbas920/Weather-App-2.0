import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("loading...");
    setData(null);
    setError(null);
  try {
    fetch(url)
    .then((res) => {
      setLoading(false);
      return res.json();
    })
    .then((data) => {
      setData(data);
    })
    .catch((err) => {
      setLoading(false);
      setError("An error occurred. Awkward..");
    });
  } catch (error) {
    console.log(error)
  }
  }, [url]);

  return { data, loading, error };
}
export default useFetch;
