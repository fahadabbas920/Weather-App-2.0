import { useContext, useRef } from "react";
import { AllWeatherData } from "../../App";


const Navbar = () => {
  const inputNameRef = useRef();
  const {
    // error,
    setCoords,
    setError,
    setLocationName,
    locationName,
    liveCoords,
    setStar,
  } = useContext(AllWeatherData);

  function HandleSearch() {

    if (!inputNameRef.current.value) {
      // setError("Please Enter Name")
      console.log("Please Enter Name");
    } else if (inputNameRef.current.value === locationName) {
      console.log("name already there");
    } else {
      // console.log(inputNameRef.current.value);
      setLocationName(inputNameRef.current.value);
      const name = localStorage.getItem("name")
      if(name === inputNameRef.current.value){
        setStar(true)
      }
    }
  }

  function handleLivLoc() {
    if (liveCoords.lat === null) {
      setError("Can't set live coords, Enable Live Location");
      console.log("Can't set live coords, Enable Live Location");
    } else {
      setCoords(liveCoords);
    }
  }
  return (
    <nav className="App-Navbar-Container">
     <div className="App-Navbar-Left"><label htmlFor="search" className="App-Navbar-Label">Weather Station</label>
      </div>
      <div className="App-Navbar-Right">
      <input
      className=" App-Navbar-Input"
        id="search-Bar"
        type="text"
        name="search"
        placeholder="Search Location"
        ref={inputNameRef}
      />
      <button
      className="App-Navbar-Btn App-Navbar-SearchBtn "
        type="button"
        onClick={() => {
          HandleSearch();
        }}
      >
        Search
      </button>
      <button
      className="App-Navbar-Btn App-Navbar-LiveBtn"
        onClick={() => {
          handleLivLoc();
        }}
      >
        Live
      </button>
      </div>
    </nav>
  );
};

export default Navbar;
