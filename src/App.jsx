import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";

function App() {
  const [weather, setWeather] = useState(null);

  // 현재 위치 가져오는 함수
  const getCurrentLocation = () => {
    // 구글 검색: Geolocation API(브라우저에서 기본적으로 제공하는 Web API)를 사용해서 현재 위치를 가져올 수 있다.
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  // 그 위치의 날씨 정보 가져오는 함수
  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log("data", data);
    setWeather(data);
  };

  useEffect(() => {
    // 현재 위치를 가져오는 함수 실행
    getCurrentLocation();
  }, []);

  return (
    <div>
      <div className="l_wrapper">
        <WeatherBox weather={weather} />
        <WeatherButton />
      </div>
    </div>
  );
}

export default App;
