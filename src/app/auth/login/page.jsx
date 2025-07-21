'use client';

import React, { useState } from 'react';


import { FaGoogle } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { auth } from '@/app/firebase/config';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in!");
      router.push('/');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Signed in with Google!");
      router.push('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="p-6 border rounded-md shadow-md w-[260px]">
        <h2 className="text-lg font-bold mb-3">Login</h2>

        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-2 w-full py-2 mb-3 border border-black text-black text-sm rounded-md"
        >
          <FaGoogle />
          Continue with Google
        </button>

        <input
          type="email"
          placeholder="Email"
          className="w-full border px-2 py-1 mb-2 text-sm rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border px-2 py-1 mb-3 text-sm rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-black text-white py-1.5 rounded-md text-sm font-semibold"
        >
          Sign In
        </button>

        <p className="mt-2 text-xs text-center">
          Don’t have an account? <a href="/signup" className="font-bold">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
