import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class Currentweather extends Component {
    static props = {
        weatherdata: PropTypes.object,
        measurement: PropTypes.string
    }

    render() {
        try {
            return (
                <div className="currentweather-container">
                    <p>Jelenlegi hőmérséklet: {this.props.weatherdata.main.temp} {this.props.measurement === 'metric' ? '°C' : '°F'} </p>
                    <p>Jelenlegi páratartalom: {this.props.weatherdata.main.humidity} %</p>
                </div>
            )

        } catch {
            return (
                <p></p>
            )
        }
    }
}