import React from 'react'

import Register from '@/components/Register';
import Image from 'next/image';

import logo from "../public/assets/logo.png";

const Hero = () => {
  return (
    <div id="hero">
      <div className="flex flex-col justify-center items-center">
        <img
          src= "/assets/logo.png"
          alt="YouCode Logo"
          className="w-100 "
        />
      </div>
      <Register/>
    </div>
  )
}

export default Hero