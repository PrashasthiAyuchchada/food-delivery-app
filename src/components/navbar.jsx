'use client';

import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="w-full bg-gray-800 shadow-md px-6 py-3 flex items-center justify-between">
      {/* Site Name */}
      <div className="text-xl font-semibold text-white">
        Prazz Foods
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4">
        <Link href="/">
          <span className="text-sm text-white hover:text-gray-600 cursor-pointer">Home</span>
        </Link>
        <Link href="/auth/login">
          <span className="text-sm text-white hover:text-gray-600 cursor-pointer">Sign In</span>
        </Link>
        <Link href="/auth/sign-up">
          <span className="text-sm border border-white rounded px-3 py-1 hover:bg-black hover:text-white transition cursor-pointer">
            Sign Up
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
