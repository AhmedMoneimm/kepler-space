// src/components/Telescopes/TelescopesOverview.jsx
import React from 'react';
import ReusableDiv from '../ReusableDiv';

const TelescopesOverview = () => {
  return (
    <ReusableDiv
      title="Telescopes Overview"
      dataPath="/data/Telescope/Telescope_overview.json"
      quizPath="/quiz" // Adjust the quiz path if necessary
    />
  );
};

export default TelescopesOverview;
