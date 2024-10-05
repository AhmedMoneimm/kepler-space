import ReusableDiv from "../ReusableDiv";

const Rocky = () => {
  return (
    <ReusableDiv
      title="Rocky Planets"
      dataPath="/data/Exoplanets/Exoplanet_Rocky.json"
      quizPath="/quiz"
      previousPath="/exoplanet/super-earth" // Previous page path
      nextPath="/" // Next page path (home)
    />
  );
};

export default Rocky;
