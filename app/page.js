"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import AboutSection from '@/sections/StatsAndAboutAndTimeLine';
import Footer from '@/components/Footer';
import AnimatedCarousel from "@/components/TeamCarousel";
import Sponsors from '@/components/Sponsors';
import TimeLine from '@/components/TimeLine';
import FaqSection from '@/components/faq';

import mid_city from './assets/mid_city.svg';
import back_city from './assets/back_city.svg';
import totempole from './assets/totempole.svg';
import back_mountains from './assets/back_mountains.svg';
import front_city from './assets/front_city.svg';

const images = [
  {
    src: "/assets/team/sample.png",
    name: "John Doe",
    title: "Software Engineer",
    favoriteFood: "Pizza",
  },
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This ensures the component is mounted in the browser
  }, []);

  useEffect(() => {
    if (isClient) {
      // Only set the scroll event listener once on the client
      const handleScroll = () => {
        setScrollY(window.scrollY); // We use window.scrollY here
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isClient]);

  const getLayerStyle = (layerIndex, speed, revealOffset, alwaysVisible = false) => {
    if (!isClient) return {}; // If on the server side, return an empty object

    const revealPoint = revealOffset * window.innerHeight;
    const isVisible = alwaysVisible || scrollY > revealPoint;

    const yPos = isVisible ? (scrollY - revealPoint) * speed : 100;
    const opacity = isVisible ? 1 : 0;

    return {
      transform: `translateY(${yPos}px)`,
      opacity,
      transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
    };
  };

  // Handle potential errors in your JSX, such as missing elements, styles, etc.

  return (
    <div className="relative w-full overflow-x-hidden bg-[#95CBE3]">
      <Navbar />
      <div className="relative" style={{ height: '600vh' }}>
        <div className="fixed top-0 left-0 w-full h-screen overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-screen bg-[#95CBE3] z-0"></div>

          {/* Background layers */}
          <div className="absolute top-0 left-0 w-full h-screen z-10" style={getLayerStyle(0, 0.1, 0, true)}>
            <Image src={back_mountains} alt="Mountains" fill style={{ objectFit: 'cover', objectPosition: 'top center' }} priority />
          </div>

          <div className="absolute top-0 left-0 w-full h-screen z-20" style={getLayerStyle(1, 0.01, 0.3)}>
            <Image src={back_city} alt="Back City" fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
          </div>

          <div className="absolute top-0 left-0 w-full h-screen z-30" style={getLayerStyle(2, 0.05, 0.6)}>
            <Image src={mid_city} alt="Mid City" fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
          </div>

          <div className="absolute top-0 left-0 w-full h-screen z-40" style={getLayerStyle(3, 0.35, 0.9)}>
            <Image src={front_city} alt="Front City" fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
          </div>

          <div className="absolute top-0 left-0 w-full h-screen z-50" style={getLayerStyle(4, 0.45, 1.2)}>
            <Image src={totempole} alt="Totem Pole" fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
          </div>
        </div>

        {/* Content sections */}
        <div className="absolute top-0 left-0 w-full z-60">
          <section className="relative h-screen w-full flex justify-center items-center">
            <Hero />
          </section>
          <section className="relative h-screen w-full flex justify-center items-center">
            <TimeLine />
          </section>
          <section className="relative h-screen w-full flex justify-center items-center">
            <AboutSection />
          </section>
          <section className="relative h-screen w-full flex justify-center items-center">
            <Sponsors />
          </section>
          <section className="relative h-screen w-full flex justify-center items-center">
            <div className="w-full max-w-7xl px-4 mt-64">
              <Image src="/assets/nobackground.png" alt="Last Year" width={2880} height={1350} style={{ width: '100%', height: 'auto' }} quality={100} priority />
            </div>
          </section>
          <section className="relative h-screen w-full flex justify-center items-center">
            <FaqSection />
          </section>
          <section className="relative w-full bg-[#7E7E7E]">
            <div className="py-12 w-full">
              <AnimatedCarousel images={images} />
              <Footer />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
