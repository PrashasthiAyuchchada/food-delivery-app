'use client';

import React from 'react'
import MenuCard from './menu-card';

export default  function MenuBar() {
  return (
    <div className='w-full bg-white flex items-center justify-center m-2 p-1 text-black text-60'            >
       
       <MenuCard name= "Pizza "/>
       <MenuCard name= "Lunch "/>
       <MenuCard name= "Dinner "/>
       <MenuCard name= "Sandwich "/>
       <MenuCard name= "Japanese "/>
       <MenuCard name= "Grill"/>
       <MenuCard name= "Mexican "/>
     
    </div>
  )
}

