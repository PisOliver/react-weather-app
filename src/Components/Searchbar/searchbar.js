import React, { useState } from "react";

import './searchbar.css';

export default function Searchbar({cityname, citychanged, measurement, measurementchanged}) {
    const [enteredCityname, setEnteredCityname] = useState();

    const changeCity = (event) => {
        setEnteredCityname(event.target.value);
    }

    return(
            <div className="searchbar">
                <input type='text' id="citysearchbox" placeholder="City" onChange={changeCity.bind(this)} />

                <button id="searchcitybutton" onClick={() => citychanged(enteredCityname)}>Search</button>

                <label htmlFor='metricradio'>Metric</label>
                <input type='radio' id='metricradio' checked={measurement === 'metric'} onChange={() => measurementchanged('metric')} />
                
                <input type='radio' id='imperial' checked={measurement === 'imperial'} onChange={() => measurementchanged('imperial')}/>
                <label htmlFor='imperial'>Imperial</label>
            </div>
        )
}