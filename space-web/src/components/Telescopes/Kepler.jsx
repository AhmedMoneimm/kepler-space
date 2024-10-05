// src/components/Telescopes/Kepler.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Kepler = () => {
    const [keplerData, setKeplerData] = useState(null);

    useEffect(() => {
        fetch("/data/Telescope/Telescope_Kepler_k2.json")
            .then((response) => response.json())
            .then((data) => setKeplerData(data[0])) // Assuming the JSON is an array
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-900 via-black to-blue-900 text-white p-4">
            <motion.h1 
                className="text-5xl font-extrabold mb-8"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Kepler Space Telescope
            </motion.h1>
            {keplerData ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="bg-gray-800 p-6 rounded-lg shadow-lg"
                >
                    <div className="mt-8">
                        <motion.h2 
                            className="text-2xl font-semibold mb-2"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            Introduction
                        </motion.h2>
                        <motion.p 
                            className="mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {keplerData.Introduction}
                        </motion.p>
                        
                        <motion.h2 
                            className="text-2xl font-semibold mb-2"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            Details
                        </motion.h2>
                        <motion.p 
                            className="mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {keplerData.Body1}
                        </motion.p>
                        <motion.p 
                            className="mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {keplerData.Body2}
                        </motion.p>
                        <motion.p 
                            className="mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {keplerData.Body3}
                        </motion.p>
                    </div>
                </motion.div>
            ) : (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Loading Kepler data...
                </motion.p>
            )}
        </div>
    );
};

export default Kepler;
