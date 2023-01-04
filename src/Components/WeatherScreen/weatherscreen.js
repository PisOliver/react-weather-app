import React from "react";
import { Component } from "react";
import env from "react-dotenv";

export default class Weatherscreen extends Component {
    constructor(props) {
        super(props);
        this.state = { weatherdata: null }; // initialize with null
    }

    componentDidMount() {
        this.getCurrentWeather();
    }

    componentDidUpdate(prevProps) {
        if (this.props.lat !== prevProps.lat || this.props.lon !== prevProps.lon) {
            this.getCurrentWeather();
        }
    }

    getCurrentWeather = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.props.lat}&lon=${this.props.lon}&appid=${env.WEATHER_API_KEY}`)
            .then((resp) => resp.json())
            .then((data) => this.setState({ weatherdata: data }));
    }

    renderCurrentWeather = () => {
        try {
            return (
                <div>
                    <p>Jelenlegi hőmérséklet: {this.state.weatherdata.main.temp} K </p>
                    <p>Jelenlegi páratartalom: {this.state.weatherdata.main.humidity} %</p>
                </div>
            );
        } catch (error) {
            return <p></p>;
        }
    }
    render() {
        return (
            <div className="current-weather-container">
                {this.renderCurrentWeather()}
            </div>
        );
    }
}
