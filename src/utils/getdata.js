import axios from "axios";

async function getCityData(cityname) {
  try {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const response = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${cityname}&appid=${apiKey}`,
    );

    return {
      latitude: response.data[0].lat,
      longitude: response.data[0].lon,
    };
  } catch (error) {
    console.error(error);
  }
}

async function getCurrentWeather(latitude, longitude, measurement) {
  try {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${measurement}&appid=${apiKey}`,
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getDailyWeatherData(latitude, longitude, unit) {
  try {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${apiKey}`,
    );

    return response.data;
  } catch (error) {}
}

export { getCityData, getCurrentWeather, getDailyWeatherData };
