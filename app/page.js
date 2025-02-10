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
import { SectionContainer } from '@/components/SectionContainer';
import styled from 'styled-components';

import buildings from './assets/buildings.svg'
import city from './assets/city.svg';
import ground from './assets/ground.svg';
import mountains from './assets/mountains.svg';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const BgSectionContainer = styled(SectionContainer)`
  background: #C6FFFF;
  background-size: 100vw auto;
  background-repeat: no-repeat;
  background-position: center top;
  
  position: relative;
  width: 100%;
  min-height: 200vh;
  aspect-ratio:1584/3374;
  z-index: 0;

`

const BgLayer = styled(motion.div)`
  position: absolute;
  width: 100%;
  min-height: 50vh;
  height: auto;

  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const yMountains = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const yCity = useTransform(scrollYProgress, [0, 1], [1500, -500]);
  const yBuildings = useTransform(scrollYProgress, [0, 1], [3000, -500]);
  const yGround = useTransform(scrollYProgress, [0, 1], [5000, -500]);

  return (
    <BgSectionContainer ref={ref}>
      <Navbar />
      <BgLayer style={{ y: yMountains, zIndex: 1 }}>
        <Image src={mountains} alt="mountains" className="w-full min-h-[50vh] object-cover" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <Hero />
        </div>
      </BgLayer>

      <BgLayer style={{ y: yCity, zIndex: 2 }}>
        <Image src={city} alt="cityscape" className="w-full min-h-[50vh] object-cover" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <Timer />
        </div>
      </BgLayer>

      <BgLayer style={{ y: yBuildings, zIndex: 3 }}>
        <Image src={buildings} alt="buildings" className="w-full min-h-[50vh] object-cover" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <StatsAndAboutAndTimeLine />
        </div>
      </BgLayer>

      <BgLayer style={{ y: yGround, zIndex: 4 }}>
        <Image src={ground} alt="ground" className="w-full min-h-[50vh] object-cover" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <FaqMobile />
        </div>
      </BgLayer>

    </BgSectionContainer>
  );
}


