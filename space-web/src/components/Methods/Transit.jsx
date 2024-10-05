// src/components/Methods/Transit.jsx
import React from "react";
import ReusableDiv from "../ReusableDiv";

const Transit = () => {
    return (
        <ReusableDiv
            title="Transit Method"
            dataPath="/data/Discovery/Discovery_Transit.json"
            quizPath="/quiz"
        />
    );
};

export default Transit;
