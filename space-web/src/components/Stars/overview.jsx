import ReusableDiv from "../ReusableDiv";

const StarsOverview = () => {
  return (
    <ReusableDiv
      title="Stars: The Shiny dots in a black space!"
      dataPath="/data/Stars/Stars_overview.json"
      quizPath="/quiz"
      previousPath="/" // Previous page path
      nextPath="/stars/color" // Next page path
    />
  );
};

export default StarsOverview;
