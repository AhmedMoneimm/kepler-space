import quizData from "./pla.json"; // Ensure the path is correct
import QuizComponent from "../QuizComponent"; // Adjust the path as needed
const Quizpla = () => {
  return (
    <QuizComponent quizData={quizData} />  // Pass the quizData as a prop
  );
};

export default Quizpla;
