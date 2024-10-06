import React from "react";
import quizData from "./hub.json"; // Ensure the path is correct
import  { useState, useEffect }from "react";
const Quizhub = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState(""); // State for feedback message
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Track the current question

  useEffect(() => {
    // Randomly select 5 questions from the imported quiz data
    const shuffled = quizData.sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, 5);
    setQuestions(selectedQuestions);
    setLoading(false);
  }, []);

  const handleAnswerSelection = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex];

    // Check if the selected option is correct
    if (selectedOption === currentQuestion.answer) { // Correctly access 'answer'
      setFeedback("Correct! 🎉");
    } else {
      setFeedback("Wrong! ❌ The correct answer is: " + currentQuestion.answer); // Use 'answer' here too
    }
    
    // Move to the next question after a delay
    setTimeout(() => {
      setFeedback(""); // Clear feedback
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }, 2000); // Delay for 2 seconds before moving to the next question
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (currentQuestionIndex >= questions.length) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-4">
        <h1 className="text-4xl font-bold mb-4">Quiz Finished!</h1>
        <p>Thank you for taking the quiz!</p>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-4">Quiz Time</h1>
      <div className="w-full max-w-xl">
        <h3 className="text-lg font-semibold mb-4">{`Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`}</h3>
        <ul>
          {currentQuestion.options.map((option, i) => (
            <li key={i} className="mb-2">
              <button
                onClick={() => handleAnswerSelection(option)} // Handle option selection
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
        {feedback && <p className="mt-4">{feedback}</p>} {/* Display feedback */}
      </div>
    </div>
  );
};

export default Quizhub;
