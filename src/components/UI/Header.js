import { useState, useEffect, useContext } from "react";
import { AllWeatherData } from "../../App";
const Header = () => {
  const [state, setstate] = useState("");

  const {
    weatherData,
    setMetric,
    setMerticToggleVal,
    metric,
    star,
    setStar,
    locationName,
    coords,
  } = useContext(AllWeatherData);
  let Hour;
  let letr;
  useEffect(() => {
    // if(localStorage.getItem("name") !== locationName){
    //   setStar(false)
    // }
    if (weatherData.icon === "NaN") {
      // console.log("Not");
    } else {
      fetch(`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`)
        .then((res) => {
          return res.blob();
        })
        .then((data) => {
          const imageObjectURL = URL.createObjectURL(data);
          setstate(imageObjectURL);
        })
        .catch((value) => {
          console.log(value);
        });
    }
  }, [weatherData.icon, locationName, setStar]);

  if (weatherData.temp !== "NaN") {
    Hour = weatherData.hour.match(/\d+/g);
    letr = weatherData.hour.match(/[a-zA-Z]+/g);
  }
  // const [metricToggleVal, setMerticToggleVal] = useState();
  // const [metric, setMetric] = useState("m/s");

  function changeSize(value) {
    if (value === 1) {
      document.getElementById("one").style.fontWeight = "500";
      document.getElementById("two").style.color = "#9a9a9a";
      document.getElementById("one").style.color = "#ffffff";
      document.getElementById("two").style.fontWeight = "100";
      setMetric("m/s");
    } else if (value === 2) {
      document.getElementById("two").style.fontWeight = "500";
      document.getElementById("one").style.color = "#9a9a9a";
      document.getElementById("two").style.color = "#ffffff";
      document.getElementById("one").style.fontWeight = "100";
      setMetric("Mph");
    }
  }
  // const [hour, min] = timeConverter(weatherData.dt);

  function handleSave() {
    const Coords = localStorage.getItem("Coords")
      ? JSON.parse(localStorage.getItem("Coords"))
      : null;
    // console.log(Coords);
    const name = localStorage.getItem("name")
      ? JSON.parse(localStorage.getItem("name"))
      : null;
    // console.log(name)
    if (name === null) {
      localStorage.setItem("Coords", JSON.stringify(coords));
      localStorage.setItem("name", JSON.stringify(locationName));
      setStar(true);
    } else if (Coords.lat !== coords.lat && Coords.lon !== coords.lon) {
      // console.log(2);
      localStorage.setItem("Coords", JSON.stringify(coords));
      localStorage.setItem("name", JSON.stringify(locationName));
      setStar(true);
    } else {
      // console.log(3);
      localStorage.removeItem("Coords");
      localStorage.removeItem("name");
      setStar(false);
    }
  }

  return (
    <div className="App-Header-Container">
      <div className="App-Header-Left">
        <div className="App-Header-Img">
          <img
            src={state}
            alt={"backdrop"}
            className="App-Header-ImgBackBlur"
          ></img>
          <img src={state} alt={"icon"} className="App-Header-ImgIcon"></img>
        </div>
        <div className="App-Header-Temp">
          {metric === "m/s" ? weatherData.tempC : weatherData.tempF}
          {/* {changeTemp(weatherData.temp, metricToggleVal)}° */}
        </div>
        <div className="App-Header-CF">
          {" "}
          {
            <span
              id="one"
              onClick={() => {
                setMerticToggleVal(1);
                changeSize(1);
              }}
            >
              C
            </span>
          }
          |
          <span
            id="two"
            onClick={() => {
              setMerticToggleVal(2);
              changeSize(2);
            }}
          >
            F
          </span>
        </div>
        <div className="App-Header-Des">
          <div className="App-Header-Name">
            {weatherData.name}, {weatherData.country}
          </div>
          {/* <div>Precipitation: </div> */}
          <div>Humidity: {weatherData.humidity}%</div>
          <div>
            {/* Wind: {changeSpeed(metricToggleVal, weatherData.speed)} {metric} */}
            Wind:{" "}
            {metric === "m/s"
              ? weatherData.speed
              : weatherData.speedF.toFixed(2)}{" "}
            {metric}
          </div>
          <div>Pressure: {weatherData.pressure} mbar</div>
        </div>
      </div>

      <div className="App-Header-Right">
        <div className="App-Header-Title">Weather</div>
        <div className="App-Header-DateTime">
          {/* {ChangeTimeFormat(hour)} : {min} UTC */}
          {Hour < 10? `${"0"+Hour}`: Hour} : {weatherData.min < 10?`${"0"+weatherData.min}`: weatherData.min } {letr}
        </div>
        <div className="App-Header-Des2">{weatherData.description}</div>
        <div
          className="App-Header-Save"
          onClick={() => {
            handleSave();
          }}
        >
          {star ? (
            <span>
              <i className="fa-solid fa-star"></i>
              <small>unsave</small>
            </span>
          ) : (
            <span>
              <i className="fa-regular fa-star"></i>
              <small>save</small>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
