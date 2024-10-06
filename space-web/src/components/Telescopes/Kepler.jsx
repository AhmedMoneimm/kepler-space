// src/components/Telescopes/Kepler.jsx
import ReusableDiv from '../ReusableDiv';

const Kepler = () => {
  return (
    <ReusableDiv
      title="Kepler Space Telescope: The planet hunter"
      dataPath="/data/Telescope/Telescope_Kepler_k2.json"
      quizPath="/quizkep" // Adjust the quiz path if necessary
      previousPath="/telescope/james-webb" // Previous page path
      nextPath="/telescope/spitzer" // Next page path
      URL="https://eyes.nasa.gov/apps/exo/#/spacecraft/sc_kepler_space_telescope"
      topic="Kepler and K2" 
      imageUrls={["../src/assets/Telescope/kepler.png"]}
    />
  );
};

export default Kepler;
