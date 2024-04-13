'use client';

import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

// pages/projects/weatherapp.tsyarn add typed.jsx

import React from 'react';
import { useState } from 'react';

const WeatherApp: React.FC = () => {
  const [hasInput, setHasInput] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [chatResponse, setChatResponse] = useState('');
  const chatResponseRef = useRef(null);
  const [weatherData, setWeatherData] = useState({
    icon: '',
    city: '',
    date: '',
    curr_temp: 0,
    min: 0,
    max: 0,
    feels_like: 0,
    windSpeed: 0,
  });

  useEffect(() => {
    if (chatResponseRef.current) {
      const typed = new Typed(chatResponseRef.current, {
        strings: [chatResponse],
        typeSpeed: 20,
        showCursor: false,
      });

      return () => {
        typed.destroy();
      };
    }
  }, [chatResponse]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    setHasInput(true);

    try {
      console.log('submitted');
      console.log('input value: ', inputValue);

      const response = await fetch('http://127.0.0.1:5000/result', {
        method: 'POST',
        body: inputValue,
      });

      if (response.ok) {
        const data = await response.json();
        const weather_data = data.weather_data;
        console.log(weather_data);
        // Update the weatherData object with the data received from the API
        console.log(weather_data.city_name);
        console.log(weather_data.temperatures.current);
        console.log(weather_data.wind.speed);
        setWeatherData({
          icon: weather_data.icon,
          city: weather_data.city_name,
          date: weather_data.date,
          curr_temp: Math.round(weather_data.temperatures.current),
          min: Math.round(weather_data.temperatures.min),
          max: Math.round(weather_data.temperatures.max),
          feels_like: Math.round(weather_data.temperatures.feels_like),
          windSpeed: weather_data.wind.speed,
        });
        const chatResponse = data.chat_response;
        setChatResponse(chatResponse);
      }
    } catch (error) {
      console.error('Error processing URL:', error);
    }
  };

  const gainedFocus = () => {
    setShowPlaceholder(false);
  };

  const lostFocus = () => {
    setShowPlaceholder(true);
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      {!hasInput ? (
        <div>
          <div className="text-slate-950">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onClick={gainedFocus}
              onBlur={lostFocus}
              placeholder={showPlaceholder ? 'Please Enter a City' : ''}
            />
          </div>
          <div className="justify-center flex-col flex mt-4">
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-6">
          <div className="col-span-2">
            <div className="bg-black-500 rounded-lg text-center">
              <div className="flex justify-center">
                <img src={`/static/images/${weatherData.icon}.png`} alt="Weather Icon" />
              </div>
              <div className="text-2xl font-bold mb-2">{weatherData.city}</div>
              <div className="text-lg text-slate-50 mb-4">{weatherData.date}</div>
              <div className="text-5xl font-bold mb-2">{weatherData.curr_temp}°</div>
              <div className="text-l mb-4">feels like: {weatherData.feels_like}</div>
              <div className="text-sm">max: {weatherData.max}</div>
              <div className="text-sm"> min: {weatherData.min}</div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="w-96 bg-black-500 rounded-lg mt-24">
              <span ref={chatResponseRef} style={{ whiteSpace: 'pre-wrap' }} ></span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;