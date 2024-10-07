// src/components/Methods/DirectImaging.jsx
import ReusableDiv from "../ReusableDiv";

const DirectImaging = () => {
    return (
        <ReusableDiv
            title="Direct Imaging: Capturing the Hidden Worlds of Exoplanets"
            dataPath="/data/Discovery/Discovery_Direct_Imaging.json"
            quizPath="/quizdir"
            previousPath="/methods/radial-velocity"
            nextPath="/methods/microlensing"
            imageUrls={["/data/Methods/direct-imaging.gif"]}
        />
    );
};

export default DirectImaging;
