// src/components/Telescopes/TESS.jsx
import ReusableDiv from '../ReusableDiv';

const TESS = () => {
  return (
    <ReusableDiv
      title="Exploring the Cosmos: The Transiting Exoplanet Survey Satellite (TESS)"
      dataPath="/data/Telescope/Telescope_TESS.json"
      quizPath="/quiztes" // Adjust the quiz path if necessary
      previousPath="/telescope/spitzer" // Previous page path
      nextPath="/" // Next page path
      URL="https://eyes.nasa.gov/apps/exo/#/spacecraft/sc_tess"
      topic="TESS"
    />
  );
};

export default TESS;
