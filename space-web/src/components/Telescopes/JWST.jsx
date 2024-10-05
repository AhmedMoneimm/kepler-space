// src/components/Telescopes/JWST.jsx
import React from 'react';
import ReusableDiv from '../ReusableDiv';

const JWST = () => {
  return (
    <ReusableDiv
      title="James Webb Space Telescope"
      dataPath="/data/Telescope/Telescope_JWST.json"
      quizPath="/quiz" // Adjust the quiz path if necessary
    />
  );
};

export default JWST;
