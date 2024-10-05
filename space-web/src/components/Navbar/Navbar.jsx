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
            <img src={Logo} alt="" className="w-10" />
            <span>MONEIM GAMADAN</span>
          </div>
          <div className="text-white hidden sm:block">
            <ul className="flex items-center gap-6 text-xl py-4 ">
              <li>
                <Link to="/" onClick={closeDropdown}>Home</Link>
              </li>
              <li>
                <Link to="#" onClick={closeDropdown}>About</Link>
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("telescope")}
                  className="focus:outline-none"
                >
                  Telescope
                </button>
                {openDropdown === "telescope" && (  // Check if this dropdown should be open
                  <ul className="absolute left-0 mt-2 bg-white text-black rounded-md shadow-lg z-10">
                    <li>
                      <Link
                        to="/telescope/overview"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={closeDropdown}
                      >
                        Telescope Overview
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/telescope/hubble"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={closeDropdown}
                      >
                        Hubble Space Telescope
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/telescope/james-webb"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={closeDropdown}
                      >
                        James Webb Space Telescope
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/telescope/Kepler_K2"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={closeDropdown}
                      >
                        Kepler & K2
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/telescope/Spitzer"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={closeDropdown}
                      >
                        Spitzer Space Telescope
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/telescope/Tess"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={closeDropdown}
                      >
                        TESS
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("exoplanets")}  // Update to identify this dropdown
                  className="focus:outline-none"
                >
                  Exoplanets
                </button>
                {openDropdown === "exoplanets" && (  // Check if this dropdown should be open
                  <ul className="absolute left-0 mt-2 bg-white text-black rounded-md shadow-lg z-10">
                    <li>
                      <Link
                        to="/exoplanet/overview"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={closeDropdown}
                      >
                        Exoplanet Overview
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/exoplanet/types"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={closeDropdown}
                      >
                        Exoplanet Types
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/exoplanet/gas-giants"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={closeDropdown}
                      >
                        Gas Giants
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/exoplanet/neptunian"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={closeDropdown}
                      >
                        Neptunian
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/exoplanet/super-earth"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={closeDropdown}
                      >
                        Super Earth
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/exoplanet/rocky"
                        className="block px-4 py-2 hover:bg-gray-200"
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
                  onClick={() => toggleDropdown("methods")} // Update to identify this dropdown
                  className="focus:outline-none"
                >
                  Methods
                </button>
                {openDropdown === "methods" && (  // Check if this dropdown should be open
                  <ul className="absolute left-0 mt-2 bg-white text-black rounded-md shadow-lg z-10">
                    <li>
                      <Link
                        to="/methods/overview"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={closeDropdown}
                      >
                        Methods Overview
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/methods/transit"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={closeDropdown}
                      >
                        Transit Method
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/methods/radial-velocity"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={closeDropdown}
                      >
                        Radial Velocity Method
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/methods/direct-imaging"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={closeDropdown}
                      >
                        Direct Imaging Method
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/methods/microlensing"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={closeDropdown}
                      >
                        Microlensing Method
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/methods/astrometry"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={closeDropdown}
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
