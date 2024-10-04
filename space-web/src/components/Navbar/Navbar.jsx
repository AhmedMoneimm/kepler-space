// src/components/Navbar/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <nav
      data-aos="fade-down"
      className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-0"
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 text-white font-bold text-2xl">
            <img src={Logo} alt="" className="w-10" />
            <span>MONEIM GAMADAN</span>
          </div>
          <div className="text-white hidden sm:block">
            <ul className="flex items-center gap-6 text-xl py-4 ">
              <li>
                <Link to="#">About</Link>
              </li>
              <li>
                <Link to="#">Telescope</Link>
              </li>
              <li>
                <Link to="#">Articles</Link>
              </li>
              <li className="relative">
                <button
                  onClick={toggleDropdown}
                  className="focus:outline-none"
                >
                  Exoplanets
                </button>
                {dropdownOpen && (
                  <ul className="absolute left-0 mt-2 bg-white text-black rounded-md shadow-lg z-10">
                    <li>
                      <Link
                        to="/exoplanet/overview"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Exoplanet Overview
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/exoplanet/gas-giants"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Gas Giants
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/exoplanet/neptunian"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Neptunian
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/exoplanet/super-earth"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Super Earth
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/exoplanet/rocky"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Rocky
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
