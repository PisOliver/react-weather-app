import React, { useEffect, useState } from "react";

import './dailyweather.css';

export default function DailyWeather({weatherdata, measurement}) {
    const [tempmeasure, setTempMeasure] = useState();
    // const [windmeasure, setWindMeasure] = useState();

    useEffect(() => {
        setTempMeasure(measurement === 'metric' ? '°C' : '°F');
        // setWindMeasure(measurement === 'metric' ? 'm/s' : 'mi/h');
    }, [measurement]);

    try {
        return (
            <div className="dailyweather-container">
                {weatherdata.list.map((item, index) => {
                    let date = new Date((item.dt + weatherdata.city.timezone) * 1000);
                    let dateoptions = {
                        weekday: 'short',
                        day : 'numeric',
                        month : 'short'
                    }
                    let formateddate = date.toLocaleDateString('en-US', dateoptions);
                    return (
                        <div className="dailyweather-item">
                            <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={item.weather[0].description}/>

                            <div className="weather-description-text">{item.weather[0].description}</div>

                            <div className="weather-hour-text">{date.getHours()}</div>

                            <div className="weather-date-text">{formateddate}</div>

                            <div className="weather-temp-text">{item.main.temp}{tempmeasure}</div>
                        </div>
                    )
                })}
            </div>
        )

    } catch {
        return (
            <></>
        )
    }
}