import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AirSpeedChart from "./AirSpeedChart";
import AirPollutionChart from "./AirPollutionChart";
import TemperatureChart from "./TemperatureChart";

const ChartControlButtons = () => {
  return (
    <div className="App-Chart-ControlBtns-Container">
      <Tabs>
        <TabList>
          <Tab>Temperature</Tab>
          <Tab>Wind</Tab>
          <Tab>Pollution</Tab>
        </TabList>

        <TabPanel>
          <h4>Temperature</h4>
          <TemperatureChart/>
        </TabPanel>
        <TabPanel>
          <h4>Wind</h4>
          <AirSpeedChart/>
        </TabPanel>
        <TabPanel>
          <h4>Pollution</h4>
          <AirPollutionChart/>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ChartControlButtons;
