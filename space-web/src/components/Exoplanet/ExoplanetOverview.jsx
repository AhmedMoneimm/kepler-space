// src/components/Exoplanet/ExoplanetOverview.jsx
import React, { useEffect, useState } from "react";

const ExoplanetOverview = () => {
  const [exoplanetData, setExoplanetData] = useState(null);

  useEffect(() => {
    fetch("/data/Exoplanets/Exoplanet_overview.json")
      .then((response) => response.json())
      .then((data) => setExoplanetData(data[0])) // Assuming the JSON is an array
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
    </div>
  );
};

export default ExoplanetOverview;