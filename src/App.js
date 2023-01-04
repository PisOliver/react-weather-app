import React from "react";
import { Component } from "react";
import "./App.css";
import env from "react-dotenv";
import Weatherscreen from "./Components/WeatherScreen/weatherscreen";
import Searchbar from "./Components/Searchbar/searchbar";

export default class App extends Component {
  state = {
    city: "Budapest",
    longitude: 0,
    latitude: 0,
    measurement: 'metric'
  };

  componentDidMount() {
    this.getCityData();
  }

  componentDidUpdate () {
    this.getCityData();
  }

  getCityData = () => {
    return new Promise((resolve, reject) => {
      fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${this.state.city}&appid=${env.WEATHER_API_KEY}`)
        .then((resp) => resp.json())
        .then((data) => this.setState({longitude : data[0].lon, latitude : data[0].lat}));
    })
  }

  #update = async (newcityname) => {
    await this.setState({city: newcityname});
  }

  #updatemeasurement = async (newmeasurement) => {
    await this.setState({measurement : newmeasurement});
    console.log(this.state.measurement);
  }

  render() {
    return (
      <div className="App">
        <Searchbar cityname={this.state.city} citychanged={this.#update} measurement={this.state.measurement} measurementchanged={this.#updatemeasurement}/>
        <Weatherscreen lon={this.state.longitude} lat={this.state.latitude} measurement={this.state.measurement}/>
      </div>
    );
  }
}
