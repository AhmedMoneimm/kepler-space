import ReusableDiv from "../ReusableDiv";

const SuperEarth = () => {
  return (
    <ReusableDiv
      title="SuperEarth"
      dataPath="/data/Exoplanets/Exoplanet_Super_Earth.json"
      quizPath="/quizsup"
      previousPath="/exoplanet/neptunian" // Previous page path
      nextPath="/exoplanet/rocky" // Next page path
    />
  );
};

export default SuperEarth;
