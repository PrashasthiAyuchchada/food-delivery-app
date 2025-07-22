'use client';

import React from 'react';

function OrderNow() {
  return (
    <div className="w-full h-full px-4 py-6 bg-black/50 rounded-md text-white backdrop-blur-sm shadow-lg flex flex-col items-center justify-center">
      <div className="w-full max-w-[700px]"> {/* Fixed width max for desktop */}
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
          Order food to your office
        </h1>

        {/* Address Input */}
        <input
          type="text"
          placeholder="Enter your delivery address to start ordering"
          className="w-full h-10 px-3 mb-4 text-sm text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        {/* Time and Date Inputs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <input
            type="time"
            className="flex-1 h-10 px-3 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="date"
            className="flex-1 h-10 px-3 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Notice */}
        <p className="text-xs text-center mb-4">
          Orders must be placed 24 hours in advance
        </p>

        {/* Button */}
        <div className="flex justify-center">
          <button className="bg-white text-black px-6 py-2 text-sm font-semibold rounded-md hover:bg-yellow-400 transition">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderNow;
