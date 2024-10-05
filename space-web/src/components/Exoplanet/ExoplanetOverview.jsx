import ReusableDiv from "../ReusableDiv";

const ExoplanetOverview = () => {
  return (
    <ReusableDiv
      title="Journey Through the Cosmos: Discovering Exoplanets!"
      dataPath="/data/Exoplanets/Exoplanet_overview.json"
      quizPath="/quiz"
      nextPath="/exoplanet/naming" // Next page
      previousPath="/" // Previous page
      URL="https://eyes.nasa.gov/apps/exo/#/"
      topic="Exoplanets"
    />
  );
};

export default ExoplanetOverview;
