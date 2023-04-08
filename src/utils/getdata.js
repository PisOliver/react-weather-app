import axios from "axios";

async function getCityData(cityname) {
    try {
        const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${cityname}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
    
        return ({
            latitude: response.data[0].lat,
            longitude: response.data[0].lon
        })
    } catch (error) {
        console.error(error);
    }
}

async function getCurrentWeather(latitude, longitude, measurement) {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${measurement}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
    
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

async function getDailyWeatherData(latitude, longitude, unit) {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);

        return response.data;
    } catch (error) {
        
    }
}

export { getCityData, getCurrentWeather, getDailyWeatherData }