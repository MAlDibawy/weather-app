import React from "react";

export default function ForecastedDayWeather({ data }) {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date(data.date);
  return (
    <div className="weather mx-auto">
      <div className="weather-header w-100"></div>

      <div className="d-flex justify-content-between">
        <p>{weekday[currentDate.getDay()]}</p>
        <p>{currentDate.getDate() + " " + months[currentDate.getMonth()]}</p>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <p className="temp">
          {data.day.maxtemp_c}
          <sup>o</sup>C<sub className="ps-1">Hi</sub>
        </p>

        <p>{data.day.condition.text}</p>
        <img src={data.day.condition.icon} alt="weather condition" />
      </div>
      <div className="d-flex">
        <p className="me-5">
          {data.day.mintemp_c}
          <sup>o</sup>C<sub className="ps-1">Lo</sub>
        </p>
      </div>
    </div>
  );
}
