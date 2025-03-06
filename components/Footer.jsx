import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { AiOutlineMail, AiOutlineInstagram } from 'react-icons/ai';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column; /* Stack items vertically on small screens */
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: transparent;
  gap: 1rem; /* Add gap between stacked items */

  @media (min-width: 640px) {
    flex-direction: row; /* Switch to horizontal layout on larger screens */
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem; /* Increase padding on larger screens */
  }
`;

const FooterSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem; /* Smaller gap for small screens */

  @media (min-width: 640px) {
    gap: 1rem; /* Increase gap for larger screens */
  }

  @media (min-width: 768px) {
    gap: 1.5rem; /* Further increase gap for even larger screens */
  }
`;

const Footer = () => {
  return (
    <StyledFooter id="contact">
      {/* Left side Instagram handle */}
      <FooterSection>
        <Link href="https://www.instagram.com/ubcwics/">
          <AiOutlineInstagram className="w-6 h-6 sm:w-8 sm:h-8 text-white hover:text-pink-500" />
        </Link>
        <span className="text-white text-sm sm:text-base">@ubcwics</span>
      </FooterSection>

      {/* Middle section with email and Instagram */}
      <FooterSection>
        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="mailto:ubcyoucode@gmail.com">
            <AiOutlineMail className="w-6 h-6 sm:w-8 sm:h-8 text-white hover:text-blue-500" />
          </Link>
          <span className="text-white text-sm sm:text-base">ubcyoucode@gmail.com</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="https://www.instagram.com/youcode.ubc/">
            <AiOutlineInstagram className="w-6 h-6 sm:w-8 sm:h-8 text-white hover:text-pink-500" />
          </Link>
          <span className="text-white text-sm sm:text-base">@youcode_ubc</span>
        </div>
      </FooterSection>

      {/* Right side Instagram handle */}
      <FooterSection>
        <Link href="https://www.instagram.com/widsubc/">
          <AiOutlineInstagram className="w-6 h-6 sm:w-8 sm:h-8 text-white hover:text-pink-500" />
        </Link>
        <span className="text-white text-sm sm:text-base">@widsubc</span>
      </FooterSection>
    </StyledFooter>
  );
};

export default Footer;