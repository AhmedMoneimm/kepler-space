import ReusableDiv from "../ReusableDiv";

const StarsLife = () => {
  return (
    <ReusableDiv
      title="From Birth to Supernova: The Epic Life Cycle of Stars!"
      dataPath="/data/Stars/Stars_life.json"
      quizPath="/quiz"
      previousPath="/stars/color" // Previous page path
      nextPath="/stars/planetary-systems" // Next page path
    />
  );
};

export default StarsLife;
