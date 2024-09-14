'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { mockAccounts } from '../mockData/MockData';
import Header from '../header/Header';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userAccount = mockAccounts.find(account => account.holder.username === username);
    if (!userAccount) {
      setError('User not found');
      return;
    }
    if (userAccount.holder.password !== password) {
      setError('Invalid password');
      return;
    }
    // Store user data in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(userAccount));
    router.push('/dashboard');
  };

  const date = new Date();
  const hour = date.getHours();

  return (
    <div className="">
      <Header />

      <div className="h-screen bg-[white]">
        <div className="pl-5 text-[25px] text-white min-h-[100px] bg-[#2c363f] flex items-center justify-center">
          <p>Sign On To PNC Online Banking</p>
        </div>
        <div className="mt-3 p-5">
          {error && (
            <div className='p-5 bg-[#FCF2F2] border-l-[5px] border-[#c00]'>
              <p className="text-lg font-[600] rounded-md flex text-[#181820]">Incorrect user ID or password</p>
              <p className="text-base mt-2 rounded-md flex text-[#181820]">Enter the correct user ID and password information.</p>
            </div>
          )}
        </div>
        <p className="text-xs px-5">Fields marked with asterisks (*) are required. </p>
        <div className="bg-white mx-auto rounded-xl sm:max-w-[350px]">
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6 p-5 rounded-lg">
              <div className="flex flex-col gap-3">
                <label htmlFor="Username" className="text-[#5c5c5c] text-[16px]">
                  User ID (required)
                </label>
                <input
                  type="text"
                  placeholder="Enter User ID"
                  value={username}
                  className="p-4 rounded-[10px] text-[#5c5c5c] bg-transparent border border-gray-300 outline-none"
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="password" className="text-[#5c5c5c] text-[16px]">
                  Password (required)
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  className="p-4 rounded-[10px] text-[#5c5c5c] bg-transparent border border-gray-300 outline-none"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full items-center justify-between gap-2 mt-6">
                <button type="submit" className="p-4 bg-[#0069AA] w-full text-white font-semibold rounded-md">
                  Sign In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
