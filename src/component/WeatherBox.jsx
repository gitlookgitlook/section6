import React from "react";

const WeatherBox = ({ weather }) => {
  console.log("weather?", weather);

  // 섭씨를 화씨로 변환하는 함수
  const celsiusToFahrenheit = (celsius) => {
    return ((celsius * 9) / 5 + 32).toFixed(1);
  };

  return (
    <div className="weatherbox_wrapper">
      <div>{weather && weather.name}</div>
      <h2>
        {weather?.main.temp}°C / {weather?.main.temp && celsiusToFahrenheit(weather.main.temp)}°F
      </h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  );
};

export default WeatherBox;
