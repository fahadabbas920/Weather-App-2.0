import { useContext, useState, useEffect } from "react";
import { AllWeatherData } from "../../App";

const StackButtons = () => {
  const { weatherData, forecastData, metric } = useContext(AllWeatherData);

  console.log(forecastData)
  const [state, setState] = useState({
    grndLvl: "Not Available",
    seaLvl: "Not Available",
    gustF: "Not Available",
    gustC: "Not Available",
  });
  
  useEffect(() => {
    if (forecastData.length !== 0) {
      setState({
        grndLvl: forecastData[0].grnd_level ? forecastData[0].grnd_level : "Not available",
        seaLvl: forecastData[0].sea_level ? forecastData[0].sea_level : "Not available",
        gustF: forecastData[0].gustF ? forecastData[0].gustF : "Not available",
        gustC: forecastData[0].gustC ? forecastData[0].gustC : "Not available",
      });
    }
  }, [forecastData]);
  

  return (
    <section className="App-StackBtns-Container">
  <div className="App-Stack-Btn">
    <div className="App-Stack-Btn-Title">
      Humidity <i className="fa-solid fa-droplet"></i>
    </div>
    <div className="App-Stack-Btn-Value">{weatherData.humidity}%</div>
  </div>
  <div className="App-Stack-Btn">
    <div className="App-Stack-Btn-Title">
      Pressure <i className="fa-solid fa-gauge"></i>
    </div>
    <div className="App-Stack-Btn-Value">{weatherData.pressure} mbar</div>
  </div>
  <div className="App-Stack-Btn">
    <div className="App-Stack-Btn-Title">
      Clouds <i className="fa-solid fa-cloud"></i>
    </div>
    <div className="App-Stack-Btn-Value">{weatherData.clouds}%</div>
  </div>
  <div className="App-Stack-Btn">
    <div className="App-Stack-Btn-Title">
      Weather <i className="fa-solid fa-mountain-sun"></i>
    </div>
    <div className="App-Stack-Btn-Value">{weatherData.main}</div>
  </div>
  <div className="App-Stack-Btn">
    <div className="App-Stack-Btn-Title">
      Wind Degree <i className="fa-solid fa-arrow-turn-up"></i>
    </div>
    <div className="App-Stack-Btn-Value">{weatherData.deg}°</div>
  </div>
  <div className="App-Stack-Btn">
    <div className="App-Stack-Btn-Title">
      Feels Like <i className="fa-solid fa-temperature-high"></i>
    </div>
    <div className="App-Stack-Btn-Value">
      {metric === "km/h" ? weatherData.feels_likeC : weatherData.feels_likeF}
    </div>
  </div>
  <div className="App-Stack-Btn">
    <div className="App-Stack-Btn-Title">
      Gust <i className="fa-solid fa-wind"></i>
    </div>
    <div className="App-Stack-Btn-Value">
      {metric === "km/h" ? state.gustC : state.gustF} {metric}
    </div>
  </div>
  <div className="App-Stack-Btn">
    <div className="App-Stack-Btn-Title">
      Grnd Pressure <i className="fa-solid fa-mountain-city"></i>
    </div>
    <div className="App-Stack-Btn-Value">
      {state.grndLvl ? state.grndLvl : "Not available"} hPa
    </div>
  </div>
  <div className="App-Stack-Btn">
    <div className="App-Stack-Btn-Title">
      Sea Pressure <i className="fa-solid fa-water"></i>
    </div>
    <div className="App-Stack-Btn-Value">
      {state.seaLvl ? state.seaLvl : "Not available"} hPa
    </div>
  </div>
</section>

  );
};

export default StackButtons;
// <section className="App-StackBtns-Container">
//       <div className="App-Stack-Btn">
//         <div className="App-Stack-Btn-Title">
//           Humidity <i className="fa-solid fa-droplet"></i>
//         </div>
//         <div className="App-Stack-Btn-Value">{weatherData.humidity}</div>
//       </div>
//       <div className="App-Stack-Btn">
//         <div className="App-Stack-Btn-Title">
//           Pressure <i className="fa-solid fa-gauge"></i>
//         </div>
//         <div className="App-Stack-Btn-Value"> {weatherData.pressure} mbar</div>
//       </div>
//       <div className="App-Stack-Btn">
//         <div className="App-Stack-Btn-Title">
//           Clouds <i className="fa-solid fa-cloud"></i>
//         </div>
//         <div className="App-Stack-Btn-Value">{weatherData.clouds}%</div>
//       </div>

//       <div className="App-Stack-Btn">
//         <div className="App-Stack-Btn-Title">
//           Weather <i className="fa-solid fa-mountain-sun"></i>
//         </div>
//         <div className="App-Stack-Btn-Value">{weatherData.main}</div>
//       </div>
//       <div className="App-Stack-Btn">
//         <div className="App-Stack-Btn-Title">
//           Wind Degree <i className="fa-solid fa-arrow-turn-up"></i>
//         </div>
//         <div className="App-Stack-Btn-Value">{weatherData.deg}°</div>
//       </div>
//       <div className="App-Stack-Btn">
//         <div className="App-Stack-Btn-Title">
//           Feels Like <i className="fa-solid fa-temperature-high"></i>
//         </div>
//         <div className="App-Stack-Btn-Value">
//           {metric === "km/h"
//             ? weatherData.feels_likeC
//             : weatherData.feels_likeF}
//         </div>
//       </div>
//       <div className="App-Stack-Btn">
//         <div className="App-Stack-Btn-Title">
//           Gust <i className="fa-solid fa-wind"></i>
//         </div>
//         <div className="App-Stack-Btn-Value">
//           {metric === "km/h" ? state.gustC : state.gustF} {" "}
//            {metric}
//         </div>
//       </div>
//       <div className="App-Stack-Btn">
//         <div className="App-Stack-Btn-Title">
//           Grnd Pressure <i className="fa-solid fa-mountain-city"></i>
//         </div>
//         <div className="App-Stack-Btn-Value">
//           {state.grndLvl
//             ? state.grndLvl
//             : "Not available"}{" "}
//           hPa
//         </div>
//       </div>
//       <div className="App-Stack-Btn">
//         <div className="App-Stack-Btn-Title">
//           Sea Pressure <i className="fa-solid fa-water"></i>
//         </div>
//         <div className="App-Stack-Btn-Value">
//         {state.seaLvl
//             ? state.seaLvl
//             : "Not available"}{" "}
//           hPa
//         </div>
//       </div>
//     </section>