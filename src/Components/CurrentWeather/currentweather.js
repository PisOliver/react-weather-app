import React, { Component } from "react";
import PropTypes from 'prop-types';

import './currentweather.css';

export default class Currentweather extends Component {
    static props = {
        weatherdata: PropTypes.object,
        measurement: PropTypes.string
    }

    tempmeasure = this.props.measurement === 'metric' ? '°C' : '°F';
    windmeasure = this.props.measurement === 'metric' ? 'm/s' : 'mi/h';

    renderDetailsTable() {
        try {
            return (
                <table className="weatherdetails-table">
                    <tr>
                        <td>{this.props.weatherdata.wind.speed} {this.windmeasure}</td>
                        <td>{this.props.weatherdata.main.pressure}hPa</td>
                    </tr>
                    <tr>
                        <td>Humidity: {this.props.weatherdata.main.humidity}%</td>
                        <td>Max temp: {this.props.weatherdata.main.temp_max}{this.tempmeasure}</td>
                    </tr>

                    <tr>
                        <td>Visibility : {(this.props.weatherdata.visibility / 1000).toFixed(2)}km</td>
                        <td>Min temp: {this.props.weatherdata.main.temp_min}{this.tempmeasure}</td>
                    </tr>
                </table>
            )
        } catch {
            return (
                <p></p>
            )
        }
    }

    render() {
        try {
            return (
                <div className="currentweather-container">
                    <h3>{this.props.weatherdata.name}, {this.props.weatherdata.sys.country}</h3>
                    <h4>{this.props.weatherdata.main.temp} {this.tempmeasure} </h4>
                    <p>Feels like {this.props.weatherdata.main.feels_like} {this.tempmeasure}</p>
                    
                    {this.renderDetailsTable()}
                </div>
            )

        } catch {
            return (
                <p></p>
            )
        }
    }
}