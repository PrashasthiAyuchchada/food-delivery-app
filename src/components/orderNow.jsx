'use client';

import React from 'react';

function OrderNow() {
  return (
    <div className="w-full h-[200px] backdrop-brightness-50 flex flex-col items-center justify-center      ">
        <div>
            <h1 className='text-2xl font-semibold text-white'>
                Order food to your office
            </h1>
        </div>
        <div className='m-1  '>
            <input  type='address' placeholder='Enter your delivery address to start ordering'  className='w-[250px] justify-center text-xs bg-white border border-black rounded-md      '  />
        </div>
        <div className=' flex justify-between gap-2 m-1   '>
            <input type='time'         className='w-[120px] bg-white border border-black rounded-md      '  />
            <input type='date'     className='w-[120px] bg-white border border-black rounded-md      '  />
        </div>
        <div>
            <span className='text-xs text-white '>Orders must be placed 24 hours in advance</span>
        </div>
        <button className=' w-[60px]     bg-white rounded-md border border-black text-xs             '> 
            Order now
        </button>

    </div>
  );
}

export default OrderNow;