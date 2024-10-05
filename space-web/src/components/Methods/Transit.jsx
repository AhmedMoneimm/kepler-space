// src/components/Methods/Transit.jsx
import ReusableDiv from "../ReusableDiv";

const Transit = () => {
    return (
        <ReusableDiv
            title="Transit Method"
            dataPath="/data/Discovery/Discovery_Transit.json"
            quizPath="/quiz"
            previousPath="/methods/overview"
            nextPath="/methods/radial-velocity"
        />
    );
};

export default Transit;
