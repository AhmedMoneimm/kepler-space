import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // State to track which dropdown is open
  const [menuOpen, setMenuOpen] = useState(false); // State to track mobile menu open/close

  // Toggle dropdown visibility
  const toggleDropdown = (dropdown) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown)); // Open the clicked dropdown or close it if it's already open
  };

  // Close dropdown
  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav
      data-aos="fade-down"
      className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-0"
      style={{
        transition: "background-color 0.3s ease",
      }}
    >
      <style>
        {`
          @media (max-width: 768px) {
            .nav-links {
              display: none;
            }
            .mobile-menu {
              display: block;
            }
          }
          
          @media (min-width: 769px) {
            .mobile-menu {
              display: none;
            }
            .nav-links {
              display: flex;
            }
          }

          .mobile-dropdown {
            display: ${menuOpen ? "block" : "none"};
          }
        `}
      </style>
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 text-white font-bold text-2xl">
            <img src={Logo} alt="Logo" className="w-10" />
            <span>Space Eagles</span>
          </div>
          {/* Desktop Links */}
          <div className="text-white hidden sm:block nav-links">
            <ul className="flex items-center gap-6 text-xl py-4">
              {/* Your existing desktop links */}
              <li>
                <Link
                  to="/"
                  onClick={closeDropdown}
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={closeDropdown}
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              {/* Add other links here */}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="text-white block sm:hidden">
            <button
              className="mobile-menu text-3xl focus:outline-none"
              onClick={toggleMenu}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="mobile-dropdown sm:hidden bg-black text-white mt-2 p-4">
            <ul className="flex flex-col gap-4 text-xl">
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    closeDropdown();
                    toggleMenu(); // Close the menu after click
                  }}
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => {
                    closeDropdown();
                    toggleMenu();
                  }}
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              {/* Add more links */}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
