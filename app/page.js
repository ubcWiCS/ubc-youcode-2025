"use client"
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Hero from '@/sections/Hero';
import AboutSection from '@/sections/StatsAndAboutAndTimeLine';
import Footer from '@/components/Footer';
import { SectionContainer } from '@/components/SectionContainer';
import styled from 'styled-components';
import AnimatedCarousel from "@/components/TeamCarousel"
import Sponsors from '@/components/Sponsors';
import TimeLine from '@/components/TimeLine';
import FaqSection from '@/components/faq';

import mid_city from './assets/mid_city.svg'
import back_city from './assets/back_city.svg';
import bottom_buildings from './assets/bottom_buildings.svg';
import back_mountains from './assets/back_mountains.svg';
import front_city from './assets/front_city.svg';
import road from './assets/road.svg';


import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #95CBE3;
  min-height: 400vh;
`;

const BgLayer = styled(motion.div)`
  position: absolute;

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
  const yBackCity = useTransform(scrollYProgress, [0,0.2], [1*vh, 0.5*vh])
  const yMidCity = useTransform(scrollYProgress, [0.2,0.4], [2*vh, 1.4*vh])
  const yFrontCity = useTransform(scrollYProgress, [0.4, 0.7], [3*vh, 2.1*vh])
  const yBottomBuildings = useTransform(scrollYProgress, [0.7, 1], [5*vh, 3.3*vh])
  const yRoad = useTransform(scrollYProgress, [1, 1], [5.5*vh, 5.5*vh]);
  

  return (
    
    <div>
      <Navbar />
      
      <BgSectionContainer ref={ref}>
        <BgLayer style={{ y: yBackMountains, zIndex: 1 }}>
          <Image src={back_mountains} alt="back_mountains" className="w-screen min-h-screen object-cover" />
          <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center">
            <Hero />
          </div>
        </BgLayer>

        <BgLayer style={{ y: yBackCity, zIndex: 2 }}>
          <Image src={back_city} alt="back_city" className="w-screen min-h-[150vh] md:min-h-screen object-cover " />
          <div className="absolute top-1/3 left-0 w-full flex justify-center">
            <TimeLine />
          </div>
        </BgLayer>

        <BgLayer style={{ y: yMidCity, zIndex: 3 }}>
          <Image src={mid_city} alt="mid_city" className="w-screen min-h-[150vh] md:min-h-screen object-cover" />
          <div className="absolute top-1/3 left-16">
            <AboutSection />
          </div>
        </BgLayer>

        <BgLayer style={{ y: yFrontCity, zIndex: 4 }}>
          <Image src={front_city} alt="front_city" className="w-screen min-h-[200vh] md:min-h-screen object-cover" />
          <div className="absolute top-1/4 w-full h-full justify-center">
            <Sponsors />
          </div>
        </BgLayer>

        <BgLayer style={{ y: yBottomBuildings, zIndex: 5 }}>
          <Image src={bottom_buildings} alt="ground_buildings" className="w-screen min-h-[150vh] md:min-h-screen object-cover" />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <FaqSection />
          </div>
          <div className='bg-[#7E7E7E]'>
            <AnimatedCarousel images={images} />
            <Footer />
          </div>
        </BgLayer>

      </BgSectionContainer>
    </div>
  );
}



