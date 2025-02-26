"use client";
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { ParallaxProvider } from 'react-scroll-parallax';
import Hero from '@/sections/Hero';
import Timer from '@/sections/Timer';
import AboutSection from '@/sections/StatsAndAboutAndTimeLine';
import ResourcesAndFaq from '@/sections/ResourcesAndFaq';
import SponsorsAndTeam from '@/sections/SponsorsAndTeam';
import FaqMobile from '@/sections/FaqMobile';
import Footer from '@/components/Footer';
import { SectionContainer } from '@/components/SectionContainer';
import styled from 'styled-components';
import AnimatedCarousel from "@/components/TeamCarousel";
import Sponsors from '@/components/Sponsors';

import buildings from './assets/buildings.svg';
import city from './assets/city.svg';
import ground from './assets/ground.svg';
import mountains from './assets/mountains.svg';

import { motion, px, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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
  background: #C6FFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const BgLayer = styled(motion.div)`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform;
`;

const BgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 100vh;
`;

const AboutContainer = styled.div`
  margin-top: 1000px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SponsorsContainer = styled.div`
  margin-bottom: 900px; /* Adjust spacing */
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

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const yMountains = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const yCity = useTransform(scrollYProgress, [0, 0.25, 1], [3 * vh, 1.5 * vh, 0 * vh]);
  const yBuildings = useTransform(scrollYProgress, [0.25, 0.5, 1], [3 * vh, 3 * vh, 0.25 * vh]);
  const yGround = useTransform(scrollYProgress, [1, 1], [3 * vh, 3 * vh]);

  return (
    <div className="min-h-[450vh]">
      <Navbar />
      <div className="bg-[#C6FFFF] min-h-[400vh]">
        <BgSectionContainer ref={ref} id="bg-section-container">
          <BgWrapper>
            <BgLayer style={{ y: yMountains, zIndex: 1 }} id="mountains-layer">
              <Image src={mountains} alt="mountains" className="w-full min-h-[100vh] object-cover" />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <Hero />
              </div>
            </BgLayer>

            <BgLayer style={{ y: yCity, zIndex: 2 }} id="city-layer">
              <Image src={city} alt="cityscape" className="w-full min-h-[100vh] object-cover" />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <Timer />
              </div>
            </BgLayer>

            <BgLayer style={{ y: yBuildings, zIndex: 3 }} id="buildings-layer">
              <Image src={buildings} alt="buildings" className="w-full min-h-[100vh] object-cover" />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                <AboutContainer id="about-container">
                  <AboutSection />
                </AboutContainer>
                <FaqMobile id="faq-mobile" />

                <ImageContainer id="image-container">
                  <Image 
                    src="/assets/lastyear2024.svg" 
                    alt="Last Year"
                    width={1000}  
                    height={400} 
                    layout="intrinsic" 
                    quality={100} 
                    priority 
                  />
                </ImageContainer>

                <SponsorsContainer id="sponsors">
                  <Sponsors />
                </SponsorsContainer>
              </div>
            </BgLayer>

            <BgLayer style={{ y: yGround, zIndex: 4 }} id="ground-layer">
              <Image src={ground} alt="ground" className="w-full min-h-[100vh] object-cover" />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center"></div>
            </BgLayer>
          </BgWrapper>
        </BgSectionContainer>
      </div>
      <div className='bg-[#7E7E7E] pt-64 pb-32' id="carousel-section">
        <AnimatedCarousel images={images} />
        <Footer />
      </div>
    </div>
  );
}
