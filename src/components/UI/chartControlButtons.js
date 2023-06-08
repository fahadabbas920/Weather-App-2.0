import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
import "../UI/react-tabs.css";
import AirSpeedChart from "./AirSpeedChart";
import AirPollutionChart from "./AirPollutionChart";
import TemperatureChart from "./TemperatureChart";
import { AllWeatherData } from "../../App";
import { useContext } from "react";

const ChartControlButtons = () => {
  const { AQI } = useContext(AllWeatherData);
  return (
    <div className="App-Chart-ControlBtns-Container">
      <Tabs>
        <TabList>
          <Tab>Temperature</Tab>
          <Tab>Wind</Tab>
          <Tab>Air Pollution</Tab>
        </TabList>

        <TabPanel>
          <h4>Temperature</h4>
          {/* <small>Remaining temperature forecast hours for the day</small> */}
          <TemperatureChart />
        </TabPanel>
        <TabPanel>
          <h4>Wind</h4>
          {/* <small>Remaining wind forecast hours for the day</small> */}
          <AirSpeedChart />
        </TabPanel>
        <TabPanel>
          <h4>Air Quality : {AQI}</h4>
          {/* <small>Air quality is calculated for next 6 hours</small> */}
          <AirPollutionChart />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ChartControlButtons;
