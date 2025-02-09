"use client"
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { ParallaxProvider } from 'react-scroll-parallax';
import Hero from '@/sections/Hero';
import Timer from '@/sections/Timer';
import StatsAndAboutAndTimeLine from '@/sections/StatsAndAboutAndTimeLine';
import ResourcesAndFaq from '@/sections/ResourcesAndFaq';
import SponsorsAndTeam from '@/sections/SponsorsAndTeam';
import FaqMobile from '@/sections/FaqMobile';
import Footer from '@/components/Footer';
import { SectionContainer } from '@/components/SectionContainer';
import styled from 'styled-components';

import AnimatedCarousel from "@/components/TeamCarousel"

//placeholder values
const images = [
  {
    src: "/assets/team/sample.png",
    name: "John Doe",
    title: "Software Engineer",
    favoriteFood: "Pizza",
  },
  {
    src: "/assets/team/sample.png",
    name: "Jane Smith",
    title: "UX Designer",
    favoriteFood: "Sushi",
  },
  {
    src: "/assets/team/sample.png",
    name: "Bob Johnson",
    title: "Product Manager",
    favoriteFood: "Tacos",
  },
  {
    src: "/assets/team/sample.png",
    name: "Alice Brown",
    title: "Data Scientist",
    favoriteFood: "Pasta",
  },
 
 
]



const BgSectionContainer = styled(SectionContainer)`
  background: #150C27;
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center top;
  
  position: relative;
  width: 100%;
  aspect-ratio:1584/3374;
  z-index: 0;
  overflow: hidden;

 
  // @media (min-width: 268px) {
  //   aspect-ratio: 1920/7780;
  // }

  // @media (min-width: 390px) {
  //   aspect-ratio: 1920/6980;
  // }

  // @media (min-width: 768px) {
  //   aspect-ratio: 1920/6780;
  // }

  // @media (min-width: 868px) {
  //   aspect-ratio: 1920/6480;
  // }

  // @media (min-width: 1000px) {
  //   aspect-ratio: 1920/6880;
  // }

  // @media (min-width: 1800px) {
  //   //aspect-ratio: 1920/6480;
  //   width: 1980px;
  //   height:6480px;
  //   margin:auto;

  //   justify:center;
  //   align:center;

  // }

  // @media (min-width: 2800px) {
  //   //aspect-ratio: 1920/6480;
  //   width: 1580px;
  //   height:5480px;
  //   margin:auto;

  //   justify:center;
  //   align:center;

  // }

  
  }
`
const BgScroll = styled(SectionContainer)`
  background: url('assets/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -2;


`



export default function Home() {
  return (
    <BgSectionContainer>
      <ParallaxProvider>
      <BgScroll/>
    
        <Navbar/>
        <Hero className="mt-60"/>
        <Timer/>
        <StatsAndAboutAndTimeLine/>
        
        <FaqMobile className="md:hidden"/>
         {/* <SponsorsAndTeam/> */}
        <AnimatedCarousel images={images}/>
       
        <Footer/>
     
    </ParallaxProvider>
    </BgSectionContainer>
  )
}


