// src/components/Methods/Microlensing.jsx
import React, { useEffect, useState } from 'react';

const Microlensing = () => {
    const [microlensingData, setMicrolensingData] = useState(null);

    useEffect(() => {
        fetch("/data/Discovery/Discovery_Microlensing.json")
            .then((response) => response.json())
            .then((data) => setMicrolensingData(data[0])) // Assuming the JSON is an array
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-4">
            <h1 className="text-4xl font-bold mb-4">Microlensing Method</h1>
            {microlensingData ? (
                <div className="flex flex-col justify-center items-center">
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
                        <p className="mb-4">{microlensingData.Introduction}</p>
                        
                        <h2 className="text-2xl font-semibold mb-2">Detection</h2>
                        <p className="mb-4">{microlensingData.Detection}</p>
                        
                        <h2 className="text-2xl font-semibold mb-2">Advantages</h2>
                        <p className="mb-4">{microlensingData.Advantages}</p>
                        
                        <h2 className="text-2xl font-semibold mb-2">Limitation</h2>
                        <p className="mb-4">{microlensingData.Limitation}</p>
                    </div>
                </div>
            ) : (
                <p>Loading microlensing data...</p>
            )}
        </div>
    );
};

export default Microlensing;