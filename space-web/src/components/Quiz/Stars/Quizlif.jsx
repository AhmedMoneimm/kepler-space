import quizData from "./lif.json"; // Ensure the path is correct
import QuizComponent from "../QuizComponent"; // Adjust the path as needed
const Quizlif = () => {
  return (
    <QuizComponent quizData={quizData} />  // Pass the quizData as a prop
  );
};

export default Quizlif;
