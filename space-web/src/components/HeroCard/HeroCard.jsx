import { Link } from "react-router-dom"; // Import Link from react-router-dom
import wave from "../../assets/wave Gif.gif";
import telescopeImg from "../../assets/telescope.png"; // Replace with the correct path to your image
import exoplanetImg from "../../assets/exoplanet.png"; // Replace with the correct path to your image
import discoveryImg from "../../assets/scientist.png"; // Replace with the correct path to your image
import starsImg from "../../assets/stars.png"; // Commented out because this image path caused an error. Ensure this path exists.

const ServiceData = [
  {
    title: "Exoplanets",
    content: "Over 5,600 known exoplanets",
    icon: <img src={exoplanetImg} alt="Exoplanet" className="text-7xl" />,
    aosDelay: "300",
    path: "/exoplanet/overview", // Add path for routing
  },
  {
    title: "Stars",
    content: "Learn about the stars that light the universe",
     icon: <img src={starsImg} alt="Stars" className="text-7xl" />, // Commented out since starsImg is causing issues
    icon: <div className="text-7xl">★</div>, // Temporary placeholder icon
    aosDelay: "500",
    path: "/stars/overview", // Add path for routing
  },
  {
    title: "Telescopes",
    content: "Instruments for exploring the cosmos",
    icon: <img src={telescopeImg} alt="Telescope" className="text-7xl" />,
    aosDelay: "700",
    path: "/telescope/overview", // Add path for routing
  },
  {
    title: "Discovering Exoplanets Methods",
    content: "Identify distant worlds",
    icon: <img src={discoveryImg} alt="Discovery Methods" className="text-7xl" />,
    aosDelay: "900",
    path: "/methods/overview", // Add path for routing
  },
];

const HeroCard = () => {
  return (
    <>
      <section className="bg-primary">
        <div className="container">
          <div className="min-h-[400px]">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 relative z-10"> {/* Ensure 4 columns in one row */}
                {ServiceData.map((data, index) => {
                  return (
                    <Link
                      to={data.path} // Use Link for routing
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={data.aosDelay}
                      className="min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-sky-900/60 backdrop-blur-sm text-white text-center text-2xl py-8 px-3 w-full transition-transform duration-200 hover:scale-105" // Add hover effect for better UX
                    >
                      {data.icon}
                      <h1><strong>{data.title}</strong></h1>
                      <p>{data.content}</p>
                    </Link>
                  );
                })}
              </div>
              <img
                src={wave}
                alt=""
                className="h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroCard;
