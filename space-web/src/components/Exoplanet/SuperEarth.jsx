import ReusableDiv from "../ReusableDiv";

const SuperEarth = () => {
  return (
    <ReusableDiv
      title="Explore the Fascinating Worlds Beyond Earth: Unveiling the Secrets of Exoplanets!"
      dataPath="/data/Exoplanets/Exoplanet_Super_Earth.json"
      quizPath="/quizsup"
      previousPath="/exoplanet/neptunian" // Previous page path
      nextPath="/exoplanet/rocky" // Next page path
      URL="https://eyes.nasa.gov/apps/exo/#/filter/SuperEarth"
      topic="Super Earth"
    />
  );
};

export default SuperEarth;
