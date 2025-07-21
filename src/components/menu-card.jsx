'use client';

import React from 'react'

export default  function MenuCard(props) {
  return (
    <div className='w-[100px] h-[100px] rounded-md m-1 text-sm hover:bg-gray-100 m-2 text-2xl flex justify-center items-center   '            >
       <span> {props.name}  </span>
     
    </div>
  )
}

