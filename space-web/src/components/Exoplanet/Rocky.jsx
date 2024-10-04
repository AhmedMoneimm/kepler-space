// src/components/Exoplanet/Rocky.jsx
import React, { useEffect, useState } from "react";

const Rocky = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data/Exoplanets/Exoplanet_Rocky.json')
      .then(response => response.json())
      .then(data => setData(data[0])) // Assuming the data is an array with one object
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-4">Rocky</h1>
      {data ? (
        <div>
          {Object.keys(data).map((key, index) => (
            <p key={index}>{data[key]}</p>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Rocky;
