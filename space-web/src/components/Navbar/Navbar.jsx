import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav
      data-aos="fade-down"
      className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-0"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 text-white font-bold text-2xl">
            <img src={Logo} alt="Logo" className="w-10" />
            <span className="hidden sm:block">Space Eagles</span>
          </div>
          <button
            onClick={toggleMenu}
            className="sm:hidden text-white text-3xl focus:outline-none"
          >
            ☰
          </button>
          <div
            className={`text-white sm:block ${
              menuOpen ? "block" : "hidden"
            } w-full sm:w-auto`}
          >
            <ul className="flex flex-col sm:flex-row items-center gap-6 text-xl py-4">
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
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("exoplanets")}
                  className="focus:outline-none hover:text-blue-500 transition-colors duration-200"
                >
                  Exoplanets
                </button>
                {openDropdown === "exoplanets" && (
                  <ul className="absolute left-1/2 mt-2 bg-white text-black rounded-md shadow-lg z-10 min-w-max transform -translate-x-1/2"> {/* Centered dropdown */}
                    <li>
                      <Link
                        to="/exoplanet/overview"
                        className="block bg-gray-700 px-4 py-2 hover:bg-gray-900 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Exoplanet Overview
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/exoplanet/naming"
                        className="block bg-gray-700 px-4 py-2 hover:bg-gray-900 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Exoplanet Naming
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/exoplanet/CandidateVSConfirmed"
                        className="block bg-gray-700 px-4 py-2 hover:bg-gray-900 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Candidate VS Confirmed
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/exoplanet/life"
                        className="block bg-gray-700 px-4 py-2 hover:bg-gray-900 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Search for Life
                      </Link>
                    </li>
                  </ul>
                )}

              </li>
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("exoplanets types")}
                  className="focus:outline-none hover:text-blue-500 transition-colors duration-200"
                >
                  Exoplanets Types
                </button>
                {openDropdown === "exoplanets types" && (
                  <ul className="absolute left-1/2 mt-2 bg-white text-black rounded-md shadow-lg z-10 min-w-max transform -translate-x-1/2"> {/* Centered dropdown */}
                    <li>
                      <Link
                        to="/exoplanet/types"
                        className="block bg-gray-700 px-4 py-2 hover:bg-gray-900 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Exoplanet Types
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/exoplanet/gas-giants"
                        className="block bg-gray-700 px-4 py-2 hover:bg-gray-900 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Gas Giants
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/exoplanet/neptunian"
                        className="block bg-gray-700 px-4 py-2 hover:bg-gray-900 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Neptunian
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/exoplanet/super-earth"
                        className="block bg-gray-700 px-4 py-2 hover:bg-gray-900 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Super Earth
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/exoplanet/rocky"
                        className="block bg-gray-700 px-4 py-2 hover:bg-gray-900 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Rocky
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("stars")}
                  className="focus:outline-none hover:text-blue-500 transition-colors duration-200"
                >
                  Stars
                </button>
                {openDropdown === "stars" && (
                  <ul className="absolute left-1/2 mt-2 bg-white text-black rounded-md shadow-lg z-10 min-w-max transform -translate-x-1/2"> {/* Centered dropdown */}
                    <li>
                      <Link
                        to="/stars/overview"
                        className="block bg-gray-700 px-4 py-2 hover:bg-gray-900 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Stars Overview
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/stars/color"
                        className="block bg-gray-700 px-4 py-2 hover:bg-gray-900 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Stars Colors
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/stars/life"
                        className="block bg-gray-700 px-4 py-2 hover:bg-gray-900 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Stars Life Cycle
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/stars/planetary-systems"
                        className="block bg-gray-700 px-4 py-2 hover:bg-gray-900 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Planetary Systems
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              {/* Telescope Dropdown */}
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("telescope")}
                  className="focus:outline-none hover:text-blue-500 transition-colors duration-200"
                >
                  Telescope
                </button>
                {openDropdown === "telescope" && (
                  <ul className="absolute left-1/2 mt-2 bg-white text-black rounded-md shadow-lg z-10 min-w-max transform -translate-x-1/2"> {/* Centered dropdown */}
                    <li>
                      <Link
                        to="/telescope/overview"
                        className="block bg-gray-700 px-4 py-2 hover:bg-gray-900 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Telescope Overview
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/telescope/hubble"
                        className="block bg-gray-700 px-4 py-2 hover:bg-gray-900 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Hubble Space Telescope
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/telescope/james-webb"
                        className="block bg-gray-700 px-4 py-2 hover:bg-gray-900 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        James Webb Space Telescope
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/telescope/Kepler_K2"
                        className="block bg-gray-700 px-4 py-2 hover:bg-gray-900 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Kepler & K2
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/telescope/Spitzer"
                        className="block bg-gray-700 px-4 py-2 hover:bg-gray-900 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Spitzer Space Telescope
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/telescope/Tess"
                        className="block bg-gray-700 px-4 py-2 hover:bg-gray-900 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        TESS
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              {/* Methods Dropdown */}
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("methods")}
                  className="focus:outline-none hover:text-blue-500 transition-colors duration-200"
                >
                  Methods
                </button>
                {openDropdown === "methods" && (
                  <ul className="absolute left-1/2 mt-2 bg-white text-black rounded-md shadow-lg z-10 min-w-max transform -translate-x-1/2"> {/* Centered dropdown */}
                    <li>
                      <Link
                        to="/methods/overview"
                        className="block bg-gray-700 px-4 py-2 hover:bg-gray-900 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Methods Overview
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/methods/transit"
                        className="block bg-gray-700 px-4 py-2 hover:bg-gray-900 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Transit Method
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/methods/radial-velocity"
                        className="block bg-gray-700 px-4 py-2 hover:bg-gray-900 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Radial Velocity Method
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/methods/direct-imaging"
                        className="block bg-gray-700 px-4 py-2 hover:bg-gray-900 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Direct Imaging Method
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/methods/microlensing"
                        className="block bg-gray-700 px-4 py-2 hover:bg-gray-900 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Microlensing Method
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/methods/astrometry"
                        className="block bg-gray-700 px-4 py-2 hover:bg-gray-900 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Astrometry Method
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              {/* Game Button */}
              <li>
                <Link
                  to="/game"
                  onClick={closeDropdown}
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  Game
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .sm\\:hidden {
            display: block;
          }
          .sm\\:block {
            display: none;
          }
          nav {
            position: relative;
          }
          .container {
            padding: 0;
          }
          .flex {
            flex-direction: column;
            align-items: flex-start;
          }
          ul {
            width: 100%;
            padding-top: 1rem;
          }
          li {
            width: 100%;
            text-align: center;
            padding: 0.5rem 0;
          }
          button.sm\\:hidden {
            position: absolute;
            top: 1rem;
            right: 1rem;
          }
          .hidden {
            display: none;
          }
          .block {
            display: block;
          }
        }
        @media (max-width: 350px) {
          .text-2xl {
            font-size: 1rem;
            line-height: 1.2rem;
          }
          img.w-10 {
            width: 1.5rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;