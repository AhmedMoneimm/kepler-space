import ReusableDiv from "../ReusableDiv";

const GasGiants = () => {
  return (
    <ReusableDiv
      title="Gas Giants"
      dataPath="/data/Exoplanets/Exoplanet_Gas_Giants.json"
      quizPath="/quiz"
      previousPath="/exoplanet/naming" // Previous page path
      nextPath="/exoplanet/neptunian" // Next page path
    />
  );
};

export default GasGiants;
