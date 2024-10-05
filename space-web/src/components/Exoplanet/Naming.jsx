import ReusableDiv from "../ReusableDiv";

const ExoplanetNaming = () => {
  return (
    <ReusableDiv
      title="Cosmic Names: The Art of Exoplanet Naming!"
      dataPath="/data/Exoplanets/Exoplanet_Naming.json"
      quizPath="/quiz"
      previousPath="/exoplanet/types" // Previous page path
      nextPath="/exoplanet/gas-giants" // Next page path
    />
  );
};

export default ExoplanetNaming;
