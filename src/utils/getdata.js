import axios from "axios";

function getCityData(cityname) {
    return new Promise((resolve, reject) => {
        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
            .then((response) => {
                resolve({
                    latitude: response.data[0].lat,
                    longitude: response.data[0].lon
                });
            })
            .catch((error) => {
                console.error(error.message);
                reject(error);
            })
    });
}

function getCurrentWeather(latitude, longitude, measurement) {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${measurement}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
}

export { getCityData, getCurrentWeather }