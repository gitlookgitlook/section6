import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import { ClipLoader } from "react-spinners";

function App() {
  const [weather, setWeather] = useState(null);
  const cities = ["Japan", "Singapore", "Switzerland", "Seoul"];
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    // console.log("data", data);
    setWeather(data);
    setLoading(false);
  };

  //
  const getWeatherByCity = async (city) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    console.log("Data?", data);
    setWeather(data);
    setLoading(false);
  };

  useEffect(() => {
    // 현재 위치를 가져오는 함수 실행
    getCurrentLocation();
  }, []);

  useEffect(() => {
    // console.log("city?", city);
    if (city !== "") {
      getWeatherByCity(city);
    }
  }, [city]);

  return (
    <div>
      {loading ? (
        <div className="l_wrapper">
          <ClipLoader color="#00e1ff" loading={loading} size={150} aria-label="Loading Spinner" data-testid="loader" />
        </div>
      ) : (
        <div className="l_wrapper">
          <ClipLoader color="#00e1ff" loading={loading} size={150} aria-label="Loading Spinner" data-testid="loader" />
          <WeatherBox weather={weather} />
          <WeatherButton cities={cities} setCity={setCity} getCurrentLocation={getCurrentLocation} />
        </div>
      )}
    </div>
  );
}

export default App;
