import React, { useEffect, useState } from "react";

import Weatherscreen from "./Components/WeatherScreen/weatherscreen";
import Searchbar from "./Components/Searchbar/searchbar";

import "./App.css";
import { getCityData } from "./utils/getdata";

export default function App() {
  const [city, setCity] = useState('Budapest');
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [measurement, setMeasurement] = useState('metric');

  useEffect(() => {
    getCityData(city).then((data) => {
      setLatitude(data.latitude);
      setLongitude(data.longitude);
    });
  }, [city, longitude, latitude]);

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