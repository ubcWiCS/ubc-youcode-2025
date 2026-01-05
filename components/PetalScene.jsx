"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import petal1 from "@/app/assets/petal_1.svg";
import petal2 from "@/app/assets/petal_2.svg";
import petal3 from "@/app/assets/petal_3.svg";
import petal4 from "@/app/assets/petal_4.svg";

import rippleDark from "@/app/assets/ripple_dark.svg";
import rippleLight from "@/app/assets/ripple_light.svg";

import water from "@/app/assets/water_bg.svg";
import logo from "@/public/assets/logo.svg";

const INTEREST_FORM_URL = "https://forms.gle/T9edkLNyomiF2ZLGA";

const SCREEN_CONFIG = {
  MOBILE: {
    maxWidth: 480,
    petalCount: 10,
    petalSize: { base: 30, range: 20, multiplier: 0.8 },
    rippleSize: { min: 100, range: 75 },
  },
  TABLET: {
    maxWidth: 768,
    petalCount: 15,
    petalSize: { base: 35, range: 25, multiplier: 0.9 },
    rippleSize: { min: 150, range: 75 },
  },
  DESKTOP: {
    petalCount: 20,
    petalSize: { base: 45, range: 15, multiplier: 1 },
    rippleSize: { min: 200, range: 100 },
  },
};

export default function PetalScene() {
  const containerRef = useRef(null);
  const waterRef = useRef(null);
  const rippleTimersRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const petalImages = [petal1.src, petal2.src, petal3.src, petal4.src];
    const rippleImages = [rippleDark.src, rippleLight.src];

    const getScreenConfig = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= SCREEN_CONFIG.MOBILE.maxWidth)
        return SCREEN_CONFIG.MOBILE;
      if (screenWidth <= SCREEN_CONFIG.TABLET.maxWidth)
        return SCREEN_CONFIG.TABLET;
      return SCREEN_CONFIG.DESKTOP;
    };

    const createPetals = () => {
      rippleTimersRef.current.forEach(clearTimeout);
      rippleTimersRef.current = [];

      container.innerHTML = "";

      const config = getScreenConfig();
      const { petalCount, petalSize, rippleSize } = config;

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

        if (Math.random() < 0.15) {
          function createRipple() {
            const ripple = document.createElement("img");
            ripple.src =
              rippleImages[Math.floor(Math.random() * rippleImages.length)];
            ripple.classList.add("splash");
            const size = rippleSize.min + Math.random() * rippleSize.range;
            ripple.style.width = `${size}px`;
            ripple.style.height = `${size}px`;
            ripple.style.left = petal.style.left;
            ripple.style.transform = `rotate(${Math.random() * 360}deg)`;
            ripple.style.zIndex = "5";

            const waterHeight = waterRef.current
              ? waterRef.current.offsetHeight
              : 300;
            const waterTop = container.offsetHeight - waterHeight;
            ripple.style.top = `${
              waterTop + Math.random() * (waterHeight - size)
            }px`;

            container.appendChild(ripple);
            setTimeout(() => ripple.remove(), 3000);

            const nextDelay = 6000 + Math.random() * 2000;
            const nextTimerId = setTimeout(createRipple, nextDelay);
            rippleTimersRef.current.push(nextTimerId);
          }

          const initialTimerId = setTimeout(createRipple, duration * 1000);
          rippleTimersRef.current.push(initialTimerId);
        }
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
      rippleTimersRef.current.forEach(clearTimeout);
      rippleTimersRef.current = [];
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div ref={containerRef} className="petal-container w-full h-full" />
      </div>

      <section className="flex flex-col items-center justify-center mt-16 z-20 text-center">
        <Image
          src={logo}
          alt="youCode Logo"
          width={80}
          height={80}
          className="py-5"
        />

        <p className="text-sm sm:text-base tracking-wide">
          UBC WiCS x WiDS @UBC presents
        </p>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-md">
          youCode <span className="text-[var(--pink-light)]">2026</span>
        </h1>

        <p className="mt-2 text-white text-base sm:text-lg leading-relaxed">
          <span className="text-[var(--pink-light)] font-medium">
            April 4th – 5th, 2026
          </span>
        </p>

        <Link
          href={INTEREST_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm sm:text-base md:text-lg mt-4 px-5 py-2 rounded-full bg-[var(--pink-light)] text-white font-medium hover:bg-[var(--pink-medium)] transition inline-block shadow-md"
        >
          Hacker Interest Form
        </Link>
      </section>

      <div className="relative w-full">
        <Image
          ref={waterRef}
          src={water.src}
          alt="Water background"
          width={1200}
          height={300}
          className="w-full object-fill pointer-events-none z-0"
        />
      </div>
    </div>
  );
}
