import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = () => {
  return (
    <div className="weatherbtns-wrapper">
      <Button variant="outline-info">Current Location</Button>
      <Button variant="outline-info">Japan</Button>
      <Button variant="outline-info">Singapore</Button>
      <Button variant="outline-info">Switzerland</Button>
    </div>
  );
};

export default WeatherButton;
