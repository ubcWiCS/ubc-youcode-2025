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
      id="contact"
      className="
        w-full  
        -mt-20 md:-mt-32 lg:-mt-18
        min-h-[80vh] sm:min-h-[90vh] lg:min-h-[90vh] xl:min-h-[50vh]
        relative flex flex-col items-center justify-end
        px-4 pb-8 gap-8
        bg-cover bg-top bg-no-repeat xl:bg-[#878b8c]
      "
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      {/* Team Section */}
      <div className="w-full max-w-7xl">
        <h1
          className="text-center font-dm italic 
             text-3xl sm:text-3xl md:text-4xl leading-snug"
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
      <div className="flex flex-col items-center gap-4 z-10">
        <div className="flex items-center justify-center gap-4 sm:gap-4">
          <Link
            href="mailto:ubcyoucode@gmail.com"
            aria-label="Email"
            className="text-white transition-all duration-300 hover:scale-105"
          >
            <AiOutlineMail className="w-6 h-6 md:w-8 md:h-8" />
          </Link>

          <Link
            href="https://www.instagram.com/youcode.ubc/"
            aria-label="Instagram"
            className="text-white transition-all duration-300 hover:scale-105"
          >
            <AiOutlineInstagram className="w-6 h-6 md:w-8 md:h-8" />
          </Link>

          <Link
            href="https://www.linkedin.com/company/youcode-ubc/"
            aria-label="LinkedIn"
            className="text-white transition-all duration-300 hover:scale-105"
          >
            <AiFillLinkedin className="w-6 h-6 md:w-8 md:h-8" />
          </Link>

          <Link
            href="https://www.tiktok.com/@youcode.ubc"
            aria-label="TikTok"
            className="text-white transition-all duration-300 hover:scale-105"
          >
            <AiFillTikTok className="w-6 h-6 md:w-8 md:h-8" />
          </Link>
        </div>

        <p className="text-white text-xs md:text-sm text-center tracking-wide font-semibold font-montserrat">
          Copyright © youCode2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;
