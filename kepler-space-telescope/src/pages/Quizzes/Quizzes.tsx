// src/pages/Quizzes/Quizzes.tsx

import React from 'react';
import InteractiveQuizzes from '../../components/InteractiveQuizzes/InteractiveQuizzes';

const Quizzes: React.FC = () => {
  return (
    <div>
      <h1>Interactive Quizzes</h1>
      <InteractiveQuizzes /> {/* Render the InteractiveQuizzes component */}
    </div>
  );
};

export default Quizzes;
