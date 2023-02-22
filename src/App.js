import React, { useEffect, useState } from "react";

import Weatherscreen from "./Components/WeatherScreen/weatherscreen";
import Searchbar from "./Components/Searchbar/searchbar";

import "./App.css";
import { getCityData } from "./utils/getdata";

export default function App() {
  const [city, setCity] = useState();
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [measurement, setMeasurement] = useState('metric');

  useEffect(() => {
    getCityData(city).then((data) => {
      console.log(data.longitude);
      console.log(data.latitude);
      setLatitude(data.latitude);
      setLongitude(data.longitude);
    });
  }, [city]);

  const updateMeasurement = (newMeasurement) => {
    setMeasurement(newMeasurement);
  }

  const updateCity = (newCityname) => {
    setCity(newCityname);
  }


  return (
    <div className="App">
      <Searchbar cityname={city} citychanged={updateCity} measurement={measurement} measurementchanged={updateMeasurement}/>
      <Weatherscreen lon={longitude} lat={latitude} measurement={measurement}/>
    </div>
  );
}