"use client"; // Add this line at the top

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import AboutSection from '@/sections/StatsAndAboutAndTimeLine';
import Footer from '@/components/Footer';
import { SectionContainer } from '@/components/SectionContainer';
import styled from 'styled-components';
import AnimatedCarousel from "@/components/TeamCarousel";
import Sponsors from '@/components/Sponsors';
import TimeLine from '@/components/TimeLine';
import FaqSection from '@/components/faq';

import mid_city from './assets/mid_city.svg'
import back_city from './assets/back_city.svg';
import totempole from './assets/totempole.svg';
import back_mountains from './assets/back_mountains.svg';
import front_city from './assets/front_city.svg';


import { motion, useScroll, useTransform } from "framer-motion";

// Placeholder values
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
];

const BgSectionContainer = styled(SectionContainer)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #95CBE3;
  width: 100%;
  overflow-y: hidden;
`;

const BgLayer = styled(motion.div)`
  position: relative;
  width: 100%;
`;


const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default function Home() {
  const ref = useRef(null);
  const [vh, setVh] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateVh = () => setVh(window.innerHeight);
      updateVh();
      window.addEventListener("resize", updateVh);
      return () => window.removeEventListener("resize", updateVh);
    }
  }, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const yBackMountains = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const yBackCity = useTransform(scrollYProgress, [0, 0.1], [300, 0]);
  const yMidCity = useTransform(scrollYProgress, [0.3, 0.4], [300, 0]);
  const yFrontCity = useTransform(scrollYProgress, [0.45, 0.6], [300, 0]);
  const yBottomBuildings = useTransform(scrollYProgress, [0, 1], [0, 0]);
  
  

  return (
    <div>
      <Navbar />
      
      <BgSectionContainer ref={ref} style={{ willChange: "transform"}}>
        <BgLayer style={{ y: yBackMountains, zIndex: 1 }}>
          <Image src={back_mountains} alt="back_mountains" className="w-screen min-h-screen object-cover" />
          <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center">
            <Hero />
          </div>
        </BgLayer>

        <BgLayer style={{ y: yBackCity, zIndex: 2, marginTop: -500 }}>
          <Image src={back_city} alt="back_city" className="w-screen object-cover object-top" />
          <div className="absolute top-1/2 left-0 w-full flex justify-center">
            <TimeLine />
          </div>
        </BgLayer>


        <BgLayer style={{ y: yMidCity, zIndex: 3, marginTop: -800 }}>
          <Image src={mid_city} alt="mid_city" className="w-screen object-cover object-top" />
          <div className="absolute top-1/2 left-16">
            <AboutSection />
          </div>
        </BgLayer>

        <BgLayer style={{ y: yFrontCity, zIndex: 4, marginTop: -500 }}>
          <Image src={front_city} alt="front_city" className="w-screen object-cover object-top" />
          <div className="absolute top-1/4 w-full h-full justify-center">
            <Sponsors />
            <ImageContainer id="image-container">
                    <Image 
                      src="/assets/lastyear2024.svg" 
                      alt="Last Year"
                      width={2880}  
                      height={1350} 
                      layout="intrinsic" 
                      quality={100} 
                      priority 
                    />
            </ImageContainer>
          </div>
        </BgLayer>

        <BgLayer style={{ y: yBottomBuildings, zIndex: 5, marginTop: -300 }}>
          <Image src={totempole} alt="ground_buildings" className="w-screen object-cover object-top" />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <FaqSection />
          </div>
          <div className='bg-[#7E7E7E] w-full'>
            <AnimatedCarousel images={images} />
            <Footer />
          </div>
        </BgLayer>

      </BgSectionContainer>
    </div>
  );
}
