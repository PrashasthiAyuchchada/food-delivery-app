'use client';

import React from 'react';
import OrderNow from './orderNow';

function Hero() {
  return (
    <div className="w-full h-[200px] sm:h-[300px] lg:h-[400px] bg-cover bg-center relative bg-[url('https://cache.marriott.com/is/image/marriotts7prod/cy-cmbcy-beira-kitchen-13756-06071:Pano-Hor?wid=1600&fit=constrain')]">
      {/* Optional: Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
        <OrderNow />
      </div>
    </div>
  );
}

export default Hero;