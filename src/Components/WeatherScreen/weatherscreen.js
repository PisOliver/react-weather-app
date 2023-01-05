import React from "react";
import { Component } from "react";
import env from "react-dotenv";

import Currentweather from "../CurrentWeather/currentweather";
import './weatherscreen.css';

export default class Weatherscreen extends Component {
    constructor(props) {
        super(props);
        this.state = { weatherdata: null }; // initialize with null
    }

    componentDidMount() {
        this.getCurrentWeather();
    }

    componentDidUpdate(prevProps) {
        if(prevProps !== this.props) {
            this.getCurrentWeather()
        }
    }

    getCurrentWeather = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.props.lat}&lon=${this.props.lon}&units=${this.props.measurement}&appid=${env.WEATHER_API_KEY}`)
            .then((resp) => resp.json())
            .then((data) => this.setState({ weatherdata: data }));
    }

    render() {
        return (
            <div className="weather-container">
                <Currentweather weatherdata={this.state.weatherdata} measurement={this.props.measurement}/>
            </div>
        );
    }
}
