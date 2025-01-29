import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Register = () => {
  return (
    <div className='flex flex-col items-center justify-center items-center  text-center md:mt-10 lg:mt-10'>
      <p className='text-[7px] md:text-lg  tracking-widest  lg:text-2xl  text-key font-bold  '>WiDS X WiCS present a</p>
      <p className='text-[7px] md:text-lg tracking-widest lg:text-2xl text-key font-bold  '>24-hour wellness-themed hackathon</p>
      <p className='text-[7px] md:text-lg lg:text-2xl tracking-widest text-key font-bold '>April 6-7, 2024</p>
      <Link href="" className='mt-2 lg:mt-8'>
      <button class="bg-accent-magenta px-8 py-3 rounded-full text-2xl  transition-colors duration-300 hover:scale-105 transition duration-500">
  <span class="mix-blend-screen">Apply Now</span>
</button>
        {/* <p className='text-[8px] tracking-wider md:text-xl lg:text-2xl  px-7 rounded-3xl py-1 transform hover:scale-105 transition duration-500 drop-shadow-xl '>
          Registration opens in March!
        </p> */}
      </Link>

    </div>
  )
}

export default Register