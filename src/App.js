import React from "react";
import Weather from "./weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HELLO REACT... </h1>
        <Weather city="Berlin" />
      </header>
    </div>
  );
}

export default App;
