import React from 'react'

import Register from '@/components/Register';


const Hero = () => {
  return (
  
    <div className='flex flex-col sm:mt-20 md:mt-40 lg:mt-40 md:ml-10 xl:mt-60' id="hero">
    <div className="flex flex-col  mt-40 p-40 justify-center items-center  ">
      <div className="flex justify-center ">
        <img
          src="/assets/logo.png"
          alt="YouCode Logo"
          className="mt-20 md:mt-30 md:pt-10 object-cover responsive-img"
        />
      </div>
      <div className="flex justify-center">
        <img
            src="/assets/community.png"
            alt="YouCode Logo"
            className="mt-20 md:mt-30 md:pt-10 object-cover responsive-img2"
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