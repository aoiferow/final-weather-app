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
    function fahrenheit (){
return (props.celsius *9/5)+32;
    }
    if (unit === "celsius") {    
        return (

        <span className="UnitConversion">
    <span className="temperature">
                {Math.round(props.celsius)}
             </span>
             <span className="units">
            °c|
            <a href="/" onClick={convertToFahrenheit}>
                °f
                </a>
            </span>
            </span>
            
  );}
  else {
      return ( <span className="UnitConversion">
    <span className="temperature">
                {Math.round(fahrenheit())}
             </span>
             <span className="units">
            <a href="/" onClick={convertToCelsius}>°c</a>|°f
            </span>
            </span>
  );

}
    }