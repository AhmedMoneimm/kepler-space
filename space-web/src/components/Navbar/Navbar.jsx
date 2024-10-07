import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // State to track which dropdown is open

  // Toggle dropdown visibility
  const toggleDropdown = (dropdown) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown)); // Open the clicked dropdown or close it if it's already open
  };

  // Close dropdown
  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  return (
    <nav
      data-aos="fade-down"
      className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-0"
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 text-white font-bold text-2xl">
            <img src={Logo} alt="Logo" className="w-10" />
            <span>Space Eagles</span>
          </div>
          <div className="text-white hidden sm:block">
            <ul className="flex items-center gap-6 text-xl py-4">
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
              {/* Exoplanets Dropdown */}
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
                        className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Exoplanet Overview
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/exoplanet/naming"
                        className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Exoplanet Naming
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/exoplanet/CandidateVSConfirmed"
                        className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Candidate VS Confirmed
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/exoplanet/life"
                        className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Search for Life
                      </Link>
                    </li>
                  </ul>
                )}

              </li>
              {/* Exoplanets Dropdown */}
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("exoplanets types")}
                  className="focus:outline-none hover:text-blue-500 transition-colors duration-200"
                >
                  Exoplanets types
                </button>
                {openDropdown === "exoplanets types" && (
                  <ul className="absolute left-1/2 mt-2 bg-white text-black rounded-md shadow-lg z-10 min-w-max transform -translate-x-1/2"> {/* Centered dropdown */}
                    <li>
                      <Link
                        to="/exoplanet/types"
                        className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Exoplanet Types
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/exoplanet/gas-giants"
                        className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Gas Giants
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/exoplanet/neptunian"
                        className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Neptunian
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/exoplanet/super-earth"
                        className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Super Earth
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/exoplanet/rocky"
                        className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Rocky
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              {/* Stars Dropdown */}
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
                        className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Stars Overview
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/stars/color"
                        className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Stars Colors
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/stars/life"
                        className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Stars Life Cycle
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/stars/planetary-systems"
                        className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition-colors duration-200"
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
                        className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Telescope Overview
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/telescope/hubble"
                        className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Hubble Space Telescope
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/telescope/james-webb"
                        className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        James Webb Space Telescope
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/telescope/Kepler_K2"
                        className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Kepler & K2
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/telescope/Spitzer"
                        className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Spitzer Space Telescope
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/telescope/Tess"
                        className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition-colors duration-200"
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
                        className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Methods Overview
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/methods/transit"
                        className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Transit Method
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/methods/radial-velocity"
                        className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Radial Velocity Method
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/methods/direct-imaging"
                        className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Direct Imaging Method
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/methods/microlensing"
                        className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition-colors duration-200"
                        onClick={closeDropdown}
                      >
                        Microlensing Method
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/methods/astrometry"
                        className="block px-4 py-2 hover:bg-gray-200 hover:text-blue-500 transition-colors duration-200"
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
    </nav>
  );
};

export default Navbar;