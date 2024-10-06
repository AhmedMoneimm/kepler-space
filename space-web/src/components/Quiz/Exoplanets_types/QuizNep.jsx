import quizData from "./nep.json"; // Ensure the path is correct
import QuizComponent from "../QuizComponent"; // Ensure the path is correct

const QuizNep = () => {
  return (
    <QuizComponent quizData={quizData} />  // Pass the quizData as a prop
  );
};

export default QuizNep;
