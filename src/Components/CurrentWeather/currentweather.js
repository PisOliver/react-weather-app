import React, { useEffect, useState } from "react";

import './currentweather.css';

export default function CurrentWeather({weatherdata, measurement}) {
    const [tempmeasure, setTempMeasure] = useState();
    const [windmeasure, setWindMeasure] = useState();

    useEffect(() => {
        setTempMeasure(measurement === 'metric' ? '°C' : '°F');
        setWindMeasure(measurement === 'metric' ? 'm/s' : 'mi/h');
    }, [measurement]);
    
    const renderDetailsTable = () => {
        try {
            return (
                <table className="weatherdetails-table">
                    <tr>
                        <td>{weatherdata.wind.speed} {windmeasure}</td>
                        <td>{weatherdata.main.pressure}hPa</td>
                    </tr>
                    <tr>
                        <td>Humidity: {weatherdata.main.humidity}%</td>
                        <td>Max temp: {weatherdata.main.temp_max}{tempmeasure}</td>
                    </tr>

                    <tr>
                        <td>Visibility : {(weatherdata.visibility / 1000).toFixed(2)}km</td>
                        <td>Min temp: {weatherdata.main.temp_min}{tempmeasure}</td>
                    </tr>
                </table>
            )
        } catch {
            return (
                <></>
            )
        }
    }

    try {
        return (
            <div className="currentweather-container">
                <h3>{weatherdata.name}, {weatherdata.sys.country}</h3>
                <h4>{weatherdata.main.temp} {tempmeasure} </h4>
                <p>Feels like {weatherdata.main.feels_like} {tempmeasure}</p>
                
                {renderDetailsTable()}
            </div>
        )

    } catch {
        return (
            <></>
        )
    }
}