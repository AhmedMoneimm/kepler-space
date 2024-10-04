// src/components/Telescopes/Kepler.jsx
import React, { useEffect, useState } from 'react';

const Kepler = () => {
    const [keplerData, setKeplerData] = useState(null);

    useEffect(() => {
        fetch("/data/Telescope/Telescope_Kepler_k2.json")
            .then((response) => response.json())
            .then((data) => setKeplerData(data[0])) // Assuming the JSON is an array
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-4">
            <h1 className="text-4xl font-bold mb-4">Kepler Space Telescope</h1>
            {keplerData ? (
                <div className="flex flex-col justify-center items-center">
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
                        <p className="mb-4">{keplerData.Introduction}</p>
                        
                        <h2 className="text-2xl font-semibold mb-2">Details</h2>
                        <p className="mb-4">{keplerData.Body1}</p>
                        <p className="mb-4">{keplerData.Body2}</p>
                        <p className="mb-4">{keplerData.Body3}</p>
                    </div>
                </div>
            ) : (
                <p>Loading Kepler data...</p>
            )}
        </div>
    );
};

export default Kepler;
