import React, { useEffect, useState } from "react";
import axios from "axios";
import { WEATHER_API_URL, API_KEY } from "../API";
import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";
import { useRef } from "react";

export default function SearchInput() {
  const [inputText, setInputText] = useState("");
  const inputRef = useRef(null);
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
      .then((response) =>
        setForecastWeather(response.data.forecast.forecastday)
      )
      .catch((err) => console.log(err));
  };

  const leaveInput = (e) => {
    if (e.key === "Enter") inputRef.current.blur();
  };

  useEffect(() => {
    inputRef.current.focus();
    if (inputText.trim() !== "") {
      getWeatherData(inputText);
    }
  }, [inputText]);

  return (
    <>
      <div className="container">
        <input
          className="form-control searchInput"
          ref={inputRef}
          type="text"
          name="search"
          id="search"
          placeholder="Enter City ..."
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => leaveInput(e)}
        />
      </div>
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecastWeather && <ForecastWeather data={forecastWeather} />}
    </>
  );
}
