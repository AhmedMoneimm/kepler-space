// src/components/Exoplanet/GasGiants.jsx
import React, { useEffect, useState } from "react";

const GasGiants = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data/Exoplanets/Exoplanet_Gas_Giants.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-4">Gas Giants</h1>
      {data.length > 0 && (
        <>
          <p className="mb-4">{data[0].Body1}</p>
          <p>{data[0].Body2}</p>
        </>
      )}
    </div>
  );
};

export default GasGiants;
