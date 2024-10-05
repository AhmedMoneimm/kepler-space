// src/components/Exoplanet/ExoplanetOverview.jsx
import React from "react";
import { useNavigate } from "react-router-dom";  // Import to navigate to the quiz page
import { useEffect, useState } from "react";
 import { motion } from "framer-motion";

const ExoplanetOverview = () => {
  const navigate = useNavigate();
  const [exoplanetData, setExoplanetData] = useState(null);

  useEffect(() => {
    fetch("/data/Exoplanets/Exoplanet_overview.json")
      .then((response) => response.json())
      .then((data) => setExoplanetData(data[0])) // Assuming the JSON is an array
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const handleQuizNavigation = () => {
    navigate("/quiz");  // Navigate to the quiz page
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-900 via-black to-blue-900 text-white p-4">
      <motion.h1 
        className="text-5xl font-extrabold mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Exoplanet Overview
      </motion.h1>
      {exoplanetData ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col justify-center items-center bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <motion.h2 
            className="text-2xl font-semibold mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Introduction
          </motion.h2>
          <motion.p 
            className="mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {exoplanetData.Introduction}
          </motion.p>
          <motion.h2 
            className="text-2xl font-semibold mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Body
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            {exoplanetData.Body}
          </motion.p>
        </motion.div>
      ) : (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Loading exoplanet data...
        </motion.p>
      )}

      {/* Quiz Time Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">It's Quiz Time!</h2>
        <button
          onClick={handleQuizNavigation}
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Go to Quiz
        </button>
      </div>
    </div>
  );
};

export default ExoplanetOverview;
