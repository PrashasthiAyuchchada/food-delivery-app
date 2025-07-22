'use client';

import React from 'react'
import MenuCard from './menu-card';

export default  function MenuBar() {
  return (
    <div className="w-full bg-white overflow-x-auto py-2 flex items-center justify-center">
      <div className="flex items-center justify-start gap-2 px-4 min-w-max">
        <MenuCard name="Pizza" />
        <MenuCard name="Lunch" />
        <MenuCard name="Dinner" />
        <MenuCard name="Sandwich" />
        <MenuCard name="Japanese" />
        <MenuCard name="Grill" />
        <MenuCard name="Mexican" />
      </div>
    </div>
  )
}

