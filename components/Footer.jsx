"use client";

import React from "react";
import Link from "next/link";
import {
  AiOutlineMail,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiFillTikTok,
} from "react-icons/ai";
import TeamCarousel from "./TeamCarousel";
import bg from "@/app/assets/footer_bg.svg";

const Footer = () => {
  return (
    <footer
      id="team"
      className="
    -mt-5 md:-mt-16 lg:-mt-0
    w-full min-h-[125vh] md:min-h-[100vh]
    relative flex flex-col items-center justify-end
    px-4 pb-12
    gap-12
    bg-cover bg-top bg-no-repeat
  "
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      {/* Team Section */}
      <div className="w-full max-w-7xl">
        <h1
          className="text-center font-dm italic mb-8
             text-3xl sm:text-4xl md:text-5xl leading-snug"
          style={{
            color: "#F4D8D8",
            textShadow: "1px 1px 3px rgba(0,0,0,0.35)",
          }}
        >
          Meet the team behind youCode!
        </h1>

        <TeamCarousel />
      </div>

      {/* Socials & Copyright */}
      <div className="flex flex-col items-center gap-6 z-10">
        <div className="flex items-center justify-center gap-5 sm:gap-8">
          <Link
            href="mailto:ubcyoucode@gmail.com"
            aria-label="Email"
            className="text-white transition-all duration-300 hover:scale-110"
          >
            <AiOutlineMail className="w-8 h-8 md:w-10 md:h-10" />
          </Link>

          <Link
            href="https://www.instagram.com/youcode.ubc/"
            aria-label="Instagram"
            className="text-white transition-all duration-300 hover:scale-110"
          >
            <AiOutlineInstagram className="w-8 h-8 md:w-10 md:h-10" />
          </Link>

          <Link
            href="https://www.linkedin.com/company/youcode-ubc/"
            aria-label="LinkedIn"
            className="text-white transition-all duration-300 hover:scale-110"
          >
            <AiFillLinkedin className="w-8 h-8 md:w-10 md:h-10" />
          </Link>

          <Link
            href="https://www.tiktok.com/@youcode.ubc"
            aria-label="TikTok"
            className="text-white transition-all duration-300 hover:scale-110"
          >
            <AiFillTikTok className="w-8 h-8 md:w-10 md:h-10" />
          </Link>
        </div>

        <p className="text-white text-sm md:text-base text-center tracking-wide font-semibold font-montserrat">
          Copyright © youCode2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;
