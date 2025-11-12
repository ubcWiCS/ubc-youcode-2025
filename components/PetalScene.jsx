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

export default function PetalScene() {
  const containerRef = useRef(null);
  const waterRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const petalImages = [petal1.src, petal2.src, petal3.src, petal4.src];
    const rippleImages = [rippleDark.src, rippleLight.src];
    const petalCount = 18;

    for (let i = 0; i < petalCount; i++) {
      const petal = document.createElement("img");
      petal.src = petalImages[Math.floor(Math.random() * petalImages.length)];
      petal.classList.add("petal");

      const left = Math.random() * 100;
      petal.style.left = `${left}vw`;
      petal.style.top = `${-Math.random() * 100}vh`;
      petal.style.width = `${25 + Math.random() * 25}px`;

      const duration = 7 + Math.random() * 3;
      const screenFactor = window.innerHeight / 900;
      petal.style.animationDuration = `${duration * screenFactor}s`;
      petal.style.animationDelay = `${Math.random() * 5}s`;

      container.appendChild(petal);

      // 15% chance to create a ripple associated with this petal
      if (Math.random() < 0.15) {
        setTimeout(function createRipple() {
          const ripple = document.createElement("img");
          ripple.src =
            rippleImages[Math.floor(Math.random() * rippleImages.length)];
          ripple.classList.add("splash");

          const size = 200 + Math.random() * 100;
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
          setTimeout(createRipple, nextDelay);
        }, duration * 1000);
      }
    }

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div ref={containerRef} className="petal-container w-full h-full" />
      </div>

      <section className="flex flex-col items-center justify-center mt-16 z-20 text-center">
        <Image src={logo} alt="youCode Logo" width={80} height={80} />
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mt-3">
          youCode <span className="text-[#FFDFE9]">2026</span>
        </h1>
        <Link
          href="https://forms.gle/T9edkLNyomiF2ZLGA"
          className="text-sm sm:text-base md:text-lg text-[#FFDFE9] mt-2 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          join youCode 2026 →
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
