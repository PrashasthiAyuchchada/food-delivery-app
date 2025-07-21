'use client';

import React from 'react'

export default  function MenuBar() {
  return (
    <div className='w-full bg-white flex items-center justify-center m-2 p-1 text-black text-60'            >
       <button className='w-[60px] h-[60px] rounded-md m-1 text-sm hover:bg-gray-100  '>Pizza</button>
       <button className='w-[60px] h-[60px] rounded-md m-1 text-sm hover:bg-gray-100  '>Lunch</button>
       <button className='w-[60px] h-[60px] rounded-md m-1 text-sm hover:bg-gray-100  '>Dinner</button>
       <button className='w-[60px] h-[60px] rounded-md m-1 text-sm hover:bg-gray-100  '>Sandwich</button>
       <button className='w-[60px] h-[60px] rounded-md m-1 text-sm hover:bg-gray-100  '>Japanese</button>
       <button className='w-[60px] h-[60px] rounded-md m-1 text-sm hover:bg-gray-100  '>Grill</button>
       <button className='w-[60px] h-[60px] rounded-md m-1 text-sm hover:bg-gray-100  '>Mexican</button>
     
    </div>
  )
}

