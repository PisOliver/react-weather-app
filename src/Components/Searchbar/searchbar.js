import React from "react";
import { Component } from "react";
import PropTypes from 'prop-types';

import './searchbar.css';

export default class Searchbar extends Component {
    static props = {
        cityname : PropTypes.string,
        citychanged : PropTypes.func,
        measurement : PropTypes.string,
        measurementchanged : PropTypes.func
    }

    state = {
        city : this.props.cityname,
        enteredcityname : "",
        measurement : this.props.measurement
    }

    changeCity(event) {
        this.setState({enteredcityname : event.target.value});
    }

    render(){
        return(
            <div className="searchbar">
                <input type='text' id="citysearchbox" placeholder="City" onChange={this.changeCity.bind(this)} />

                <button id="searchcitybutton" onClick={() => this.props.citychanged(this.state.enteredcityname)}>Search</button>

                <label htmlFor='metricradio'>Metric</label>
                <input type='radio' id='metricradio' checked={this.props.measurement === 'metric'} onChange={() => this.props.measurementchanged('metric')} />
                
                <input type='radio' id='imperial' checked={this.props.measurement === 'imperial'} onChange={() => this.props.measurementchanged('imperial')}/>
                <label htmlFor='imperial'>Imperial</label>
            </div>
        )
    }
}