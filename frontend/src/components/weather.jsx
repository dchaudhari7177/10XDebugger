import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiKey = '3e3e546e38846f06bc1e74ea591cc753';

  const fetchWeather = async () => {
    if (!city) {
      setError('Please enter a city name.');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      setError('Failed to fetch weather data. Please check the city name.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600 p-6">
      <motion.div 
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.h2 
          className="text-3xl font-bold text-gray-800 mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Weather Information
        </motion.h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.input
            type="text"
            value={city}
            onChange={handleInputChange}
            placeholder="Enter city name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition duration-300"
            whileFocus={{ scale: 1.05 }}
            required
          />
          <motion.button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Weather
          </motion.button>
        </form>
        {loading && <div className="mt-4">Loading...</div>}
        {error && <div className="mt-4 text-red-500">{error}</div>}
        {weather && (
          <motion.div 
            className="mt-6 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold">{weather.name}</h3>
            <p className="text-xl">Temperature: {weather.main.temp} °C</p>
            <p className="text-lg">Weather: {weather.weather[0].description}</p>
            <p className="text-lg">Humidity: {weather.main.humidity} %</p>
            <p className="text-lg">Wind Speed: {weather.wind.speed} m/s</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Weather;
