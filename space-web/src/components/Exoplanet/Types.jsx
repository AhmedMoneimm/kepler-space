import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Types = () => {
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/data/Exoplanets/Exoplanets_types.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    const handleQuizNavigation = () => {
        navigate("/quiztyp"); 
       };

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
       {/* Quiz Time Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">It's Quiz Time!</h2>
        <button
          onClick={handleQuizNavigation}
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Go to Quiz
        </button>
      </div>
    </div>

      );
    };

export default Types;
