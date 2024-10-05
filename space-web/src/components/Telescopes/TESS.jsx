// src/components/Telescopes/TESS.jsx
import React from 'react';
import ReusableDiv from '../ReusableDiv';

const TESS = () => {
  return (
    <ReusableDiv
      title="TESS Space Telescope"
      dataPath="/data/Telescope/Telescope_TESS.json"
      quizPath="/quiz" // Adjust the quiz path if necessary
    />
  );
};

export default TESS;
