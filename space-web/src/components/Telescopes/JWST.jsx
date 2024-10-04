// src/components/Telescopes/JWST.jsx
import React, { useEffect, useState } from 'react';

const JWST = () => {
    const [jwstData, setJwstData] = useState(null);

    useEffect(() => {
        fetch("/data/Telescope/Telescope_JWST.json")
            .then((response) => response.json())
            .then((data) => setJwstData(data[0])) // Assuming the JSON is an array
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-4">
            <h1 className="text-4xl font-bold mb-4">James Webb Space Telescope</h1>
            {jwstData ? (
                <div className="flex flex-col justify-center items-center">
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
                        <p className="mb-4">{jwstData.Introduction}</p>
                        
                        <h2 className="text-2xl font-semibold mb-2">Details</h2>
                        <p className="mb-4">{jwstData.Body1}</p>
                        <p className="mb-4">{jwstData.Body2}</p>
                        <p className="mb-4">{jwstData.Body3}</p>
                        <p className="mb-4">{jwstData.Body4}</p>
                    </div>
                </div>
            ) : (
                <p>Loading JWST data...</p>
            )}
        </div>
    );
};

export default JWST;
