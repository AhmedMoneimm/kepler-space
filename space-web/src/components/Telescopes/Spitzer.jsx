// src/components/Telescopes/Spitzer.jsx
import ReusableDiv from '../ReusableDiv';

const Spitzer = () => {
  return (
    <ReusableDiv
      title="Unveiling the Universe: The Spitzer Space Telescope"
      dataPath="/data/Telescope/Telescope_Spitzer.json"
      quizPath="/quizspi" // Adjust the quiz path if necessary
      previousPath="/telescope/Kepler_K2" // Previous page path
      nextPath="/telescope/Tess" // Next page path
      URL="https://eyes.nasa.gov/apps/exo/#/spacecraft/sc_spitzer"
      topic="Spitzer" 
      imageUrls={["/data/Telescopeimage/spitzer.png"]}
    />
  );
};

export default Spitzer;
