import quizData from "./tra.json"; // Ensure the path is correct
import QuizComponent from "../QuizComponent"; // Adjust the path as needed

const Quiztra = () => {
  return (
    <QuizComponent quizData={quizData} />  // Pass the quizData as a prop
  );
};
export default Quiztra;
