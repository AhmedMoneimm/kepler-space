// src/components/Methods/MethodsOverview.jsx
import React from "react";
import ReusableDiv from "../ReusableDiv";

const MethodsOverview = () => {
    return (
        <ReusableDiv
            title="Methods Overview"
            dataPath="/data/Discovery/Methods_overview.json"
            quizPath="/quiz"
        />
    );
};

export default MethodsOverview;
