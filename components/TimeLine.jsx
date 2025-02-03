

import React from 'react'
import Image from 'next/image'


const TimeLine = () => {
 
  return (
    <div className='relative flex flex-col w-full items-center justify-center z-10 mt-24 md:mt-32 lg:mt-44 ml-30 md:ml-40 lg:ml-45' id="schedule">
      
      <div className="absolute inset-0 -z-10">
        <Image src="/assets/timeline_bg.png" layout="fill" objectFit="cover" alt="Background" />
      </div>

      <h2 className='text-white text-4xl md:text-6xl lg:text-7xl font-bold'>
        Timeline
      </h2>

      <div className="text-white text-center mt-4 lg:mt-8 space-y-3 md:space-y-5 lg:space-y-6">
        <p className='text-lg md:text-2xl lg:text-3xl font-semibold'>March 01 | Registration Opens</p>
        <p className='text-lg md:text-2xl lg:text-3xl font-semibold'>March 22 | Workshops Begin</p>
        <p className='text-lg md:text-2xl lg:text-3xl font-semibold'>April 06 | Hacking Begins</p>
      </div>

    </div>
  );
}

export default TimeLine;

