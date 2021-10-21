import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo.js";
import DailyForecast from "./DailyForecast.js";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [city, setCity] = useState(props.defaultCity);
    const [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            coordinates: response.data.coord, 
            temperature: response.data.main.temp,
            tempHigh: response.data.main.temp_max,
            tempLow: response.data.main.temp_min,
            wind: response.data.wind.speed,
            city: response.data.name,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            date: new Date(response.data.dt * 1000)
        })

    }

    function search() {
        const apiKey = "aed21243ee272b8cf9bddb7df0466769";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse);
    }

    // function currentLocation(position) {
    //     const apiKey = "aed21243ee272b8cf9bddb7df0466769";
    //      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    //     axios.get(apiUrl).then(handleResponse);
    // }

    function handleSubmit(event) {
        event.preventDefault();
        search(); 
    }
    function handlyCityChange (event) {
        setCity(event.target.value);
    }
    // function handleCurrent (event) {
    //     event.preventDefault();
    //     navigator.geolocation.getCurrentPosition(currentLocation);
        
    // } 
    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit} className="form-inline">
                    <div className="row">
                        <div className="col-6">
                            <input type="search" className="form-control" placeholder="Enter a City..." autoFocus="on" onChange={handlyCityChange} />
                        </div>
                        <div className="col-3">
                            <input type="submit" className="btn btn-primary" value="Search" />
                        </div>
                        <div className="col-3">
                            {/* <input type="button" onClick={handleCurrent} className="btn btn-primary" value="Current Location" /> */}
                        </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData}/> 
                <hr />
                <DailyForecast coordinate={weatherData.coordinates}/>

            </div>
        )
    }

    else {
        search();
        return "Loading"
    }
}