// COMP3123 - Fullstack Development, Labtest 02
// Taylor Martin, Student ID: 100849882

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
              <h2>
                {weather.name}, {weather.sys.country}
                <img
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                  alt={weather.weather[0].description}
                  className="weather-icon"
                />
              </h2>
              <p>Current Time: {new Date().toLocaleTimeString()}</p>
              <p>Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
              <p>Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>
              <p>Humidity: {weather.main.humidity}%</p>
              <p>
                Description: {weather.weather[0].description}{' '}
              </p>
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