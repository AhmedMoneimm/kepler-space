// src/components/Telescopes/TESS.jsx
import React, { useEffect, useState } from 'react';

const TESS = () => {
    const [tessData, setTessData] = useState(null);

    useEffect(() => {
        fetch("/data/Telescope/Telescope_TESS.json")
            .then((response) => response.json())
            .then((data) => setTessData(data[0])) // Assuming the JSON is an array
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-4">
            <h1 className="text-4xl font-bold mb-4">TESS Space Telescope</h1>
            {tessData ? (
                <div className="flex flex-col justify-center items-center">
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
                        <p className="mb-4">{tessData.Body1}</p>
                    </div>
                <div className="mt-8">
                </div>
                </div>
            ) : (
                <p>Loading TESS data...</p>
            )}
        </div>
    );
};

export default TESS;
