'use client';

import React from 'react';

export default function MenuCard({ name }) {
  return (
    <div
      className="
        min-w-[80px] sm:min-w-[100px] h-[80px] sm:h-[100px] rounded-md m-1
        hover:bg-gray-100 cursor-pointer
        flex justify-center items-center
        text-base sm:text-2xl
        transition
      "
    >
      <span>{name}</span>
    </div>
  );
}
