import React from "react";
import test from "/test.webp";
export default function CurrentWeather({ data }) {
  return (
    <>
      <div className="container">
        <div className="weather mx-auto">
          <div className="weather-header w-100">
            <h3>Current Weather</h3>
          </div>

          <div className="d-flex justify-content-between">
            <h5>{data.location.name}</h5>
            <p>{data.location.localtime}</p>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <p className="temp">
              {data.current.temp_c}
              <sup>o</sup>C
            </p>
            <p>{data.current.condition.text}</p>
            <img src={data.current.condition.icon} alt="testIcon" />
          </div>
          <div className="d-flex">
            <p className="me-5">RealFeel</p>
            <p className="px-4">
              {data.current.feelslike_c}
              <sup>o</sup>C
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
