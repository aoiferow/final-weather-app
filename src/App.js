import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (<div className="App">
    <div className="container">
      <Weather defaultCity="Boston" />
    </div>
    <footer>
      This project was coded by <a href="https://www.linkedin.com/in/aoife-rowland-641883b2/" target="_blank" rel="noreferrer">Aoife Rowland</a> and is <a href="https://github.com/aoiferow/final-weather-app" target="_blank" rel="noreferrer">Open Sourced on Github</a> and hosted by <a href="https://app.netlify.com/sites/elastic-kilby-f45335/overview" target="_blank" rel="noreferrer">Netlify</a>
    </footer>
  </div>

  );
}


