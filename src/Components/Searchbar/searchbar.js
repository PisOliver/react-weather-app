import React from "react";
import { Component } from "react";
import PropTypes from 'prop-types';

import './searchbar.css';

export default class Searchbar extends Component {
    static props = {
        cityname : PropTypes.string,
        citychanged : PropTypes.func
    }

    state = {
        city : this.props.cityname
    }
    render(){
        return(
            <div className="searchbar">
                <input type='text' id="citysearchbox" value={this.state.city}></input>

                <label htmlFor='metricradio'>Metric</label>
                <input type='radio' id='metricradio'/>
                
                <input type='radio' id='imperial'/>
                <label htmlFor='imperial'>Imperial</label>
            </div>
        )
    }
}