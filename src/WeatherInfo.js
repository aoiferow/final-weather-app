import React from "react";
import FormattedDate from "./FormattedDate";


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
                        <ul>
                            <li>
                                <span className="temperature">
                                    {Math.round(props.data.temperature)}
                                </span>
                                <span className="units">

                                    <a href="blank">°c</a>
                                    {/* |<a href="">°f</a> */}
                                </span>
                            </li>
                            <li>
                                High: {Math.round(props.data.tempHigh)}°C
                            </li>
                            <li>
                                Low: {Math.round(props.data.tempLow)}°C
                            </li>
                        </ul>
                    </div>
                    <div className="col-4" >
                        <img src={props.data.iconUrl} alt={props.data.description} />
                    </div>
                    <div className="col-4" >
                        <ul>
                            {/* <li>
                                Precipitation: 7%
                            </li> */}
                            <li>
                                Humidity: {props.data.humidity}%
                            </li>
                            <li>
                                Wind: {props.data.wind} km/h
                            </li>
                        </ul>
                    </div>
                </div>
    </div>)
}