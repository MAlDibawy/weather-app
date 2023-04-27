import React from "react";

export default function CurrentWeather({ data }) {
  return (
    <>
      <div className="container">
        <div className="weather currentWeather mx-auto">
          <div className="weather-header w-100">
            <h4 className="text-center">Current Weather</h4>
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
            <img src={data.current.condition.icon} alt="weather condition" />
          </div>
          <div className="d-flex">
            <p className="me-5">RealFeel</p>
            <p className="px-5">
              {data.current.feelslike_c}
              <sup>o</sup>C
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
