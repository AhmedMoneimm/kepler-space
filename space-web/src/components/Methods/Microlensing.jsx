// src/components/Methods/Microlensing.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Microlensing = () => {
    const [microlensingData, setMicrolensingData] = useState(null);

    useEffect(() => {
        fetch("/data/Discovery/Discovery_Microlensing.json")
            .then((response) => response.json())
            .then((data) => setMicrolensingData(data[0])) // Assuming the JSON is an array
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 to-black text-white p-4">
            <motion.h1 
                className="text-5xl font-extrabold mb-8"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Microlensing Method
            </motion.h1>
            {microlensingData ? (
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
                            {microlensingData.Introduction}
                        </motion.p>

                        <motion.h2 
                            className="text-2xl font-semibold mb-2"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                        >
                            Detection
                        </motion.h2>
                        <motion.p 
                            className="mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {microlensingData.Detection}
                        </motion.p>

                        <motion.h2 
                            className="text-2xl font-semibold mb-2"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                        >
                            Advantages
                        </motion.h2>
                        <motion.p 
                            className="mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            {microlensingData.Advantages}
                        </motion.p>

                        <motion.h2 
                            className="text-2xl font-semibold mb-2"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.5 }}
                        >
                            Limitation
                        </motion.h2>
                        <motion.p 
                            className="mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            {microlensingData.Limitation}
                        </motion.p>
                    </div>
                </motion.div>
            ) : (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Loading microlensing data...
                </motion.p>
            )}
        </div>
    );
};

export default Microlensing;
