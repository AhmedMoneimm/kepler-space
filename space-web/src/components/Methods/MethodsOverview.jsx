// src/components/Methods/MethodsOverview.jsx
import React, { useEffect, useState } from "react";

const MethodsOverview = () => {
    const [methodsData, setMethodsData] = useState(null);

    useEffect(() => {
        fetch("/data/Discovery/Methods_overview.json")
            .then((response) => response.json())
            .then((data) => setMethodsData(data[0])) // Assuming the JSON is an array
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-4">
            <h1 className="text-4xl font-bold mb-4">Methods Overview</h1>
            {methodsData ? (
                <div className="flex flex-col justify-center items-center">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
                        <p className="mb-4">{methodsData.Introduction}</p>
                        <h2 className="text-2xl font-semibold mb-2">Methods</h2>
                        <p className="mb-4">{methodsData.Methods}</p>
                        <h2 className="text-2xl font-semibold mb-2">Main</h2>
                        <p>{methodsData.Main}</p>
                    </div>
                </div>
            ) : (
                <p>Loading methods data...</p>
            )}
        </div>
    );
};

export default MethodsOverview;