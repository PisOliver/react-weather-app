import React, { useEffect, useState } from "react";
import { getCurrentWeather, getDailyWeatherData } from "../../utils/getdata";

import Currentweather from "../CurrentWeather/currentweather";
import DailyWeather from "../DailyWeather/dailyweather";
import './weatherscreen.css';

export default function WeatherScreen({lon, lat, measurement}) {
    const [weatherdata, setWeatherdata] = useState();
    const [dailyWeatherData, setDailyWeatherData] = useState();

    useEffect(() => {
        getCurrentWeather(lat, lon, measurement).then((response) => {
            setWeatherdata(response);
        });

        getDailyWeatherData(lat, lon, measurement).then((response) => {
            setDailyWeatherData(response);
        })
    }, [lat, lon, measurement]);

    return (
        <div className="weather-container">
            <Currentweather weatherdata={weatherdata} measurement={measurement}/>
            <DailyWeather weatherdata={dailyWeatherData} measurement={measurement}/>
        </div>
    );
}