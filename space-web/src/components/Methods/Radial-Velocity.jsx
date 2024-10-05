// src/components/Methods/Radial-Velocity.jsx
import React from "react";
import ReusableDiv from "../ReusableDiv";

const RadialVelocity = () => {
    return (
        <ReusableDiv
            title="Radial Velocity Method"
            dataPath="/data/Discovery/Discovery_Radial_Velocity.json"
            quizPath="/quiz"
        />
    );
};

export default RadialVelocity;
