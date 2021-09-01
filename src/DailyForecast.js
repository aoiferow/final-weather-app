import React from "react"; 
import ReactAnimatedWeather from "react-animated-weather"; 
import WeatherImage from "./WeatherImage";


export default function DailyForecast () {
    return (
    <div className="DailyForecast" >
        <div className="row">
            <div className="col">
                <WeatherImage code="01d" size={40} />
            <p>
                21°c | 17°c
            </p>
            </div>
         <div className="col">
                <WeatherImage code="01d" size={40} />
            <p>
                21°c | 17°c
            </p>
            </div>
             <div className="col">
                <WeatherImage code="01d" size={40} />
            <p>
                21°c | 17°c
            </p>
            </div>
             <div className="col">
                <WeatherImage code="01d" size={40} />
            <p>
                21°c | 17°c
            </p>
            </div>
             <div className="col">
                <WeatherImage code="01d" size={40} />
            <p>
                21°c | 17°c
            </p>
            </div>
            
        </div>
    </div>
    )
}
