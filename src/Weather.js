import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo.js";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
const [city, setCity] = useState(props.defaultCity);
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
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
            date: new Date(response.data.dt * 1000)
        })

    }

    function search() {
        const apiKey = "aed21243ee272b8cf9bddb7df0466769";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search(); 
    }
    function handlyCityChange (event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit} className="form-inline">
                    <div className="row">
                        <div className="col-9">
                            <input type="search" className="form-control" placeholder="Enter a City..." autoFocus="on" onChange={handlyCityChange} />
                        </div>
                        <div className="col-3">
                            <input type="submit" className="btn btn-primary" value="Search" />
                        </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData}/> 

            </div>
        )
    }

    else {
        search();
        return "Loading"
    }
}