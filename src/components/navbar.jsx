'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';


function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-800 shadow-md px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Site Name */}
        <div className="text-xl font-semibold text-white">Prazz Foods</div>

        {/* Mobile Menu Toggle */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-4">
          <Link href="/">
            <span className="text-sm text-white hover:text-gray-400 cursor-pointer">Home</span>
          </Link>
          <Link href="/auth/login">
            <span className="text-sm text-white hover:text-gray-400 cursor-pointer">Sign In</span>
          </Link>
          <Link href="/auth/sign-up">
            <span className="text-sm border border-white rounded px-3 py-1 hover:bg-white hover:text-gray-800 transition cursor-pointer">
              Sign Up
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="flex flex-col gap-2 mt-3 md:hidden">
          <Link href="/">
            <span className="text-sm text-white hover:text-gray-400 cursor-pointer">Home</span>
          </Link>
          <Link href="/auth/login">
            <span className="text-sm text-white hover:text-gray-400 cursor-pointer">Sign In</span>
          </Link>
          <Link href="/auth/sign-up">
            <span className="text-sm border border-white rounded px-3 py-1 hover:bg-white hover:text-gray-800 transition cursor-pointer">
              Sign Up
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
