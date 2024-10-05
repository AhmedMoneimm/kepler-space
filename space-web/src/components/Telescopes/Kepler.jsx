// src/components/Telescopes/Kepler.jsx
import React from 'react';
import ReusableDiv from '../ReusableDiv';

const Kepler = () => {
  return (
    <ReusableDiv
      title="Kepler Space Telescope"
      dataPath="/data/Telescope/Telescope_Kepler_k2.json"
      quizPath="/quiz" // Adjust the quiz path if necessary
    />
  );
};

export default Kepler;
