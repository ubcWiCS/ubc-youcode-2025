"use client";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    closeMenu();
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "recap", label: "Recap" },
    { id: "faq", label: "FAQ" },
    // { id: "sponsors", label: "Sponsors" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <>
      {/* Navbar */}
      <div className="w-full z-50 bg-[#485D95] font-lexend font-medium">
        <div className="flex items-center justify-between px-4 h-12 md:h-14">
          {/* Desktop menu */}
          <ul className="hidden sm:flex ml-auto items-center text-xs md:text-sm lg:text-base tracking-wide">
            {navItems.map((item) => (
              <NavItem
                key={item.id}
                onClick={(e) => scrollToSection(e, item.id)}
              >
                {item.label}
              </NavItem>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            className="sm:hidden ml-auto p-1 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg
              className="h-6 w-6 fill-current text-white"
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

      {/* Mobile menu*/}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#485D95] flex flex-col items-center justify-center sm:hidden text-white text-lg md:text-xl lg:text-2xl font-bold transition-opacity duration-300">
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6 text-4xl"
          >
            &times;
          </button>

          <ul className="flex flex-col items-center space-y-8">
            {navItems.map((item) => (
              <NavItem
                key={item.id}
                onClick={(e) => scrollToSection(e, item.id)}
                fullScreen
              >
                {item.label}
              </NavItem>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

const NavItem = ({ children, onClick, fullScreen }) => (
  <li
    className={`px-3 py-2 md:px-4 md:py-3 hover:bg-primary-darkgreen hover:scale-110 transition duration-300 ${
      fullScreen ? "text-center w-48 md:w-60" : ""
    }`}
  >
    <a href="#" onClick={onClick}>
      {children}
    </a>
  </li>
);

export default Navbar;
