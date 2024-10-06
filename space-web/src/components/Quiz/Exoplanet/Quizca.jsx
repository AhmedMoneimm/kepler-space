import quizData from "./ca.json"; // Ensure the path is correct
import QuizComponent from "../QuizComponent"; // Adjust the path as needed

const Quizca = () => {
  return (
    <QuizComponent quizData={quizData} />  // Pass the quizData as a prop
  );
};

export default Quizca;
