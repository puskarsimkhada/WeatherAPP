import React, { useEffect, useState } from "react";
import axios from "axios";
const Weatherapp = () => {
  const [weather, setweather] = useState(null);
  const [error, seterror] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        seterror(false);
        const response = await axios.get(
          "http://api.weatherapi.com/v1/current.json?key=16c86a8a94ca4fa58fc94700240806&q=nepal/dhading"
        );
        // console.log(response.data);
        setweather(response.data);
      } catch (error) {
        seterror(true);
      }
    })();
  }, []);

  if (!weather) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong</h1>;
  }
  return (
    <>
      <h1>Weather App</h1>
      {weather.location && (
        <>
          <p>Location: {weather.location.name}</p>
        </>
      )}
      {weather.current && (
        <>
          <p>Temperature: {weather.current.temp_c} °C</p>
          <p>Last Updated: {weather.current.last_updated}</p>
        </>
      )}
    </>
  );
};

export default Weatherapp;
