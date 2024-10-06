import ReusableDiv from "../ReusableDiv";

const ExoplanetOverview = () => {

  return (
    <ReusableDiv
      title="Journey Through the Cosmos: Discovering Exoplanets!"
      dataPath="/data/Exoplanets/Exoplanet_overview.json"
      quizPath="/quiz"
      previousPath="/" // Previous page
      nextPath="/exoplanet/naming" // Next page
      URL="https://eyes.nasa.gov/apps/exo/#/"
      topic="Exoplanets"
    />
  );
};

export default ExoplanetOverview;
