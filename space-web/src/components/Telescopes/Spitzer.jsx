// src/components/Telescopes/Spitzer.jsx
import React, { useEffect, useState } from 'react';

const Spitzer = () => {
    const [spitzerData, setSpitzerData] = useState(null);

    useEffect(() => {
        fetch("/data/Telescope/Telescope_Spitzer.json")
            .then((response) => response.json())
            .then((data) => setSpitzerData(data[0])) // Assuming the JSON is an array
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-4">
            <h1 className="text-4xl font-bold mb-4">Spitzer Space Telescope</h1>
            {spitzerData ? (
                <div className="flex flex-col justify-center items-center">
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
                        <p className="mb-4">{spitzerData.Body}</p>
                    </div>
                <div className="mt-8">
                </div>
                </div>
            ) : (
                <p>Loading Spitzer data...</p>
            )}
        </div>
    );
};

export default Spitzer;
