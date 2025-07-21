'use client';

import React from 'react';

function OrderNow() {
  return (
    <div className="w-full h-full backdrop-brightness-50 flex flex-col items-center justify-center      ">
        <div className=" h-full w-[500px]  flex flex-col items-center justify-center      "       >
                
                <div className=' m-4 '>
                    <h1 className=' text-4xl font-bold text-white'>
                        Order food to your office
                    </h1>
                </div>
                <div className='m-2  '>
                    <input  type='address' placeholder='Enter your delivery address to start ordering'  className='w-[400px] h-[40px]  justify-center text-xs bg-white border border-black rounded-md      '  />
                </div>
                <div className=' w-[400px]   flex justify-between  m-2   '>
                    <input type='time'         className='w-[190px] h-[40px] bg-white border border-black rounded-md      '  />
                    <input type='date'     className='w-[190px] h-[40px]   bg-white border border-black rounded-md      '  />
                </div>
                <div className='w-[400px] flex justify-center   '  >
                    <span className='text-sm text-white '>Orders must be placed 24 hours in advance</span>
                </div>
                <button className=' w-[100px] h-[40px] m-2  bg-white rounded-md border border-black text-xs             '> 
                    Order now
                </button>
        </div>


    </div>
  );
}

export default OrderNow;