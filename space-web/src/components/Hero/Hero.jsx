
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import MoonSurfacePng from "../../assets/moon-surface-hd.png"; // Updated asset name for clarity

const Hero = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleDiscoverMore = () => {
    navigate("/exoplanet/overview"); // Navigate to the desired path
  };

  return (
    <div className="bg-black/20 h-full relative">
      <div className="h-full flex justify-center items-start p-4 pt-28"> {/* Increased padding from pt-20 to pt-28 */}
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="text-white space-y-4 lg:pr-36">
            <h1 data-aos="fade-up" className="text-6xl font-extrabold"> {/* Increased to text-6xl and font-extrabold */}
              Explore like a Space Eagle!
            </h1>
            <p data-aos="fade-up" data-aos-delay="300" className="text-xl"> {/* Increased to text-xl */}
              Join Space Eagles as an intern! Learn from NASA's top scientists about advanced telescopes and cutting-edge AI to discover exoplanets and unravel the universe's mysteries!
            </p>
            <p data-aos="fade-up" data-aos-delay="400" className="text-xl"> {/* Increased to text-xl */}
              Embark on an epic adventure exploring 5,600+ exoplanets aboard our spaceship! Enjoy stunning graphics, immersive gameplay, and a captivating story that will keep you on the edge of your seat!
            </p>
            <button
              onClick={handleDiscoverMore} // Handle button click
              data-aos="fade-up"
              data-aos-delay="500"
              className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-2 rounded-md text-lg duration-200 z-20 relative" // Added text-lg for bigger button text
            >
              Discover More
            </button>
          </div>
          <div className="hidden sm:block"></div>
        </div>
      </div>
      <img
        src={MoonSurfacePng}
        alt="Moon Surface"
        className="absolute right-0 bottom-0 w-full brightness-50 z-10"
      />
  
      <div className="absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-primary to-90% h-[20px] sm:h-[50px] md:h-[60px]"></div>
    </div>
  );
  
};

export default Hero;
