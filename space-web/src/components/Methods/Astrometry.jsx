// src/components/Methods/Astrometry.jsx
import React from 'react';
import ReusableDiv from '../ReusableDiv';

const Astrometry = () => {
    return (
        <ReusableDiv
            title="Astrometry Method"
            dataPath="/data/Discovery/Discovery_Astrometry.json"
            quizPath="/quiz" // Assuming you might have a quiz path
        />
    );
};

export default Astrometry;
