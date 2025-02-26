"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleResourcesClick = () => {
    window.open("https://momentous-alley-371.notion.site/Pre-Hackathon-Resources-1a56bd9d8cc780a7b3d9e3855d697e70", "_blank");
  };

  return (
    <div>
      <div
        className={`fixed top-0 w-full z-10 ease-in bg-transparent hover:bg-dark-green`}
        style={{ background: "linear-gradient(to right, #D9FFFF 0%, #C4F9F9 53%, #B2F4F4 100%)" }}
      >
        <div className="flex justify-between items-center px-4 py-2">
          <Link href="/" className="hover:scale-105 transition duration-500">
            <div className="w-10 h-10 md:w-16 md:h-16 relative">
                <Image src="/assets/youCodelogo.png" width={64} height={64} alt="YouCode Logo" />
            </div>
          </Link>

          <div className="sm:hidden">
            <button className="p-2 focus:outline-none" onClick={toggleMenu} aria-label="Toggle Menu">
              <svg className="h-6 w-6 fill-current text-accent-magenta font-bold" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M3 6h18v1H3V6zm0 5h18v1H3v-1zm0 5h18v1H3v-1z" />
              </svg>
            </button>
          </div>

          <div className="hidden sm:flex items-center">
            <ul className="flex flex-row justify-end text-[10px] lg:text-lg 2xl:text-2xl text-key">
              <NavItem href="/#schedule">About</NavItem>
              <NavItem href="/#schedule">Schedule</NavItem>
              <NavItem onClick={handleResourcesClick}>Resources</NavItem>
              <NavItem href="/#faq">FAQ</NavItem>
              <NavItem href="/#sponsors">Sponsors</NavItem>
              <NavItem href="/#carousel-section">Contact</NavItem>
              <NavItem href="/#carousel-section">Team</NavItem>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed bg-[#E5FFFF] inset-0 bg-white z-50 flex items-center justify-center sm:hidden">
          <button onClick={closeMenu} className="absolute top-4 right-4 text-3xl text-accent-magenta">
            &times;
          </button>
          <ul className="flex flex-col items-center space-y-6 text-2xl text-accent-magenta font-bold ">
            <NavItem href="/#about" onClick={closeMenu}>
              About
            </NavItem>
            <NavItem href="/#schedule" onClick={closeMenu}>
              Schedule
            </NavItem>
            <NavItem onClick={handleResourcesClick} onClick={closeMenu}>
              Resources
            </NavItem>
            <NavItem href="/#faq" onClick={closeMenu}>
              FAQ
            </NavItem>
            <NavItem href="/#sponsors" onClick={closeMenu}>
              Sponsors
            </NavItem>
            <NavItem href="/#contact" onClick={closeMenu}>
              Contact
            </NavItem>
            <NavItem href="/team" onClick={closeMenu}>
              Team
            </NavItem>
          </ul>
        </div>
      )}
    </div>
  );
};

const NavItem = ({ href, children, onClick }) => (
  <li className="p-2 md:p-4 hover:bg-primary-darkgreen hover:scale-110 transition duration-500">
    {href ? (
      <Link href={href} onClick={onClick}>
        {children}
      </Link>
    ) : (
      <button onClick={onClick} className="text-inherit">
        {children}
      </button>
    )}
  </li>
);

export default Navbar;
