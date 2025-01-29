import React from 'react'
import { useParallax } from 'react-scroll-parallax';
import styled from 'styled-components';

import Image from 'next/image';
import Link from 'next/link';
import Register from '@/components/Register';

import Countdown from '@/components/Countdown/Countdown';







const Hero = () => {
  return (
  
    <div className='flex flex-col mt-10 md:mt-20 lg:mt-40 md:mt-30 ml-8 md:ml-10 xl:mt-60' id="hero">
    <div className="flex flex-col  p-40 justify-center items-center  ">
    <div className="flex justify-center">
      <img
        src="/assets/logo.png"
        alt="YouCode Logo"
        className="mt-30 md:pt-10 object-cover"
        style={{
          width: '80%', // Default size for small screens
          height: 'auto',
        }}
      />
</div>
<div className="flex justify-center">
      <img
        src="/assets/community.png"
        alt="YouCode Logo"
        className="object-cover"
        style={{
          width: '60%', // Default size for small screens
          height: 'auto',
        }}
      />
</div>

    </div>
    <div className=''>
      <Register/>
      
    </div>

  </div>
     
  )
}

export default Hero