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
import logo from "@/public/assets/logo.svg";
import wordmark from "@/app/assets/wordmark_logo.svg";
import unicorn from "@/app/assets/unicorn_boulder.svg";

const BUTTON_LINK_URL = "https://forms.gle/T9edkLNyomiF2ZLGA"; // TODO : update with actual application link

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
        petal.style.left = `${Math.random() * 100}vw`;

        // Start above viewport
        petal.style.top = `${-20 - Math.random() * 80}vh`;

        // Size
        const baseWidth = petalSize.base + Math.random() * petalSize.range;
        petal.style.width = `${baseWidth * petalSize.multiplier}px`;

        // Duration
        const duration = 5.5 + Math.random() * 3;
        petal.style.animationDuration = `${duration}s`;

        // Random delay
        petal.style.animationDelay = `${Math.random() * duration}s`;

        // Random horizontal drift direction
        petal.style.setProperty(
          "--drift",
          `${Math.random() > 0.5 ? "-" : ""}${20 + Math.random() * 40}px`,
        );
        container.appendChild(petal);
      }
    };

    createPetals();
    window.addEventListener("resize", createPetals);
    return () => window.removeEventListener("resize", createPetals);
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative w-full bg-gradient-to-b from-[#659EBC] to-[#69CAFF]">
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div ref={containerRef} className="petal-container w-full h-full" />
        </div>
        <section className="relative flex flex-col items-center justify-center pt-10 z-20 text-center px-4">
          <Image
            src={logo}
            alt="youCode Logo"
            width={80}
            height={80}
            className="py-4 sm:py-5 w-14 sm:w-16 md:w-20 h-auto"
          />
          <h1 className="flex items-center gap-2 sm:gap-5 font-bold text-white drop-shadow-md font-montserrat">
            <Image
              src={wordmark}
              alt="youCode Wordmark"
              className="h-8 sm:h-12 md:h-16 w-auto"
            />
            <span className="text-[#FFDFE9] text-3xl sm:text-5xl md:text-6xl">
              2026
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl italic tracking-wide font-dm">
            embracing the power of you.
          </p>
          <p className="mt-2 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed font-dm">
            April 4th – 5th, 2026
          </p>
          <Link
            href={BUTTON_LINK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-sm sm:text-base md:text-lg mt-4 px-5 py-2 rounded-lg 
              bg-[var(--pink-medium)] text-white font-medium inline-block 
              shadow-md transition-all transform hover:scale-[1.03] 
              hover:shadow-[0_0_15px_rgba(255,105,180,0.7)] font-lexend
            "
          >
            APPLY NOW
          </Link>
        </section>

        <Image
          src={mountain.src}
          alt="Mountain background"
          width={1200}
          height={400}
          className="w-full object-cover pointer-events-none pt-5"
        />
      </div>

      {/* About Section */}
      <div
        id="about"
        className="relative w-full flex flex-col items-center justify-center 
                   -mt-[7%] pb-14 lg:pb-64 pt-24 sm:pt-40"
        style={{
          backgroundImage: `url(${water.src})`,
          backgroundSize: "100% auto",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-20 flex flex-col md:flex-row justify-between px-6 md:px-12 lg:px-36 xl:px-48 pt-0 lg:pt-12">
          <div className="w-full md:w-1/2 text-center md:text-left text-white order-1">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 drop-shadow-md font-dm italic">
              <span className="text-[var(--pink-light)]">About </span>
              <span className="text-[var(--almost-white)]">youCode</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-[1.8] opacity-90 font-lexend font-light tracking-tight">
              We’re dedicated to fostering gender inclusivity and challenging
              traditional norms in tech. Guided by our commitment to Innovation
              for Equity and Community, we create welcoming spaces for
              underrepresented genders to innovate, connect, and grow.
              <br />
              <br />
              Our community is built on support, collaboration, and the belief
              that when people feel seen and supported, they can create real,
              lasting impact.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end order-2">
            <div className="relative w-[220px] sm:w-[350px] lg:w-[450px]">
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
