import React, { useState } from "react";

export default function UnitConversion (props) {
    const [unit, setUnit ] = useState("celsius");
    function convertToFahrenheit(event) { 
        event.preventDefault();
        setUnit("fahrenheit");
    };

    function convertToCelsius(event) { 
        event.preventDefault();
        setUnit("celsius");
    };

    function fahrenheit () {
    return (props.celsius *9/5)+32;
    };

    function fahrenheitHigh () {
    return (props.high *9/5)+32;
    };

    function fahrenheitLow () {
    return (props.low *9/5)+32;
    };

    if (unit === "celsius") {    
        return ( <span className="UnitConversion">
            <ul>
             <li>
                            <span className="temperature">
                {Math.round(props.celsius)}
             </span>
             <span className="units">
            °c|
            <a href="/" onClick={convertToFahrenheit}>
                °f
                </a>
            </span>       
                            </li>
                            <li>
                                High: {Math.round(props.high)}°c
                            </li>
                            <li>
                                Low: {Math.round(props.low)}°c
                            </li>
                        </ul>
       
    
            </span>
            
  );}
  else {
      return ( 
      <span className="UnitConversion">
           <ul>
             <li>
    <span className="temperature">
                {Math.round(fahrenheit())}
             </span>
             <span className="units">
            <a href="/" onClick={convertToCelsius}>°c</a>|°f
            </span>
              </li>
                            <li>
                                High: {Math.round(fahrenheitHigh())}°f
                            </li>
                            <li>
                                Low: {Math.round(fahrenheitLow())}°f
                            </li>
                        </ul>
       
    
            </span>
  );

}
    }