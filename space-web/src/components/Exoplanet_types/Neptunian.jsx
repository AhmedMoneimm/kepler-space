import ReusableDiv from "../ReusableDiv";

const Neptunian = () => {
  return (
    <ReusableDiv
      title="Chillin' with Neptunian Planets: The Ice Giants!"
      dataPath="/data/Exoplanets_type/Exoplanet_Neptunian_planets.json"
      quizPath="/quiznep"
      previousPath="/exoplanet/gas-giants" // Previous page path
      nextPath="/exoplanet/super-earth" // Next page path
      URL="https://eyes.nasa.gov/apps/exo/#/filter/NeptuneLike"
      topic="Neptunian"
    />
  );
};

export default Neptunian;
