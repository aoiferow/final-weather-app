import React from "react";

export default function UnitConverison (props) {
    return (
        <span className="UnitConversion">
    <span className="temperature">
                {Math.round(props.celsius)}
             </span>
             <span className="units">
            <a href="blank">°c</a>
            |<a href="">°f</a>
            </span>
            </span>
  )
   
}