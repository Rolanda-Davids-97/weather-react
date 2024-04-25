import React from "react";
import axios from "axios";

export default function weather(props) {
  function showTemperature(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}°C`
    );
  }

  let units = "metric";
  let apiKey = "b28124b28c5acc252cee28bc2facf3a4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
  return <h2>Weather App</h2>;
}
