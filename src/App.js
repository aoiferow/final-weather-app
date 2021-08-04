import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (<div className="App">
    <div className="container">
      <Weather defaultCity="Boston" />
    </div>
    <footer>
      This project was coded by <a href="https://github.com/aoiferow/react-weather-app" target="_blank" rel="noreferrer">Aoife Rowland</a>
    </footer>
  </div>

  );
}


