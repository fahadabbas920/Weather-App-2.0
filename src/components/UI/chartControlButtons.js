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
          <TemperatureChart />
        </TabPanel>
        <TabPanel>
          <h4>Wind</h4>
          <AirSpeedChart />
        </TabPanel>
        <TabPanel>
          <h4>Air Quality : {AQI}</h4>
          <AirPollutionChart />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ChartControlButtons;
