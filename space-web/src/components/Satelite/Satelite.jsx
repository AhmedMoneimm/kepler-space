import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import satelitImg from "../../assets/satelite2.jpg"; // You might want to change this image to something more related to the game

const Rapidscat = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleButtonClick = () => {
    navigate("/game"); // Navigate to the /game route when the button is clicked
  };

  return (
    <section className="bg-primary text-white py-20">
      <div className="container ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800 ">
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-sky-800 uppercase"
            >
              lets learn and have fun!
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="500"
              className="uppercase text-5xl"
            >
              Explore the Game
            </h1>
            <p data-aos="fade-up" data-aos-delay="700">
              Join us in an exciting journey through space! Our game allows you
              to navigate through different planets, solve challenges, and learn
              about exoplanets along the way. Test your knowledge and skills as
              you embark on this adventure!
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="900"
              className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              onClick={handleButtonClick} // Attach the click handler
            >
              Play Now
            </button>
          </div>
          <div data-aos="zoom-in">
            <img
              src={satelitImg} // Consider using a more relevant image for the game
              alt="Game illustration"
              className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rapidscat;
