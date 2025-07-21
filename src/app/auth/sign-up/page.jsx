'use client';

import React, { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';

import { FaGoogle } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { auth } from '@/app/firebase/config';

export default function Page() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Update user's displayName
      await updateProfile(userCredential.user, {
        displayName: `${firstName} ${lastName}`,
      });

      alert('Account created!');
      router.push('/login');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert('Signed in with Google!');
      router.push('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="p-6 border rounded-md shadow-md w-[260px]">
        <h2 className="text-lg font-bold mb-3">Sign Up</h2>

        <button
          onClick={handleGoogleSignup}
          className="flex items-center justify-center gap-2 w-full py-2 mb-3 border border-black text-black text-sm rounded-md"
        >
          <FaGoogle />
          Continue with Google
        </button>

        <input
          type="text"
          placeholder="First Name"
          className="w-full border px-2 py-1 mb-2 text-sm rounded-md"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Last Name"
          className="w-full border px-2 py-1 mb-2 text-sm rounded-md"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border px-2 py-1 mb-2 text-sm rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border px-2 py-1 mb-3 text-sm rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          onClick={handleSignup}
          className="w-full bg-black text-white py-1.5 rounded-md text-sm font-semibold"
        >
          Sign Up
        </button>

        <p className="mt-2 text-xs text-center">
          Already have an account?{' '}
          <a href="/login" className="font-bold">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
