import quizData from "./mic.json"; // Ensure the path is correct
import QuizComponent from "../QuizComponent"; // Adjust the path as needed
const Quizmic = () => {
  return (
    <QuizComponent quizData={quizData} />  // Pass the quizData as a prop
  );
};

export default Quizmic;
