import { useContext } from "react";
import { AllWeatherData } from "../../App";
import { timeConverter } from "../SmallComponents/funcLibrary";

const Test = () => {

    const {forecastData} = useContext(AllWeatherData)

    const [dayName,time,month,year,hour,min,sec] = timeConverter(forecastData[0].dt)


    // console.log(forecastData[0].dt)
    // console.log(dayName,time,month,year,hour,min,sec)
    console.log(dayName,time,month,year,hour,min,sec)
    


    return ( 
        <></>
     );
}
 
export default Test;