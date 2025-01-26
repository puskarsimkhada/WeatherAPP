import React, { useEffect, useState } from "react";
import "./Myweather.css";
import cloud from "../../assets/cloud.png";
import axios from "axios";
// import search from "../../assets/search.png";
const Myweather = () => {
  const [weather, setweather] = useState(null);
  const [error, seterror] = useState(false);
  const [location, setLocation] = useState("nepal");
  const [inputSearch, setInputSearch] = useState();

  useEffect(() => {
    (async (location) => {
      try {
        seterror(false);
        const response = await axios.get(
          `http://api.weatherapi.com/v1/current.json?key=16c86a8a94ca4fa58fc94700240806&q=${location}`
        );
        // console.log(response.data);
        setweather(response.data);
      } catch (error) {
        seterror(true);
      }
    })(location);
  }, [location]);

  if (!weather) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong</h1>;
  }

  // useEffect(() => {
  //   setweather(location);
  // }, [location]);

  const handleSearch = (e) => {
    setInputSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputSearch.trim()) {
      setLocation(inputSearch.trim());
    }
  };

  return (
    <>
      <div className="master">
        <div className="weather">
          <h1>Weather</h1>
          <div className="search">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="srch"
                onChange={(e) => handleSearch(e)}
              />
              <input
                type="submit"
                name="submit"
                value="search"
                className="btnsearch"
              />
            </form>
          </div>
          <div className="container">
            <div className="picture">
              <img src={cloud} alt="Cloud" />
            </div>
            <div className="temp">
              {/* <h1>30°C</h1> */}
              {weather.current && (
                <>
                  <h1>{weather.current.temp_c} °C</h1>
                </>
              )}
            </div>
            <div className="country">
              {/* <p>Nepal</p> */}
              {weather.location && (
                <>
                  <p>{weather.location.name}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myweather;
