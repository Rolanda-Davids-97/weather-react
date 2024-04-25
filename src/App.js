import Weather from "./weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>WEATHER APP</h1>
      <Weather />
      <p>
        <small>
          <a
            href="https://github.com/Rolanda-Davids-97/weather-react"
            target="-blank"
          >
            Open-source code
          </a>
          , by Rolanda Davids{" "}
        </small>
      </p>
    </div>
  );
}
