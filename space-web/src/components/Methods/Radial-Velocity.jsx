// src/components/Methods/Radial-Velocity.jsx
import React, { useEffect, useState } from 'react';

const RadialVelocity = () => {
    const [radialVelocityData, setRadialVelocityData] = useState(null);

    useEffect(() => {
        fetch("/data/Discovery/Discovery_Radial_Velocity.json")
            .then((response) => response.json())
            .then((data) => setRadialVelocityData(data[0])) // Assuming the JSON is an array
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-4">
            <h1 className="text-4xl font-bold mb-4">Radial Velocity Method</h1>
            {radialVelocityData ? (
                <div className="flex flex-col justify-center items-center">
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
                    <p className="mb-4">The Radial Velocity Method (Watching for wobble) is one of the most successful and productive for discovering exoplanets, accounting for about 19% (~1100) of all planet discoveries. It is one of the first successful methods used to detect exoplanets and is often used to confirm discoveries made by other methods. It works by detecting the wobble of a star caused by the gravitational pull of orbiting planets. When a planet orbits a star, the gravitational interaction causes the star to move slightly in response, creating a wobble in space. This motion can be observed because it changes the star's light due to the Doppler effect. In this “game of gravity”, the bigger the planet, the stronger its gravitational force on the star, which leads to a more pronounced wobble. Massive planets, like Jupiter, cause more noticeable effects.</p>
                    
                    <h2 className="text-2xl font-semibold mb-2">Detection</h2>
                    <p className="mb-4">The wobbling star emits light that shifts in frequency as it moves: When the star moves towards us, the light is shifted towards the blue end of the spectrum (blue shift). When the star moves away from us, the light is shifted towards the red end (red shift). By carefully analyzing these shifts, astronomers can deduce the presence of planets around the star. This technique is known as Doppler Spectroscopy.</p>
                    
                    <h2 className="text-2xl font-semibold mb-2">Tools</h2>
                    <p>Spectrographs: Specialized instruments that break the star’s light into its component wavelengths. By analyzing these spectra, astronomers detect minute shifts caused by the star's motion. HARPS (High Accuracy Radial velocity Planet Searcher) and HIRES (High-Resolution Echelle Spectrometer) are two of the most widely used spectrographs in this method.</p>
                </div>
                </div>
            ) : (
                <p>Loading radial velocity data...</p>
                ) 
            }
        </div>
    );
};

export default RadialVelocity;