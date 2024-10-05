// src/components/Methods/MethodsOverview.jsx
import ReusableDiv from "../ReusableDiv";

const MethodsOverview = () => {
    return (
        <ReusableDiv
            title="Methods Overview"
            dataPath="/data/Discovery/Methods_overview.json"
            quizPath="/quiz"
            previousPath="/"
            nextPath="/methods/transit"
        />
    );
};

export default MethodsOverview;
