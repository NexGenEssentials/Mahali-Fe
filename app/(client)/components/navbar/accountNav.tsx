'use client'
import UserProfile from '@/app/(auth)/account/userProfile';
import Logo from '@/app/(landingPage)/components/navbar/logo'
import React from 'react'

const AccountNav = () => {
  return (
    <div className="fixed top-0 right-0 left-0 z-50  text-black text-sm font-semibold flex items-center justify-center shadow-md shadow-gray-300">
      <div className="max-w-[1450px] bg-white mx-auto w-full flex justify-between items-center  text-primaryGreen px-4">
        <Logo />
        <UserProfile visible={true} />
      </div>
    </div>
  );
}

export default AccountNav