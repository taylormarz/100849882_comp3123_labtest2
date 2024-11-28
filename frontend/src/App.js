import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await axios.get('http://localhost:8080/api/weather', {
        params: {
          city: 'Toronto',
          country: 'CA',
        },
      });
      setWeather(response.data);
    };

    fetchWeather();
  }, []);

  return (
    <>
      <header className="app-header">
        <h1>Toronto Weather Application</h1>
      </header>
      <div className="weather-container">
        {weather && (
          <div className="weather-panels-container">
            <div className="weather-panel">
              <h2>{weather.name}, {weather.sys.country}</h2>
              <p>Current Time: {new Date().toLocaleTimeString()}</p>
              <p>Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
              <p>Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>
              <p>Description: {weather.weather[0].description}</p>
              <p>Humidity: {weather.main.humidity}%</p>
            </div>

            <div className="weather-panel">
              <p>Current Temperature: {weather.main.temp}°C</p>
              <p>Feels Like: {weather.main.feels_like}°C</p>
              <p>Conditions: {weather.weather[0].main}</p>
              <p>High: {weather.main.temp_max}°C</p>
              <p>Low: {weather.main.temp_min}°C</p>
              <p>Wind Speed: {weather.wind.speed} m/s</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;