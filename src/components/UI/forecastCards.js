import { useContext } from "react";
import { AllWeatherData } from "../../App";

const ForeCastCards = () => {
  const { forecastData, weatherData, metric } = useContext(AllWeatherData);
  let forecastArray = [weatherData];
  let temp = weatherData.dayName;
  forecastData.forEach((data) => {
    if (temp !== data.dayName && data.hour === "12 PM") {
      forecastArray.push(data);
      temp = data.dayName;
    }
  });
  return (
    <div className="App-Card-Array-Container">
      {forecastArray.map((data) => {
        return (
          <div className="App-Card-Container" key={data.dt}>
            <div className="App-Card-Day">{data.dayName}</div>
            <div className="App-Card-Img">
              {data.icon !== "NaN" && (
                <img
                  src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
                  alt="cat"
                />
              )}
            </div>
            <div className="App-Card-Des">{data.description}</div>
            <div className="App-Card-Temp">
              {metric === "km/h" ? data.tempC : data.tempF}°
            </div>
            {/* <div className="App-Card-Temp-">93</div> */}
          </div>
        );
      })}
    </div>
  );
};

export default ForeCastCards;
