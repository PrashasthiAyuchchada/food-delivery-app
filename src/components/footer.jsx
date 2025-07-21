'use client';

import React from 'react';

function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white text-center py-4 mt-auto">
      <p className="text-sm">&copy; {new Date().getFullYear()} Prazz Foods. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
