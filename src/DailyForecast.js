import React from "react"; 
import ReactAnimatedWeather from "react-animated-weather"; 
import WeatherImage from "./WeatherImage";
import "./DailyForecast.css"


export default function DailyForecast () {
    return (
    <div className="DailyForecast" >
        <div className="row">
            <div className="col">
                <div className="ForecastDay">Sat</div>
                <WeatherImage code="01d" size={40} />
            <div className="temperatureForecast" >
                <p>
               <span className="forecastMax">21°c </span> | <span className="forecastMin">17°c </span>
                </p>
            </div> 
            </div>
         <div className="col">
                <div className="ForecastDay">Sat</div>
                <WeatherImage code="01d" size={40} />
            <div className="temperatureForecast" >
                <p>
               <span className="forecastMax">21°c </span> | <span className="forecastMin">17°c </span>
                </p>
            </div> 
            </div>
             <div className="col">
                 <div className="ForecastDay">Sat</div>
                <WeatherImage code="01d" size={40} />
            <div className="temperatureForecast" >
                <p>
               <span className="forecastMax">21°c </span> | <span className="forecastMin">17°c </span>
                </p>
            </div> 
            </div>
             <div className="col">
                 <div className="ForecastDay">Sat</div>
                <WeatherImage code="01d" size={40} />
           <div className="temperatureForecast" >
                <p>
               <span className="forecastMax">21°c </span> | <span className="forecastMin">17°c </span>
                </p>
            </div> 
            </div>
             <div className="col">
                 <div className="ForecastDay">Sat</div>
                <WeatherImage code="01d" size={40} />
            <div className="temperatureForecast" >
                <p>
               <span className="forecastMax">21°c </span> | <span className="forecastMin">17°c </span>
                </p>
            </div> 
            </div>
            
        </div>
    </div>
    )
}
