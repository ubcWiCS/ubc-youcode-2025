import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { AiOutlineMail, AiOutlineInstagram } from 'react-icons/ai';

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Adjusted to space out items */
  margin-bottom: 0;
  position: relative; 
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem; /* Padding for spacing */
  background-color: transparent;
`;

const Footer = () => {
  return (
    <StyledFooter>
      {/* Left side Instagram handle */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        <Link href="https://www.instagram.com/ubcwics/">
          <AiOutlineInstagram className="w-8 h-8 sm:w-12 sm:h-12 text-white hover:text-pink-500" />
        </Link>
        <span className="text-white text-sm sm:text-lg">@ubcwics</span>
      </div>

      {/* Centered Email and Instagram */}
      <div className="flex sm:flex-row items-center gap-4 sm:gap-8 md:gap-10 text-center sm:text-left">
        {/* Email */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <Link href="mailto:ubcyoucode@gmail.com">
            <AiOutlineMail className="w-8 h-8 sm:w-12 sm:h-12 text-white hover:text-blue-500" />
          </Link>
          <span className="text-white text-sm sm:text-lg">ubcyoucode@gmail.com</span>
        </div>

        {/* Instagram */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <Link href="https://www.instagram.com/youcode.ubc/">
            <AiOutlineInstagram className="w-8 h-8 sm:w-12 sm:h-12 text-white hover:text-pink-500" />
          </Link>
          <span className="text-white text-sm sm:text-lg">@youcode_ubc</span>
        </div>
      </div>

      {/* Right side Instagram handle */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        <Link href="https://www.instagram.com/widsubc/">
          <AiOutlineInstagram className="w-8 h-8 sm:w-12 sm:h-12 text-white hover:text-pink-500" />
        </Link>
        <span className="text-white text-sm sm:text-lg">@widsubc</span>
      </div>
    </StyledFooter>
  );
};

export default Footer;
