import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, setCity, getCurrentLocation }) => {
  console.log("cities?", cities);

  return (
    <div className="weatherbtns-wrapper">
      <Button
        variant="outline-info"
        onClick={() => {
          setCity("");
          getCurrentLocation();
        }}
      >
        Current Location
      </Button>
      {cities.map((item) => (
        <Button
          variant="outline-info"
          key={item}
          onClick={() => {
            setCity(item);
          }}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
