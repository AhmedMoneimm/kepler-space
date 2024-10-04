// src/components/Telescopes/Hubble.jsx
import React, { useEffect, useState } from 'react';

const Hubble = () => {
    const [hubbleData, setHubbleData] = useState(null);

    useEffect(() => {
        fetch("/data/Telescope/Telescope_Hubble.json")
            .then((response) => response.json())
            .then((data) => setHubbleData(data[0])) // Assuming the JSON is an array
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-4">
            <h1 className="text-4xl font-bold mb-4">Hubble Space Telescope</h1>
            {hubbleData ? (
                <div className="flex flex-col justify-center items-center">
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
                        <p className="mb-4">{hubbleData.Introduction}</p>
                        
                        <h2 className="text-2xl font-semibold mb-2">Details</h2>
                        <p className="mb-4">{hubbleData.Body1}</p>
                        <p className="mb-4">{hubbleData.Body2}</p>
                        <p className="mb-4">{hubbleData.Body3}</p>
                    </div>
                </div>
            ) : (
                <p>Loading Hubble data...</p>
            )}
        </div>
    );
};

export default Hubble;
