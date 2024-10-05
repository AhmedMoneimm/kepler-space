// src/components/Exoplanet/ExoplanetOverview.jsx
import React from "react";
import { useNavigate } from "react-router-dom";  // Import to navigate to the quiz page
import { useEffect, useState } from "react";
 

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
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-4">Exoplanet Overview</h1>
      {exoplanetData ? (
        <div className="flex flex-col justify-center items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
            <p className="mb-4">{exoplanetData.Introduction}</p>
            <h2 className="text-2xl font-semibold mb-2">Body</h2>
            <p>{exoplanetData.Body}</p>
          </div>
        </div>
      ) : (
        <p>Loading exoplanet data...</p>
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
