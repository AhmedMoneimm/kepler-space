import React from "react";
import { useNavigate } from "react-router-dom";  // Import the useNavigate hook
import sateliteImg from "../../assets/satelite1.jpg";

const Rapidscat = () => {
  const navigate = useNavigate();  // Initialize the navigate hook

  const handleClick = () => {
    navigate("/about");  // Navigate to the about page
  };

  return (
    <>
      <section className="bg-primary text-white pb-12">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
              <img
                src={sateliteImg}
                alt="Satellite"
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
            <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sky-800 uppercase"
              >
                our mission
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                Exploring Space, Inspiring Minds
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
                Our goal is simple: to make learning about space exciting and
                fun. We’re here to inspire curiosity and wonder, ensuring that
                education feels like an adventure, not a task.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                onClick={handleClick}  // Add onClick to handle navigation
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                Find Out Why We Do It
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rapidscat;
