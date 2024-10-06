import quizData from "./quizzes.json"; // Ensure the path is correct
import QuizComponent from "./QuizComponent"; // Adjust the path as needed

const QuizPage = () => {
  return (
    <QuizComponent quizData={quizData} />  // Pass the quizData as a prop
  );
};

export default QuizPage;
