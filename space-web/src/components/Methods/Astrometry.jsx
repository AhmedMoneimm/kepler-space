// src/components/Methods/Astrometry.jsx
import ReusableDiv from '../ReusableDiv';

const Astrometry = () => {
    return (
        <ReusableDiv
            title="Astrometry: Unveiling Exoplanets Through Stellar Movements"
            dataPath="/data/Discovery/Discovery_Astrometry.json"
            quizPath="/quizast" // Assuming you might have a quiz path
            previousPath="/methods/microlensing" // Previous page path
            nextPath="/" // Next page home
            imageUrls={["../src/assets/Methods/astometry.gif"]}
        />
    );
};

export default Astrometry;
