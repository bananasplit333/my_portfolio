'use client';

import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

// pages/projects/weatherapp.tsyarn add typed.jsx

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import HomeButton from '@/components/HomeButton';

const WeatherApp: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
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
        typeSpeed: 16,
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
    setIsLoading(true);

    // Delay the API call by 500ms (0.5 seconds)
    await new Promise((resolve) => setTimeout(resolve, 500));

    try {
      console.log('submitted');
      console.log('input value: ', inputValue);

      const response = await fetch('https://weather.toddie.org/result', {
        method: 'POST',
        body: inputValue,
      });

      if (response.ok) {
        const data = await response.json();
        const weather_data = data.weather_data;
        //set weather data  
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
    } finally {
      setIsLoading(false);
    }
  };

  const gainedFocus = () => {
    setShowPlaceholder(false);
  };

  const lostFocus = () => {
    setShowPlaceholder(true);
  };

  return (
    <div>
      
      <div className="flex min-h-screen items-center justify-center">
        <div className="absolute right-10 top-1/3 m:right-1/4 l:right-1/4 xl:right-1/4 sm:top-1/4">
          <HomeButton />
        </div>
        {!hasInput ? (
          <div>
            <div className="text-2xl flex justify-center font-bold pb-4">Weather</div>
            <div className="text-slate-950">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onClick={gainedFocus}
                onBlur={lostFocus}
                placeholder={showPlaceholder ? 'Enter a City' : ''}
              />
            </div>
            <div className="justify-center flex-col flex mt-4">
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        ) : isLoading ? (
          <div className="my-40 flex">
          <div className="relative mx-auto h-10 w-10 animate-bounce">
            <div className="mx-auto h-16 w-16 animate-pulse rounded-full bg-gray-400"></div>
            <span className="absolute flex h-5 w-5 animate-spin">
              <span className="h-4 w-4 rounded-full bg-gray-400"> </span>
            </span>
          </div>
          </div>
        ) : (
          <div className="grid grid-cols-6">
            <div className="col-span-2">
              <div className="rounded-lg bg-black-500 text-center">
                <div className="flex justify-center">
                  <img src={`/static/images/${weatherData.icon}.png`} alt="Weather Icon" />
                </div>
                <div className="mb-2 text-2xl font-bold">{weatherData.city}</div>
                <div className="mb-4 text-lg text-slate-50">{weatherData.date}</div>
                <div className="mb-2 text-5xl font-bold">{weatherData.curr_temp}°</div>
                <div className="mb-4 text-l">feels like: {weatherData.feels_like}</div>
                <div className="text-sm">max: {weatherData.max}</div>
                <div className="text-sm">min: {weatherData.min}</div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="mt-24 ml-4 w-64 rounded-lg bg-black-500">
                <span ref={chatResponseRef} style={{ whiteSpace: 'pre-wrap' }}></span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;