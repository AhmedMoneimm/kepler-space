import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const citations = [
    { url: "https://science.nasa.gov/mission/hubble/overview/about-hubble/", text: "Hubble Space Telescope" },
    { url: "https://science.nasa.gov/resource/overview-of-kepler-mission/", text: "Kepler Mission Overview" },
    { url: "https://science.nasa.gov/mission/tess", text: "TESS Mission" },
    { url: "https://science.nasa.gov/mission/kepler", text: "Kepler Mission" },
    { url: "https://science.nasa.gov/universe/exoplanets/10-things-all-about-trappist-1-2/", text: "TRAPPIST-1 System" },
    { url: "https://jwst.nasa.gov/content/about/index.html", text: "James Webb Space Telescope" },
    { url: "https://science.nasa.gov/exoplanets/facts/", text: "Exoplanet Facts" },
    { url: "https://science.nasa.gov/exoplanets/gas-giant/", text: "Gas Giant Exoplanets" },
    { url: "https://science.nasa.gov/exoplanets/stars/", text: "Stars and Exoplanets" },
    { url: "https://science.nasa.gov/exoplanets/big-questions/", text: "Big Questions in Exoplanet Science" },
    { url: "https://science.nasa.gov/exoplanets/glossary/", text: "Exoplanet Glossary" },
    { url: "https://science.nasa.gov/exoplanets/planet-types/", text: "Exoplanet Types" },
    { url: "https://science.nasa.gov/exoplanets/super-earth/", text: "Super-Earth Exoplanets" },
    { url: "https://science.nasa.gov/universe/stars/types/", text: "Types of Stars" },
    { url: "https://science.nasa.gov/exoplanets/neptune-like/", text: "Neptune-like Exoplanets" },
    { url: "https://science.nasa.gov/universe/black-holes/", text: "Black Holes" },
    { url: "https://exoplanets.nasa.gov/alien-worlds/ways-to-find-a-planet/?intent=021", text: "Ways to Find a Planet" },
    { url: "https://science.nasa.gov/exoplanets/search-for-life/", text: "Search for Life" },
    { url: "https://science.nasa.gov/exoplanets/terrestrial/", text: "Terrestrial Exoplanets" },
    { url: "https://science.nasa.gov/exoplanets/habitable-zone/", text: "Habitable Zone" },
    { url: "https://science.nasa.gov/exoplanets/can-we-find-life/", text: "Can We Find Life?" },
    { url: "https://science.nasa.gov/exoplanets/missions/", text: "Exoplanet Missions" },
    { url: "https://science.nasa.gov/exoplanets/why-we-search", text: "Why We Search for Exoplanets" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-semibold text-white mb-4">Space Eagles Exoplanet Explorer</h2>
            <p className="text-sm">Discover the wonders of exoplanets and the missions that help us explore them.</p>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <h3 className="text-lg font-semibold text-white mb-4">Exoplanet Resources</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {citations.map((citation, index) => (
                <a
                  key={index}
                  href={citation.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-blue-400 transition-colors duration-300"
                >
                  {citation.text}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 sm:mb-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              {/* <FaFacebook className="h-6 w-6" /> */}
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              {/* <FaInstagram className="h-6 w-6" /> */}
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              {/* <FaLinkedin className="h-6 w-6" /> */}
            </a>
          </div>
          <div className="text-sm text-gray-400">
            <p>&copy; 2024  Space Eagles Exoplanet Explorer.</p>
            <p>Data sourced from NASA and various space agencies.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;