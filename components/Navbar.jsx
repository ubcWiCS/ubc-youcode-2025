"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 w-full z-50 bg-[#485D95]/[0.73]">
        <div className="flex items-center justify-between px-4 h-12 md:h-14">
          {/* Desktop menu */}
          <ul className="hidden sm:flex ml-auto items-center text-[10px] lg:text-lg 2xl:text-2xl">
            <NavItem href="/#about">About</NavItem>
            <NavItem href="/#schedule">Schedule</NavItem>
            <NavItem href="/#faq">FAQ</NavItem>
            <NavItem href="/#sponsors">Sponsors</NavItem>
            <NavItem href="/#contact">Contact</NavItem>
            <NavItem href="/#team">Team</NavItem>
          </ul>

          {/* Mobile menu button */}
          <button
            className="sm:hidden ml-auto p-1 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg
              className="h-6 w-6 fill-current text-accent-magenta"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 6h18v1H3V6zm0 5h18v1H3v-1zm0 5h18v1H3v-1z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#E5FFFF] flex items-center justify-center sm:hidden">
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 text-3xl text-accent-magenta"
          >
            &times;
          </button>

          <ul className="flex flex-col items-center space-y-6 text-2xl text-accent-magenta font-bold">
            <NavItem href="/#about" onClick={closeMenu}>About</NavItem>
            <NavItem href="/#schedule" onClick={closeMenu}>Schedule</NavItem>
            <NavItem href="/#faq" onClick={closeMenu}>FAQ</NavItem>
            <NavItem href="/#sponsors" onClick={closeMenu}>Sponsors</NavItem>
            <NavItem href="/#contact" onClick={closeMenu}>Contact</NavItem>
            <NavItem href="/#team" onClick={closeMenu}>Team</NavItem>
          </ul>
        </div>
      )}
    </>
  );
};

const NavItem = ({ href, children, onClick }) => (
  <li className="px-3 py-1 md:px-4 md:py-2 hover:bg-primary-darkgreen hover:scale-110 transition duration-300">
    <Link href={href} onClick={onClick}>
      {children}
    </Link>
  </li>
);

export default Navbar;