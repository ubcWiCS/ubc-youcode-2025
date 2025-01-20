import React from 'react'
import { useParallax } from 'react-scroll-parallax';
import styled from 'styled-components';
import { SectionContainer } from '../components/SectionContainer';
import TimeLine from '@/components/TimeLine';





const BodyContainer = styled.div`
  
  position:relative;
  
 
`



const Timer = () => {
  return (
   
      <BodyContainer className='flex flex-col items-center justify-center z-10'>

      <TimeLine/>

      </BodyContainer>

  )
}

export default Timer