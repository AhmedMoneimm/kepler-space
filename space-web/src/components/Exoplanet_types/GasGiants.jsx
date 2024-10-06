import ReusableDiv from "../ReusableDiv";

const GasGiants = () => {
  return (
    <ReusableDiv
      title="Gas Giants: The Majestic Behemoths of the Cosmos!"
      dataPath="/data/Exoplanets_types/Exoplanet_Gas_Giants.json"
      quizPath="/quizgas"
      previousPath="/exoplanet/types" // Previous page path
      nextPath="/exoplanet/neptunian" // Next page path
      URL="https://eyes.nasa.gov/apps/exo/#/filter/GasGiant"
      topic="Gas Giants"
    />
  );
};

export default GasGiants;
