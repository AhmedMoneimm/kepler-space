import ReusableDiv from "../ReusableDiv";

const ExoplanetNaming = () => {
  return (
    <ReusableDiv
      title="Cosmic Names: The Art of Exoplanet Naming!"
      dataPath="/data/Exoplanets/Exoplanet_Naming.json"
      quizPath="/quiznam"
      previousPath="/exoplanet/overview" // Previous page path
      nextPath="/exoplanet/CandidateVSConfirmed" // Next page path
    />
  );
};

export default ExoplanetNaming;
