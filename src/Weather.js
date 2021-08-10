import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {

    const [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            tempHigh: response.data.main.temp_max,
            tempLow: response.data.main.temp_min,
            wind: response.data.wind.speed,
            city: response.data.name,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            iconUrl: "http://openweathermap.org/img/wn/01d@2x.png",
        })

    }


    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form className="form-inline">
                    <div className="row">
                        <div className="col-9">
                            <input type="search" className="form-control" placeholder="Enter a City..." autoFocus="on" />
                        </div>
                        <div className="col-3">
                            <input type="submit" className="btn btn-primary" value="Search" />
                        </div>
                    </div>
                </form>
                <h1>
                    {weatherData.city}
                </h1>
                <ul>
                    <li>
                        Wednesday 12:00pm
                    </li>
                    <li className="text-capitalize">
                        {weatherData.description}
                    </li>
                </ul>
                <div className="row">
                    <div className="col-4" >
                        <ul>
                            <li>
                                <span className="temperature">
                                    {Math.round(weatherData.temperature)}
                                </span>
                                <span className="units">

                                    <a href="blank">°c</a>
                                    {/* |<a href="">°f</a> */}
                                </span>
                            </li>
                            <li>
                                High: {Math.round(weatherData.tempHigh)}°C
                            </li>
                            <li>
                                Low: {Math.round(weatherData.tempLow)}°C
                            </li>
                        </ul>
                    </div>
                    <div className="col-4" >
                        <img src={weatherData.iconUrl} alt={weatherData.description} />
                    </div>
                    <div className="col-4" >
                        <ul>
                            {/* <li>
                                Precipitation: 7%
                            </li> */}
                            <li>
                                Humidity: {weatherData.humidity}%
                            </li>
                            <li>
                                Wind: {weatherData.wind} km/h
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    else {

        let city = "Boston";
        const apiKey = "aed21243ee272b8cf9bddb7df0466769";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse);

        return "Loading"
    }
}