import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherImage from "./WeatherImage";
import UnitConversion from "./UnitConversion";


export default function WeatherInfo(props) {
    return(<div className="WeatherInfo">
<h1>
                    {props.data.city}
                </h1>
                <ul>
                    <li>
                        <FormattedDate date={props.data.date} />
                    </li>
                    <li className="text-capitalize">
                        {props.data.description}
                    </li>
                </ul>
                <div className="row">
                    <div className="col-4" >
                        <UnitConversion celsius={props.data.temperature} high= {props.data.tempHigh} low={props.data.tempLow}/>
                        
                    </div>
                    <div className="col-4" >
                        <WeatherImage code={props.data.icon} size={100} />
                    </div>
                    <div className="col-4" >
                        <ul>
                            <li>
                            <span className="temperature">
                                  
                            </span>  
                            </li>
                            <li>
                                Humidity: {props.data.humidity}%
                            </li>
                            <li>
                                Wind: {Math.round(props.data.wind)} km/h
                            </li>
                        </ul>
                    </div>
                </div>
    </div>)
}