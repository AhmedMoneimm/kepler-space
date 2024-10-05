// src/components/Methods/Microlensing.jsx
import React from "react";
import ReusableDiv from "../ReusableDiv";

const Microlensing = () => {
    return (
        <ReusableDiv
            title="Microlensing Method"
            dataPath="/data/Discovery/Discovery_Microlensing.json"
            quizPath="/quiz"
            previousPath="/methods/direct-imaging"
            nextPath="/methods/astrometry"
        />
    );
};

export default Microlensing;
