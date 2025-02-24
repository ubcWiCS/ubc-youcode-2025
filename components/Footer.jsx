import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineMail, AiOutlineInstagram } from 'react-icons/ai';

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0; /* Adjusted for footer to sit at the bottom */
  position: relative; 
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem; /* Padding for spacing */
  background-color: transparent; /* Removed black background */
`;

const Footer = () => {
  return (
    <StyledFooter>
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
      {/* <FooterSocial 
          facebookLink="your_facebook_link" 
          emailLink="mailto:ubcyoucode@gmail.com" 
          instagramLink="https://www.instagram.com/youcode.ubc/" 
          linkedinLink="your_linkedin_link" 
          Logolink="your_logo_link" 
          LogoImage="/path/to/logo.png" 
      /> */}
    </StyledFooter>
  );
};

const FooterSocialContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  gap: 2rem;
  justify-content: space-between;
  margin-right: 2rem;
  margin-left: 2rem;
  margin-bottom: 0;

  @media (max-width: 767px) {
    gap: 0.6rem;
    margin-right: 1rem;
    margin-left: 1rem;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    gap: 1.5rem;
  }
`;

const FooterSocial = ({ direction, facebookLink, emailLink, instagramLink, linkedinLink, Logolink, LogoImage }) => {
  return (
    <FooterSocialContainer direction={direction} id="contact">
      {/* {emailLink && (
        <Link href={emailLink}>
          <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-10 lg:h-10 relative hover:scale-110 transition duration-500">
            <Image src="/assets/Mail.png" alt="Mail" fill />
          </div>
        </Link>
      )} */}
      {/* {instagramLink && (
        <Link href={instagramLink}>
          <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-10 lg:h-10 relative hover:scale-110 transition duration-500">
            <Image src="/assets/Instagram.png" alt="Instagram" fill />
          </div>
        </Link>
      )} */}
    </FooterSocialContainer>
  );
};

export default Footer;
