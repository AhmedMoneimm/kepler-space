import ReusableDiv from "../ReusableDiv";

const StarsPlanets = () => {
  return (
    <ReusableDiv
      title="Stars and planets Relationship!"
      dataPath="/data/Stars/Stars_overview.json"
      quizPath="/quizpla"
      previousPath="/stars/life" // Previous page path
      nextPath="/" // Next page path
    />
  );
};

export default StarsPlanets;
