// src/components/Methods/Radial-Velocity.jsx
import ReusableDiv from "../ReusableDiv";

const RadialVelocity = () => {
    return (
        <ReusableDiv
            title="Radial Velocity Method"
            dataPath="/data/Discovery/Discovery_Radial_Velocity.json"
            quizPath="/quiz"
            previousPath="/methods/transit"
            nextPath="/methods/direct-imaging"
        />
    );
};

export default RadialVelocity;
