import React from 'react';
import Link from 'next/link';

const Register = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center mt-3 md:mt-10 lg:mt-7'>
      <p className='text-[8px] md:text-lg tracking-widest lg:text-2xl text-key font-bold'>WiDS X WiCS present a</p>
      <p className='text-[8px] md:text-lg tracking-widest lg:text-2xl text-key font-bold'>24-hour hackathon</p>
      <p className='text-[8px] md:text-lg lg:text-2xl tracking-widest text-key font-bold'>April 5th-6th, 2024</p>

      <Link href="https://ubc.ca1.qualtrics.com/jfe/form/SV_aXbg2iAkEk8uKI6" target="_blank" className='md:mt-2 lg:mt-8'>
        <button className="bg-accent-magenta px-1 md:px-8 md:py-1 lg:py-3 rounded-full text-[10px] md:text-lg lg:text-2xl text-white transition-colors duration-300 hover:scale-105">
          Register Here!
        </button>
      </Link>
    </div>
  );
}

export default Register;
