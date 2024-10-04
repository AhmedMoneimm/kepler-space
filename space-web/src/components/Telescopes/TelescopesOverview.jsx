// src/components/Telescopes/TelescopesOverview.jsx
import React, { useEffect, useState } from 'react';

const TelescopesOverview = () => {
    const [telescopesData, setTelescopesData] = useState(null);

    useEffect(() => {
        fetch("/data/Telescope/Telescope_overview.json")
            .then((response) => response.json())
            .then((data) => setTelescopesData(data[0])) // Assuming the JSON is an array
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-4">
            <h1 className="text-4xl font-bold mb-4">Telescopes Overview</h1>
            {telescopesData ? (
                <div className="flex flex-col justify-center items-center">
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
                        <p className="mb-4">{telescopesData.Introduction}</p>
                        
                        <h2 className="text-2xl font-semibold mb-2">Telescopes</h2>
                        <p className="mb-4">{telescopesData.Telescopes}</p>
                    </div>
                </div>
            ) : (
                <p>Loading telescopes data...</p>
            )}
        </div>
    );
};

export default TelescopesOverview;