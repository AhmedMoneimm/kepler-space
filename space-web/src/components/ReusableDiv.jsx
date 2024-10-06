import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import Particles from "react-tsparticles";
import quizAnimation from "../assets/quiz-animation.json"; // Replace with a fun quiz animation
import spaceBackground from "../assets/space-background.jpg"; // Path to the space background image

const ReusableDiv = ({ title, dataPath, quizPath, nextPath, previousPath, URL, topic }) => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  // Fetch the data from the provided data path
  useEffect(() => {
    fetch(dataPath)
      .then((response) => response.json())
      .then((data) => setData(data[0])) // Assuming the JSON is an array
      .catch((error) => console.error("Error fetching data:", error));
  }, [dataPath]);

  // Function to handle Text-to-Speech
  const speakText = (text) => {
    const synth = window.speechSynthesis;

    // Function to start speaking once voices are loaded
    const startSpeaking = () => {
      if (synth.speaking) {
        synth.cancel(); // Cancel if already speaking
      }

      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = "en-US";
      speech.volume = 1; // Set volume

      const voices = synth.getVoices();
      if (voices.length > 0) {
        speech.voice = voices[0]; // Set first available voice
        console.log("Speaking:", text);
        synth.speak(speech);
      } else {
        console.error("No voices available.");
      }
    };

    // Check if voices are already loaded
    if (synth.getVoices().length > 0) {
      startSpeaking();
    } else {
      // Wait for voices to be loaded
      synth.addEventListener("voiceschanged", startSpeaking);
    }
  };

  // Function to Pause Speech
  const pauseSpeech = () => {
    if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
      window.speechSynthesis.pause();
    }
  };

  // Function to Resume Speech
  const resumeSpeech = () => {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }
  };

  // Navigate to quiz page
  const handleQuizNavigation = () => {
    navigate(quizPath); // Navigate to the quiz page
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
  };

  // Navigate to next page
  const handleNextNavigation = () => {
    navigate(nextPath); // Navigate to the next page
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
  };

  // Navigate to previous page
  const handlePreviousNavigation = () => {
    navigate(previousPath); // Navigate to the previous page
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden w-full"
      style={{
        backgroundImage: `url(${spaceBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "4rem 1rem", // Adjust padding to reduce side spaces
      }}
    >
      {/* Background particle animation */}
      <Particles
        id="tsparticles"
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: { value: 60 },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.8 },
            size: { value: 2 },
            move: { speed: 1 },
          },
        }}
        style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0 }} // Ensure particles fill the container
      />

      {/* Title Section */}
      <motion.h1
        className="text-5xl font-extrabold text-blue-300 mb-8 z-10 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>

      {data ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gray-900 bg-opacity-80 p-8 rounded-lg shadow-lg flex flex-col items-center z-10 w-full max-w-2xl"
        >
          {Object.entries(data).map(([key, value], index) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.3 }}
              key={key}
              className="w-full bg-gray-700 bg-opacity-80 p-6 rounded-lg mb-6 hover:shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <motion.h2
                className="text-2xl font-semibold mb-2 text-center text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.2 }}
              >
                {key}
              </motion.h2>
              <motion.p
                className="text-lg text-center text-gray-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.2 }}
              >
                {value}
              </motion.p>

              {/* Text-to-Speech Controls */}
              <div className="flex justify-center mt-4">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200 mx-2"
                  onClick={() => speakText(value)} // Trigger speak
                >
                  Play
                </button>
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-200 mx-2"
                  onClick={pauseSpeech} // Trigger pause
                >
                  Pause
                </button>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200 mx-2"
                  onClick={resumeSpeech} // Trigger resume
                >
                  Resume
                </button>
              </div>
            </motion.div>
          ))}

          {/* NASA 3D Model */}
          {URL && (
            <div className="mt-8 flex flex-col justify-center items-center">
              <motion.p
                className="text-lg text-center text-gray-300 mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Explore more about {topic} on NASA&apos;s Eyes on Exoplanets website.
              </motion.p>
              <motion.button
                onClick={() => (window.location.href = URL)} // Open NASA's Eyes on Exoplanets website
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200 z-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Visit NASA
              </motion.button>
            </div>
          )}

          {/* Quiz Time Section */}
          <div className="mt-8 flex flex-col justify-center items-center">
            <motion.h2
              className="text-2xl font-bold mb-4 text-center text-blue-400"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              It&apos;s Quiz Time!
            </motion.h2>

            {/* Fun quiz animation */}
            <Lottie animationData={quizAnimation} style={{ height: 150, marginBottom: "1rem" }} />

            <motion.button
              onClick={handleQuizNavigation}
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200 z-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Go to Quiz
            </motion.button>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex space-x-4">
            <motion.button
              onClick={handlePreviousNavigation}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Previous
            </motion.button>
            <motion.button
              onClick={handleNextNavigation}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Next
            </motion.button>
          </div>
        </motion.div>
      ) : (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white text-lg z-10"
        >
          Loading data...
        </motion.p>
      )}
    </div>
  );
};

export default ReusableDiv;
