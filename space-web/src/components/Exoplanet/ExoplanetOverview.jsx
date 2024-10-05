import ReusableDiv from "../ReusableDiv";

const ExoplanetOverview = () => {
  return (
    <ReusableDiv
      title="Exoplanet Overview"
      dataPath="/data/Exoplanets/Exoplanet_overview.json"
      quizPath="/quiz"
      nextPath="/exoplanet/types" // Next page
      previousPath="/" // Previous page
    />
  );
};

export default ExoplanetOverview;
