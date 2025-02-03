import React from 'react'

import styled from 'styled-components';
import { SectionContainer } from '../components/SectionContainer';
import Stats from '@/components/Stats';
import About from '@/components/About';
import TimeLine from '@/components/TimeLine';
import Stats2 from '@/components/Stats2';


const BodyContainer = styled.div`
  
  margin-top: 0rem;
  position:relative;
 

  @media (min-width: 768px) {
    margin-top: 1rem;
  position:relative;
 
  }
  
 
`

const StatsAndAboutAndTimeLine = () => {
  return (

      <BodyContainer className='flex w-full flex-col'>
     
      <About/>

      
      </BodyContainer>
      

  )
}

export default StatsAndAboutAndTimeLine