// src/components/Methods/Microlensing.jsx
import ReusableDiv from "../ReusableDiv";

const Microlensing = () => {
    return (
        <ReusableDiv
            title="Gravitational Microlensing: Detecting Planets Through Light Bending"
            dataPath="/data/Discovery/Discovery_Microlensing.json"
            quizPath="/quiz"
            previousPath="/methods/direct-imaging"
            nextPath="/methods/astrometry"
        />
    );
};

export default Microlensing;
