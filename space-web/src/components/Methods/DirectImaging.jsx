// src/components/Methods/DirectImaging.jsx
import React, { useEffect, useState } from 'react';

const DirectImaging = () => {
    const [directImagingData, setDirectImagingData] = useState(null);

    useEffect(() => {
        fetch("/data/Discovery/Discovery_Direct_Imaging.json")
            .then((response) => response.json())
            .then((data) => setDirectImagingData(data[0])) // Assuming the JSON is an array
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-4">
            <h1 className="text-4xl font-bold mb-4">Direct Imaging Method</h1>
            {directImagingData ? (
                <div className="flex flex-col justify-center items-center">
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
                        <p className="mb-4">{directImagingData.Introduction}</p>
                        
                        <h2 className="text-2xl font-semibold mb-2">Challenges</h2>
                        <p className="mb-4">{directImagingData.challenges}</p>
                        
                        <h2 className="text-2xl font-semibold mb-2">Shine Blockers</h2>
                        <p className="mb-4">{directImagingData.ShineBlockers}</p>
                        
                        <h2 className="text-2xl font-semibold mb-2">Techniques</h2>
                        <p className="mb-4">{directImagingData.Techniques}</p>
                        
                        <h2 className="text-2xl font-semibold mb-2">Future</h2>
                        <p className="mb-4">{directImagingData.future}</p>
                    </div>
                </div>
            ) : (
                <p>Loading direct imaging data...</p>
            )}
        </div>
    );
};

export default DirectImaging;