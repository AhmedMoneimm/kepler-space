// src/components/InteractiveQuizzes/InteractiveQuizzes.tsx

import React, { useEffect, useState } from 'react';
import quizData from '../../data/quizzes.json'; // Ensure this path is correct

interface QuizOption {
  question: string;
  options: string[];
  answer: string;
}

const InteractiveQuizzes: React.FC = () => {
  const [quizzes, setQuizzes] = useState<QuizOption[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  
  useEffect(() => {
    // Shuffle the quiz data and select 3 random questions
    const shuffledQuizzes = quizData.sort(() => 0.5 - Math.random()).slice(0, 3);
    setQuizzes(shuffledQuizzes); // Set quizzes state with selected random questions
  }, []);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    const correctAnswer = quizzes[currentQuestionIndex].answer;
    setIsAnswerCorrect(option === correctAnswer);
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsAnswerCorrect(null);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div>
      {quizzes.length > 0 ? (
        currentQuestionIndex < quizzes.length ? (
          <div>
            <h2>{quizzes[currentQuestionIndex].question}</h2>
            <ul>
              {quizzes[currentQuestionIndex].options.map((option: string, index: number) => (
                <li 
                  key={index} 
                  onClick={() => handleOptionClick(option)} 
                  style={{ cursor: 'pointer', fontWeight: selectedOption === option ? 'bold' : 'normal' }}
                >
                  {option}
                </li> // Render options
              ))}
            </ul>
            {selectedOption && (
              <div>
                {isAnswerCorrect !== null && (
                  <p>
                    {isAnswerCorrect ? 'Correct!' : `Wrong! The correct answer is: ${quizzes[currentQuestionIndex].answer}`}
                  </p>
                )}
              </div>
            )}
            <button onClick={handleNextQuestion} disabled={selectedOption === null}>
              Next Question
            </button>
          </div>
        ) : (
          <h2>You've completed the quiz!</h2>
        )
      ) : (
        <p>Loading quizzes...</p>
      )}
    </div>
  );
};

export default InteractiveQuizzes;
