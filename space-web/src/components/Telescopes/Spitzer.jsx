// src/components/Telescopes/Spitzer.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Spitzer = () => {
    const [spitzerData, setSpitzerData] = useState(null);

    useEffect(() => {
        fetch("/data/Telescope/Telescope_Spitzer.json")
            .then((response) => response.json())
            .then((data) => setSpitzerData(data[0])) // Assuming the JSON is an array
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
                Spitzer Space Telescope
            </motion.h1>
            {spitzerData ? (
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
                            Conclusion
                        </motion.h2>
                        <motion.p 
                            className="mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {spitzerData.Body}
                        </motion.p>
                    </div>
                </motion.div>
            ) : (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Loading Spitzer data...
                </motion.p>
            )}
        </div>
    );
};

export default Spitzer;
