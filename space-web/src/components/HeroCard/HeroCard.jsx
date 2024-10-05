import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import wave from "../../assets/wave Gif.gif";
import telescopeImg from "../../assets/telescope.png"; // Replace with the correct path to your image
import exoplanetImg from "../../assets/exoplanet.png"; // Replace with the correct path to your image
import discoveryImg from "../../assets/scientist.png"; // Replace with the correct path to your image

const ServiceData = [
  {
    title: "Telescopes",
    content: "Instruments for exploring the cosmos",
    icon: <img src={telescopeImg} alt="Telescope" className="text-7xl" />,
    aosDelay: "300",
    path: "/telescope/overview", // Add path for routing
  },
  {
    title: "Exoplanets",
    content: "Over 5,600 known exoplanets",
    icon: <img src={exoplanetImg} alt="Exoplanet" className="text-7xl" />,
    aosDelay: "500",
    path: "/exoplanet/overview", // Add path for routing
  },
  {
    title: "Discovering Exoplanets Methods",
    content: "Identify distant worlds",
    icon: <img src={discoveryImg} alt="Discovery Methods" className="text-7xl" />,
    aosDelay: "700",
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
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
                {ServiceData.map((data, index) => {
                  return (
                    <Link
                      to={data.path} // Use Link for routing
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={data.aosDelay}
                      className="min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-sky-900/60 backdrop-blur-sm text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto transition-transform duration-200 hover:scale-105" // Add hover effect for better UX
                    >
                      {data.icon}
                      <h1><strong>{data.title}</strong></h1>
                      <p>{data.content}</p>
                      {/* You can uncomment the following line if you have a description */}
                      {/* <p className="text-sm">{data.description}</p> */}
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
