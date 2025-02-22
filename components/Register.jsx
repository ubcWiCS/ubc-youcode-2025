import React from 'react'
import Link from 'next/link';

const Register = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center mt-3 md:mt-10 lg:mt-10'>
      <p className='text-[8px] md:text-lg  tracking-widest  lg:text-2xl  text-key font-bold  '>UBC WiCS x WiDS@UBC presents</p>
      <p className='text-[8px] md:text-lg tracking-widest lg:text-2xl text-key font-bold  '>a 24h hackathon highlighting</p>
      <p className='text-[8px] md:text-lg tracking-widest lg:text-2xl text-key font-bold  '>Community and Connection</p>
      <p className='text-[8px] md:text-lg lg:text-2xl tracking-widest text-key font-bold pt-8'>April 5-6, 2025</p>
      <Link href="" className='md:mt-2 lg:mt-8'>
        <button className="bg-accent-magenta px-1 md:px-8 md:py-1 lg:py-3 rounded-full text-[10px] md:text-lg lg:text-2xl hover:scale-105 transition duration-500">
          <span className="mix-blend-screen">Apply Now</span>
        </button>
      </Link>
    </div>
  )
}

export default Register