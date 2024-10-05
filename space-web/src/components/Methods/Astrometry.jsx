// src/components/Methods/Astrometry.jsx
import React from 'react';
import ReusableDiv from '../ReusableDiv';

const Astrometry = () => {
    return (
        <ReusableDiv
            title="Astrometry: Unveiling Exoplanets Through Stellar Movements"
            dataPath="/data/Discovery/Discovery_Astrometry.json"
            quizPath="/quiz" // Assuming you might have a quiz path
            previousPath="/methods/microlensing" // Previous page path
            nextPath="/" // Next page home
        />
    );
};

export default Astrometry;
