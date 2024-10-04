import React, { useEffect, useState } from "react";

const Types = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/data/Exoplanets/Exoplanets_types.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-4">
            <h1 className="text-4xl font-bold mb-4">Exoplanet Types</h1>
            {data ? (
                <div>
                    {data.map((item, index) => (
                        <div key={index} className="mb-4">
                            {Object.keys(item).map((key, idx) => (
                                <p key={idx}>{key}: {item[key]}</p>
                            ))}
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Types;
