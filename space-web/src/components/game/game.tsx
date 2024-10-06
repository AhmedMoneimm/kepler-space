// src/pages/game.tsx
import React, { useEffect } from "react"; // Import useEffect
import { motion } from "framer-motion";
import Particles from "react-tsparticles"; // Ensure you have this library installed
import spaceBackground from "../../assets/space-background.jpg"; // Ensure the file exists at this path

const GamePage = () => {
    // Scroll to the top of the page on component mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleDownload = () => {
        // Replace with your actual download link
        window.location.href = "/path/to/game.zip";
    };

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden w-full"
            style={{
                backgroundImage: `url(${spaceBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                padding: "4rem 1rem", // Adjust padding to reduce side spaces
            }}
        >
            {/* Background particle animation */}
            <Particles
                id="tsparticles"
                options={{
                    background: { color: "transparent" },
                    fpsLimit: 60,
                    particles: {
                        number: { value: 60 },
                        color: { value: "#ffffff" },
                        shape: { type: "circle" },
                        opacity: { value: 0.8 },
                        size: { value: 2 },
                        move: { speed: 1 },
                    },
                }}
                style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0 }} // Ensure particles fill the container
            />

            <motion.h1 
                className="text-6xl font-extrabold text-blue-300 mb-8 z-10"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Embark on a Galactic Journey!
            </motion.h1>
            
            <motion.p 
                className="text-xl text-center mb-6 max-w-3xl text-white z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                Take on the role of an ambitious intern at NASA, where you'll learn 
                from top scientists and explore the mysteries of the universe. 
                Your adventure begins with cutting-edge telescopes and groundbreaking 
                discoveries of exoplanets. 
            </motion.p>

            <motion.p 
                className="text-xl text-center mb-6 max-w-3xl text-white z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                But that’s just the beginning! Uncover the secrets behind a top-secret 
                NASA super ship that allows you to navigate and explore over 5,000 
                breathtaking exoplanets, each with its own story waiting to be unveiled.
            </motion.p>

            <motion.video 
                className="mb-8 rounded-lg shadow-lg z-10"
                controls
                width="80%"
                src="/path/to/gameplay.mp4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                Your browser does not support the video tag.
            </motion.video>

            <motion.div 
                className="flex flex-col items-center z-10"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                <p className="text-lg mb-4 text-white text-center">
                    **Disclaimer:** Due to the game's stunning graphics, we can't deploy it online. 
                    Please download the game to experience the full adventure!
                </p>
                <motion.button 
                    onClick={handleDownload}
                    className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-full shadow-lg hover:bg-yellow-400 transition duration-300 z-10"
                    whileHover={{ scale: 1.05 }}
                >
                    Download the Game
                </motion.button>
            </motion.div>

            <footer className="mt-12 text-center z-10">
                <p className="text-sm text-white">
                    © {new Date().getFullYear()} Space Eagles.
                </p>
            </footer>
        </div>
    );
};

export default GamePage;
