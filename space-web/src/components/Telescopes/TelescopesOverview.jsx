// src/components/Telescopes/TelescopesOverview.jsx
import ReusableDiv from '../ReusableDiv';

const TelescopesOverview = () => {
  return (
    <ReusableDiv
      title="Telescopes Overview: The Discovery of Strange New Worlds"
      dataPath="/data/Telescope/Telescope_overview.json"
      quizPath="/quiztel" // Adjust the quiz path if necessary
      previousPath="/telescope/hubble" // Previous page path
      nextPath="/telescope/james-webb" // Next page path
    />
  );
};

export default TelescopesOverview;
