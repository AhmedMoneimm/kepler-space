// src/components/Methods/Transit.jsx
import React, { useEffect, useState } from 'react';

const Transit = () => {
    const [transitData, setTransitData] = useState(null);

    useEffect(() => {
        fetch("/data/Discovery/Discovery_Transit.json")
            .then((response) => response.json())
            .then((data) => setTransitData(data[0])) // Assuming the JSON is an array
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-4">
            <h1 className="text-4xl font-bold mb-4">Transit Method</h1>
            {transitData ? (
                <div className="flex flex-col justify-center items-center">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Size and Speed</h2>
                    <p className="mb-4">{transitData["Size and Speed"]}</p>
                    <h2 className="text-2xl font-semibold mb-2">Multiple Planets</h2>
                    <p className="mb-4">{transitData["Multiple Planets"]}</p>
                    <h2 className="text-2xl font-semibold mb-2">Atmospheric Composition</h2>
                    <p className="mb-4">{transitData["Atmospheric Composition"]}</p>
                    <h2 className="text-2xl font-semibold mb-2">Temperature and Habitability</h2>
                    <p>{transitData["Temperature and Habitability"]}</p>
                </div>
                </div>
            ) : (
                <p>Loading transit data...</p>
                ) 
            }
        </div>
    );
};

export default Transit;