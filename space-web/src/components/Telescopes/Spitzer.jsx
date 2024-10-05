// src/components/Telescopes/Spitzer.jsx
import React from 'react';
import ReusableDiv from '../ReusableDiv';

const Spitzer = () => {
  return (
    <ReusableDiv
      title="Spitzer Space Telescope"
      dataPath="/data/Telescope/Telescope_Spitzer.json"
      quizPath="/quiz" // Adjust the quiz path if necessary
    />
  );
};

export default Spitzer;
