
import ReusableDiv from "../ReusableDiv";

const CandidateVSConfirmed = () => {
  return (
    <ReusableDiv
      title="Understanding Exoplanet Candidates and Confirmed Exoplanets!"
      dataPath="/data/Exoplanets/Exoplanet_CandidateVSConfirmed.json"
      quizPath="/quizca"
      previousPath="/exoplanet/naming" // Previous page
      nextPath="/exoplanet/life" // Next page
    />
  );
};

export default CandidateVSConfirmed;
