import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ReusableDiv = ({ title, dataPath, quizPath }) => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(dataPath)
      .then((response) => response.json())
      .then((data) => setData(data[0])) // Assuming the JSON is an array
      .catch((error) => console.error("Error fetching data:", error));
  }, [dataPath]);

  const handleQuizNavigation = () => {
    navigate(quizPath); // Navigate to the quiz page
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-900 via-black to-blue-900 text-white p-4">
      <motion.h1
        className="text-5xl font-extrabold mb-8"
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
          className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center"
        >
          {Object.entries(data).map(([key, value], index) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 1 }}
              key={key}
              className="bg-gray-800 p-6 rounded-lg shadow-lg w-full mb-4"
            >
              <motion.h2
                className="text-2xl font-semibold mb-2 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.2 }}
              >
                {key}
              </motion.h2>
              <motion.p
                className="mb-4 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
                {value}
              </motion.p>
            </motion.div>
          ))}

          {/* Quiz Time Section */}
          <div className="mt-8 flex flex-col justify-center items-center">
            <motion.h2
              className="text-2xl font-bold mb-4 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              It&apos;s Quiz Time!
            </motion.h2>
            <motion.button
              onClick={handleQuizNavigation}
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Go to Quiz
            </motion.button>
          </div>
        </motion.div>
      ) : (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Loading data...
        </motion.p>
      )}
    </div>
  );
};

export default ReusableDiv;
