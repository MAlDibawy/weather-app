import React from "react";
import ForecastedDayWeather from "./ForecastedDayWeather";
export default function ForecastWeather({ data }) {
  return (
    <>
      <div className="container">
        <div className="row gx-3 py-2">
          {data.map((day) => {
            return (
              <div className="col-md-4">
                <ForecastedDayWeather data={day} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
