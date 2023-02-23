import React, { useEffect, useState } from "react";
import { getCurrentWeather } from "../../utils/getdata";

import Currentweather from "../CurrentWeather/currentweather";
import './weatherscreen.css';

export default function WeatherScreen({lon, lat, measurement}) {
    const [weatherdata, setWeatherdata] = useState();

    useEffect(() => {
        getCurrentWeather(lat, lon, measurement).then((response) => {
            setWeatherdata(response);
        });
    }, [lat, lon, measurement]);

    return (
        <div className="weather-container">
            <Currentweather weatherdata={weatherdata} measurement={measurement}/>
        </div>
    );
}