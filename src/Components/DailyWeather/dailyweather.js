import React, { useEffect, useState } from "react";

import './dailyweather.css';

export default function DailyWeather({weatherdata, measurement}) {
    const [tempmeasure, setTempMeasure] = useState();
    const [windmeasure, setWindMeasure] = useState();

    useEffect(() => {
        setTempMeasure(measurement === 'metric' ? '°C' : '°F');
        setWindMeasure(measurement === 'metric' ? 'm/s' : 'mi/h');
    }, [measurement]);

    try {
        return (
            <div className="dailyweather-container">
                {weatherdata.list.map((item, index) => {
                    let date = new Date((item.dt + weatherdata.city.timezone) * 1000);
                    return (
                        <div className="dailyweather-item">
                            <h4>{date.getDate()}, {date.getHours()}</h4>
                            <p>{item.main.temp} {tempmeasure}</p>
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