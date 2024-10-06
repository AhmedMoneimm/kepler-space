import quizData from "./col.json"; // Ensure the path is correct
import QuizComponent from "../QuizComponent"; // Adjust the path as needed
const Quizcol = () => {
  return (
    <QuizComponent quizData={quizData} />  // Pass the quizData as a prop
  );
};

export default Quizcol;
