import ReusableDiv from "../ReusableDiv";

const ExoplanetNaming = () => {
  return (
    <ReusableDiv
      title="Exoplanet Naming"
      dataPath="/data/Exoplanets/Exoplanet_Naming.json"
      quizPath="/quiz"
      nextPath="/exoplanet/gas-giants" // Next page path
      previousPath="/exoplanet/types" // Previous page path
    />
  );
};

export default ExoplanetNaming;
