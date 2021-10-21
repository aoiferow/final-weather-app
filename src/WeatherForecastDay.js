import React from "react";
import WeatherImage from "./WeatherImage"; 


export default function WeatherForecastDay(props) {

function maxTemperature () {
let temperature = Math.round(props.data.temp.max);
return `${temperature}`;
}

function minTemperature () {
let temperature = Math.round(props.data.temp.min);
return `${temperature}`;
}

function day () {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
    return days[day];
}
return ( <div>
     <div className="WeatherForecast-day">
         <div className="ForecastDay">{day()}</div>
                <WeatherImage code={props.data.weather[0].icon} size={50} />
            <div className="temperatureForecast" >
                <p>
               <span className="forecastMax">{maxTemperature()}°c </span> | <span className="forecastMin">{minTemperature()}°c </span>
                </p>
            </div> 
        </div>
            </div>
)

}