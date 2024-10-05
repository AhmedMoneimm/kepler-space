// src/components/Exoplanet/Rocky.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import for animations
import { useNavigate } from "react-router-dom"; // Import to navigate to the quiz page

const Rocky = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data/Exoplanets/Exoplanet_Rocky.json')
      .then(response => response.json())
      .then(data => setData(data[0])) // Assuming the data is an array with one object
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleQuizNavigation = () => {
    navigate("/quizrok"); // Navigate to the quiz page
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-900 via-black to-blue-900 text-white p-4">
      <motion.h1 
        className="text-5xl font-extrabold mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Rocky
      </motion.h1>
      {data ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          {Object.keys(data).map((key, index) => (
            <motion.p 
              key={index} 
              className="text-lg mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <span className="font-semibold">{key}:</span> {data[key]}
            </motion.p>
          ))}
        </motion.div>
      ) : (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Loading...
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

export default Rocky;
