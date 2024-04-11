'use client';
import React from 'react';

const UrlShortener: React.FC = () => {
  const handleShorten = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const longUrl = form.longUrl.value;
    const customAlias = form.customAlias.value;

    // Logic to send the long URL and custom alias to the API goes here
    console.log('Shortening URL:', longUrl);
    console.log('Custom Alias:', customAlias);

    // Reset the form fields after submitting
    form.reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Shorten a long URL</h2>
        <form onSubmit={handleShorten}>
          <div className="mb-4">
            <label htmlFor="longUrl" className="block text-gray-700 font-bold mb-2">
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
            <label htmlFor="customAlias" className="block text-gray-700 font-bold mb-2">
              Customize your link
            </label>
            <div className="flex items-center">
              <span className="text-gray-700 mr-2">jaehyon.ca/</span>
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
      </div>
    </div>
  );
};

export default UrlShortener;