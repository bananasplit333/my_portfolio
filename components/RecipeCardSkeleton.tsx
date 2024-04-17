import React from 'react';

const CardSkeleton = () => {
  return (
    <div className="flex flex-col justify-center bg-white rounded shadow p-6 dark:bg-zinc-800 w-full max-w-4xl mx-auto animate-pulse h-[560px]">
      <div className="flex items-center mb-6">
        <div className="mr-4 rounded bg-gray-300 h-24 w-24"></div>
        <div className="h-6 bg-gray-300 rounded w-1/2"></div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded"></div>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-2 gap-8">
        <div>
          <div className="h-6 bg-gray-300 rounded mb-4"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
        </div>
        <div>
          <div className="h-6 bg-gray-300 rounded mb-4"></div>
          <div className="h-4 bg-gray-300 rounded mb-4"></div>
          <div className="h-4 bg-gray-300 rounded mb-4"></div>
          <div className="h-4 bg-gray-300 rounded mb-4"></div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;