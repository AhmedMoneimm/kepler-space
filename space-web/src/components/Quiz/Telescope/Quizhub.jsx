import quizData from "./hub.json"; // Ensure the path is correct
import QuizComponent from "../QuizComponent"; // Adjust the path as needed
const Quizhub = () => {
  return (
    <QuizComponent quizData={quizData} />  // Pass the quizData as a prop
  );
};

export default Quizhub;
