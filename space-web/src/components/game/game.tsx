import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import spaceBackground from "../../assets/space-background2.jpg";
import img2 from "../../assets/img1.jpeg";
import img1 from "../../assets/img2.jpeg";

const GamePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleDownload = () => {
        window.open("https://drive.google.com/drive/folders/1KAU_Qk5-IrRKzcVEo6e3SDkUwkcIUEmB", "_blank");
    };

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden w-full"
            style={{
                backgroundImage: `url(${spaceBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                padding: "4rem 1rem",
            }}
        >
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
                style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0 }}
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
                But that's just the beginning! Uncover the secrets behind a top-secret 
                NASA super ship that allows you to navigate and explore over 5,000 
                breathtaking exoplanets, each with its own story waiting to be unveiled.
            </motion.p>

            <motion.img
                src={img1}
                alt="Image 1"
                className="mb-8 rounded-lg shadow-lg z-10"
                width="50%"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            />

            <motion.img
                src={img2}
                alt="Image 2"
                className="mb-8 rounded-lg shadow-lg z-10"
                width="50%"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            />

<motion.div 
                className="flex flex-col items-center z-10 mb-8 w-full px-4 sm:px-6 md:px-8 lg:px-12"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-yellow-300 mb-4 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Unveil the Mysteries of Exoplanets: Watch Our Galactic Adventure Gameplay!
                </motion.h2>
                <motion.div
                    className="video-container w-full max-w-5xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <div className="relative" style={{ paddingBottom: "56.25%" }}>
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                            src="https://www.youtube.com/embed/jLWAhl6iegQ"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div 
                className="flex flex-col items-center z-10"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                <p className="text-lg mb-4 text-white text-center">
                    **Disclaimer:** Due to the game's stunning graphics, we can't deploy it online. 
                </p>
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
