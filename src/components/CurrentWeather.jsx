import React from "react";
import test from "/test.webp";
export default function CurrentWeather({ currentWeather }) {
  return (
    <>
      <div className="container">
        <div className="weather mx-auto">
          <div className="weather-header w-100">
            <h3>Current Weather</h3>
          </div>

          <div className="d-flex justify-content-between">
            <h5>{currentWeather.location.name}</h5>
            <p>{currentWeather.location.localtime}</p>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <p className="temp">
              {currentWeather.current.temp_c}
              <sup>o</sup>C
            </p>
            <p>{currentWeather.current.condition.text}</p>
            <img src={currentWeather.current.condition.icon} alt="testIcon" />
          </div>
          <div className="d-flex">
            <p className="me-5">RealFeel</p>
            <p className="px-4">
              {currentWeather.current.feelslike_c}
              <sup>o</sup>C
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
