'use client';

import React, { useState } from 'react';

const UrlShortener: React.FC = () => {
  const [shortenedUrl, setShortenedUrl] = useState('');

  const handleShorten = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const longUrl = form.longUrl.value;
    const customAlias = form.customAlias.value;
    
    //Formdata obj to pass
    const formData = new FormData();
    //append url
    formData.append('url', customAlias? customAlias : longUrl)
    
    try {
      console.log('hi');
      const response = await fetch('http://127.0.0.1:5000/shorten_link', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.text();
        setShortenedUrl(data);
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('Error processing URL:', error);
    }
    form.reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md">
        {shortenedUrl ? (
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Shortened URL:</h2>
            <a
              href={shortenedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {shortenedUrl}
            </a>
            <button
              onClick={() => setShortenedUrl('')}
              className="mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600"
            >
              Shorten Another URL
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-4 text-center">
              Shorten a long URL
            </h2>
            <form onSubmit={handleShorten}>
              <div className="mb-4">
                <label
                  htmlFor="longUrl"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Enter long link here
                </label>
                <input
                  type="url"
                  id="longUrl"
                  name="longUrl"
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                  placeholder="Enter long link here"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="customAlias"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Customize your link
                </label>
                <div className="flex items-center">
                  <span className="text-gray-700 mr-2">f.jaehyon.ca/</span>
                  <input
                    type="text"
                    id="customAlias"
                    name="customAlias"
                    className="flex-grow px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                    placeholder="Enter alias"
                    maxLength={15}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600"
              >
                Shorten URL
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default UrlShortener;