import React from "react";

import './currentweatherdetails.css';

export default function CurrentWeatherDetails({weatherdata, windmeasure, tempmeasure}) {
    try {
        return (
            <table className="weatherdetails-table">
                <tbody>
                    <tr>
                        <td>{weatherdata.wind.speed} {windmeasure}</td>
                        <td>{weatherdata.main.pressure} hPa</td>
                    </tr>
                    <tr>
                        <td>Humidity: {weatherdata.main.humidity}%</td>
                        <td>Max temp: {weatherdata.main.temp_max}{tempmeasure}</td>
                    </tr>

                    <tr>
                        <td>Visibility : {(weatherdata.visibility / 1000).toFixed(2)}km</td>
                        <td>Min temp: {weatherdata.main.temp_min}{tempmeasure}</td>
                    </tr>
                </tbody>
            </table>
        )
    } catch {
        return (
            <></>
        )
    }
}