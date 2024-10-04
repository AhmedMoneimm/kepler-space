// src/components/Exoplanet/Neptunian.jsx
import React, { useEffect, useState } from "react";

const Neptunian = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data/Exoplanets/Exoplanet_Neptunian_planets.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error loading JSON data:', error));
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-4">Neptunian</h1>
      <p>This page will contain information about Gas Neptunian.</p>
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
    </div>
  );
};

export default Neptunian;
