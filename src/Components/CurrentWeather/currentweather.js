import React, { useEffect, useState } from "react";
import CurrentWeatherDetails from "./Details/currentweatherdetails";

import './currentweather.css';

export default function CurrentWeather({weatherdata, measurement}) {
    const [tempmeasure, setTempMeasure] = useState();
    const [windmeasure, setWindMeasure] = useState();

    useEffect(() => {
        setTempMeasure(measurement === 'metric' ? '°C' : '°F');
        setWindMeasure(measurement === 'metric' ? 'm/s' : 'mi/h');
    }, [measurement]);

    try {
        return (
            <div className="currentweather-container">
                <h2>{weatherdata.name}, {weatherdata.sys.country}</h2>
                <h3>{weatherdata.main.temp} {tempmeasure} </h3>
                <p>Feels like {weatherdata.main.feels_like} {tempmeasure}</p>
                
                <CurrentWeatherDetails weatherdata={weatherdata} tempmeasure={tempmeasure} windmeasure={windmeasure} />
            </div>
        )

    } catch {
        return (
            <></>
        )
    }
}