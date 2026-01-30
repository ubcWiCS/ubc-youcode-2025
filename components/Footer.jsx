"use client";

import React from "react";
import Link from "next/link";
import {
  AiOutlineMail,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiFillTikTok,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center py-8 px-4 gap-2 bg-transparent">
      <div className="flex items-center justify-center gap-4 sm:gap-3 md:gap-4">
        <Link
          href="mailto:ubcyoucode@gmail.com"
          aria-label="Email"
          className="text-white transition-transform duration-300 ease-in-out hover:text-gray-400 hover:scale-110"
        >
          <AiOutlineMail className="w-8 h-8 md:w-12 md:h-12" />
        </Link>

        <Link
          href="https://www.instagram.com/youcode.ubc/"
          aria-label="Instagram"
          className="text-white transition-transform duration-300 ease-in-out hover:text-gray-400 hover:scale-110"
        >
          <AiOutlineInstagram className="w-8 h-8 md:w-12 md:h-12" />
        </Link>

        <Link
          href="https://www.linkedin.com/company/youcode-ubc/"
          aria-label="LinkedIn"
          className="text-white transition-transform duration-300 ease-in-out hover:text-gray-400 hover:scale-110"
        >
          <AiFillLinkedin className="w-8 h-8 md:w-12 md:h-12" />
        </Link>

        <Link
          href="https://www.tiktok.com/@youcode.ubc"
          aria-label="TikTok"
          className="text-white transition-transform duration-300 ease-in-out hover:text-gray-400 hover:scale-110"
        >
          <AiFillTikTok className="w-8 h-8 md:w-12 md:h-12" />
        </Link>
      </div>

      <p className="text-white text-sm md:text-base text-center mt-4">
        Copyright © youCode2026   
      </p>
    </footer>
  );
};

export default Footer;