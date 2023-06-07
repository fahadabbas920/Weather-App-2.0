import { AllWeatherData } from "../../App";
import { useContext, useEffect } from "react";

const ErrorDiv = () => {
    const {error} = useContext(AllWeatherData);

    useEffect(()=>{

    },[error])
    return ( 
        <div className="App-Error-Container">
            {error && <h6 className="App-Error-Title">{error}</h6>}
        </div>
     );
}
 
export default ErrorDiv;