import quizData from "./dir.json"; // Ensure the path is correct
import QuizComponent from "../QuizComponent"; // Adjust the path as needed

const Quizdir = () => {
  return (
    <QuizComponent quizData={quizData} />  // Pass the quizData as a prop
  );
};

export default Quizdir;
