import ReusableDiv from "../ReusableDiv";

const Neptunian = () => {
  return (
    <ReusableDiv
      title="Neptunian Planets"
      dataPath="/data/Exoplanets/Exoplanet_Neptunian_planets.json"
      quizPath="/quiz"
      previousPath="/exoplanet/gas-giants" // Previous page path
      nextPath="/exoplanet/super-earth" // Next page path
    />
  );
};

export default Neptunian;
