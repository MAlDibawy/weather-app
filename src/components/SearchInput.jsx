import React, { useEffect, useState } from "react";
import axios from "axios";
import { WEATHER_API_URL, API_KEY } from "../API";
import CurrentWeather from "./CurrentWeather";

export default function SearchInput() {
  const [inputText, setInputText] = useState("");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  const getWeatherData = (inputText) => {
    axios
      .get(`${WEATHER_API_URL}/current.json?key=${API_KEY}&q=${inputText}`)
      .then((response) => setCurrentWeather(response.data))
      .catch((err) => console.log(err));
    axios
      .get(
        `${WEATHER_API_URL}/forecast.json?key=${API_KEY}&q=${inputText}&days=3`
      )
      .then((response) => setForecastWeather(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (inputText.trim() !== "") {
      getWeatherData(inputText);
    }
  }, [inputText]);

  return (
    <>
      <div className="container">
        <input
          className="form-control searchInput"
          type="text"
          name="search"
          id="search"
          placeholder="Enter City ..."
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>
      {currentWeather ? <CurrentWeather data={currentWeather} /> : ""}
    </>
  );
}
