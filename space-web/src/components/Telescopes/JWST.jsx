// src/components/Telescopes/JWST.jsx
import ReusableDiv from '../ReusableDiv';

const JWST = () => {
  return (
    <ReusableDiv
      title="The James Webb Space Telescope: A New Era of Space Exploration"
      dataPath="/data/Telescope/Telescope_JWST.json"
      quizPath="/quizjw" // Adjust the quiz path if necessary
      previousPath="/telescope/hubble" // Previous page path
      nextPath="/telescope/Kepler_K2" // Next page path
      URL="https://eyes.nasa.gov/apps/exo/#/spacecraft/sc_jwst"
      topic="JWST"
    />
  );
};

export default JWST;
