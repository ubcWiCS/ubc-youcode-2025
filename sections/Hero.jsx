import React from 'react'
import { useParallax } from 'react-scroll-parallax';
import styled from 'styled-components';

import Image from 'next/image';
import Link from 'next/link';
import Register from '@/components/Register';

import Countdown from '@/components/Countdown/Countdown';





const BodyContainer = styled.div`
  
  margin-top: 3rem;
  position:relative;

  @media (min-width: 576px) {
    margin-top: 3rem;
  }

  @media (min-width: 768px) {
    margin-top: 4rem;
  }

  @media (min-width: 1000px) {
    margin-top: 7rem;
  }
  
 
`


const Hero = () => {
  return (
  
      <BodyContainer className='flex  items-center justify-center z-10'>
        <Countdown className="w-1/2"/>
        <Register />
      </BodyContainer>
     
  )
}

export default Hero