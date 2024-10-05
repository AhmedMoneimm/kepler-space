import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [telescopeDropdownOpen, setTelescopeDropdownOpen] = useState(false);
  const [exoplanetsDropdownOpen, setExoplanetsDropdownOpen] = useState(false);
  const [methodsDropdownOpen, setMethodsDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = (dropdown) => {
    if (dropdown === "telescope") {
      setTelescopeDropdownOpen((prev) => !prev);
      setExoplanetsDropdownOpen(false);
      setMethodsDropdownOpen(false);
    } else if (dropdown === "exoplanets") {
      setExoplanetsDropdownOpen((prev) => !prev);
      setTelescopeDropdownOpen(false);
      setMethodsDropdownOpen(false);
    } else if (dropdown === "methods") {
      setMethodsDropdownOpen((prev) => !prev);
      setTelescopeDropdownOpen(false);
      setExoplanetsDropdownOpen(false);
    }
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
            <Link to="/">
              <span>MONEIM GAMADAN</span>
            </Link>
          </div>
          <div className="text-white hidden sm:block">
            <ul className="flex items-center gap-6 text-xl py-4 ">
              <li>
                <Link to="#">About</Link>
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("telescope")}
                  className="focus:outline-none"
                >
                  Telescope
                </button>
                {telescopeDropdownOpen && (
                  <ul className="absolute left-0 mt-2 bg-white text-black rounded-md shadow-lg z-10">
                    <li>
                      <Link
                        to="/telescope/overview"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Telescope Overview
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/telescope/hubble"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Hubble Space Telescope
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/telescope/james-webb"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        James Webb Space Telescope
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/telescope/Kepler_K2"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Kepler & K2
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/telescope/Spitzer"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Spitzer Space Telescope
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/telescope/Tess"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        TESS
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("exoplanets")}
                  className="focus:outline-none"
                >
                  Exoplanets
                </button>
                {exoplanetsDropdownOpen && (
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
                        to="/exoplanet/types"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Exoplanet Types
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
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("methods")}
                  className="focus:outline-none"
                >
                  Methods
                </button>
                {methodsDropdownOpen && (
                  <ul className="absolute left-0 mt-2 bg-white text-black rounded-md shadow-lg z-10">
                    <li>
                      <Link
                        to="/methods/overview"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Methods Overview
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/methods/transit"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Transit Method
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/methods/radial-velocity"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Radial Velocity Method
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/methods/direct-imaging"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Direct Imaging Method
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/methods/microlensing"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Microlensing Method
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/methods/astrometry"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Astrometry Method
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
