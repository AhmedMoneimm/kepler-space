// src/components/Exoplanet/Rocky.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Rocky = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data/Exoplanets/Exoplanet_Rocky.json')
      .then(response => response.json())
      .then(data => setData(data[0])) // Assuming the data is an array with one object
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white p-4">
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
    </div>
  );
};

export default Rocky;
