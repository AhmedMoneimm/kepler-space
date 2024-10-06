// src/components/Methods/MethodsOverview.jsx
import ReusableDiv from "../ReusableDiv";

const MethodsOverview = () => {
    return (
        <ReusableDiv
            title="How Do Scientists Discover Exoplanets?"
            dataPath="/data/Discovery/Methods_overview.json"
            quizPath="/quizmeo"
            previousPath="/"
            nextPath="/methods/transit" 
        />
    );
};

export default MethodsOverview;
