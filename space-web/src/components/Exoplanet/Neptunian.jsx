// src/components/Exoplanet/Neptunian.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const Neptunian = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data/Exoplanets/Exoplanet_Neptunian_planets.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error loading JSON data:', error));
  }, []);
  const handleQuizNavigation = () => {
    navigate("/quiznep"); 
   };
   return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-4">Neptunian</h1>
      
      {data ? (
        <div>
          {data.map((item, index) => (
            <div key={index} className="mb-4">
              <p>{item.Body1}</p>
              <p>{item.Body2}</p>
              <p>{item.Body3}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading data...</p>
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
export default Neptunian;
