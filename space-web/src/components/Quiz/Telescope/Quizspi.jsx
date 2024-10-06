import quizData from "./spi.json"; // Ensure the path is correct
import QuizComponent from '../QuizComponent'; // Ensure the path is correct

const Quizspi = () => {
  return (
    <QuizComponent quizData={quizData} />  // Pass the quizData as a prop
  );
};

export default Quizspi;
