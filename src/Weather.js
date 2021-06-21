import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="frame">
      <form className="form">
        <input
          className="form-search"
          type="search"
          placeholder="Enter a city"
        />
        <input className="form-submit" type="submit" value="Search" />
      </form>
      <div className="row">
        <div className="col city">
          {" "}
          <h2>Lisbon </h2>{" "}
        </div>
        <div className="col country">PT</div>
        <div className="col temp-conversion">
          <a href="/" className="celsius-conv">
            °C
          </a>{" "}
          |{" "}
          <a href="/" className="fahrenheit-conv">
            °F
          </a>
        </div>
      </div>
      <div className="last-update">Last updated: Monday 21 June 20:13</div>
      <div className="current-weather">
        <div className="row">
          <div className="col">image</div>
          <div className="col">
            <ul>
              <li className="current-temp">
                {" "}
                <h1>24°C</h1>
              </li>
              <li className="current-description">Sunny</li>
              <li className="feels-like">Feels like: 22°C</li>
              <li>
                {" "}
                img <span className="current-max-temp">26</span>°C img{" "}
                <span className="current-min-temp">17</span>°C
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col">img Wind: 20 km/h</div>
          <div className="col">img Humidity: 55%</div>
        </div>
      </div>
    </div>
  );
}
