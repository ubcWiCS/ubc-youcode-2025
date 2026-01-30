"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import petal1 from "@/app/assets/petal_1.svg";
import petal2 from "@/app/assets/petal_2.svg";
import petal3 from "@/app/assets/petal_3.svg";
import petal4 from "@/app/assets/petal_4.svg";

import mountain from "@/app/assets/mountain_bg.svg";
import water from "@/app/assets/water_bg.svg";
import ripples from "@/app/assets/ripple_group.svg";
import logo from "@/public/assets/logo.svg";
import unicorn from "@/app/assets/unicorn_boulder.svg";

const BUTTON_LINK_URL = "https://forms.gle/T9edkLNyomiF2ZLGA";

const SCREEN_CONFIG = {
  MOBILE: {
    maxWidth: 480,
    petalCount: 10,
    petalSize: { base: 30, range: 20, multiplier: 0.8 },
  },
  TABLET: {
    maxWidth: 768,
    petalCount: 15,
    petalSize: { base: 35, range: 25, multiplier: 0.9 },
  },
  DESKTOP: {
    petalCount: 20,
    petalSize: { base: 45, range: 15, multiplier: 1 },
  },
};

export default function PetalScene() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const petalImages = [petal1.src, petal2.src, petal3.src, petal4.src];

    const getScreenConfig = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= SCREEN_CONFIG.MOBILE.maxWidth)
        return SCREEN_CONFIG.MOBILE;
      if (screenWidth <= SCREEN_CONFIG.TABLET.maxWidth)
        return SCREEN_CONFIG.TABLET;
      return SCREEN_CONFIG.DESKTOP;
    };

    const createPetals = () => {
      container.innerHTML = "";
      const config = getScreenConfig();
      const { petalCount, petalSize } = config;

      for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement("img");
        petal.src = petalImages[Math.floor(Math.random() * petalImages.length)];
        petal.classList.add("petal");

        const left = Math.random() * 100;
        petal.style.left = `${left}vw`;
        petal.style.top = `${-Math.random() * 100}vh`;

        // Petal sizing
        const baseWidth = petalSize.base + Math.random() * petalSize.range;
        petal.style.width = `${baseWidth * petalSize.multiplier}px`;

        const duration = 7 + Math.random() * 3;
        const screenFactor = window.innerHeight / 900;
        petal.style.animationDuration = `${duration * screenFactor}s`;

        container.appendChild(petal);
      }
    };

    createPetals();

    const handleResize = () => {
      createPetals();
    };

    let resizeTimeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 250);
    };

    window.addEventListener("resize", debouncedResize);

    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(resizeTimeout);
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col overflow-hidden">
      <div className="relative w-full bg-gradient-to-b from-[#659EBC] to-[#69CAFF]">
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div ref={containerRef} className="petal-container w-full h-full" />
        </div>

        <section className="relative flex flex-col items-center justify-center pt-20 z-20 text-center">
          <Image
            src={logo}
            alt="youCode Logo"
            width={80}
            height={80}
            className="py-5"
          />

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-md">
            youCode <span className="text-[#FFDFE9]">2026</span>
          </h1>

          <p className="text-sm sm:text-base tracking-wide">
            embracing the power of{" "}
            <span className="text-[var(--pink-medium)]">you</span>.
          </p>

          <p className="mt-2 text-white text-base sm:text-lg leading-relaxed">
            <span className="font-medium">April 4th – 5th, 2026</span>
          </p>
          <Link
            href={BUTTON_LINK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-base md:text-lg mt-4 px-5 py-2 rounded-lg bg-[var(--pink-medium)] text-white font-medium inline-block shadow-md"
          >
            APPLY NOW
          </Link>
        </section>

        <Image
          src={mountain.src}
          alt="Mountain background"
          width={1200}
          height={400}
          className="w-full object-fill pointer-events-none pt-5"
        />
      </div>

      <div className="relative w-full translate-y-[-12%]">
        <Image
          src={water.src}
          alt="Water background"
          width={1200}
          height={300}
          className="w-full object-fill pointer-events-none"
        />
        <Image
          src={ripples.src}
          alt="Ripples overlay"
          width={1200}
          height={300}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        />
      </div>

      <div className="absolute top-[60%] sm:top-[65%] left-0 w-full z-20 px-6 sm:px-12 lg:px-24 translate-y-[-50%]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 max-w-7xl mx-auto">
          <div className="w-full md:w-1/2 text-center md:text-left text-white order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 drop-shadow-md">
              <span className="text-[var(--pink-light)]">About </span>
              <span className="text-[var(--almost-white)]">youCode</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed opacity-95">
              Dedicated to fostering gender inclusivity and challenging
              traditional norms in the tech industry. We create opportunities
              for underrepresented genders to innovate, guided by our commitment
              to Innovation for Equity and Community. Through tight, welcoming
              spaces, we empower one another to build meaningful connections and
              lasting impact. Building supportive networks where everyone can
              thrive remains at the core of what we do.
            </p>
            <p className="mt-4 text-sm sm:text-base font-medium text-[var(--pink-light)]">
              Our values: Inclusivity, Visibility, Community, Wellbeing.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end order-2">
            <div className="relative w-[240px] sm:w-[350px] lg:w-[500px] transition-all duration-300">
              <Image
                src={unicorn}
                alt="Unicorn on boulder"
                width={500}
                height={500}
                className="w-full h-auto pointer-events-none drop-shadow-2xl animate-float"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
