"use client"
import Link from "next/link";
import { TbGridDots } from "react-icons/tb";
import React, { useState } from 'react';
import { FlaskConical } from 'lucide-react';

export default function HomeHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="flex justify-end p-5 text-sm">
      <div className="flex space-x-4 items-center">
       <Link href="https://labs.xanmoy.me" className="text-indigo-500">
          <FlaskConical/>
        </Link>
      
        {/* <Link href="https://mail.google.com" className="hover:underline">
          Gmail
        </Link>
        <Link href="https://image.google.com" className="hover:underline">
          Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2" />
        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">Sign in</button> */}
      </div>
    </header>
    
  );
}
