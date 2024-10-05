// src/components/Exoplanet/GasGiants.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const GasGiants = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('/data/Exoplanets/Exoplanet_Gas_Giants.json')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
  const handleQuizNavigation = () => {
    navigate("/quizgas"); 
   }; // Navigate to the quiz page
   return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-4">Gas Giants</h1>
      {data.length > 0 && (
        <>
          <p className="mb-4">{data[0].Body1}</p>
          <p>{data[0].Body2}</p>
        </>
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

export default GasGiants;
