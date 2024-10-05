import ReusableDiv from "../ReusableDiv";

const Rocky = () => {
  return (
    <ReusableDiv
      title="Rocky Planets: Unearthing the Secrets of Terrestrial Worlds!"
      dataPath="/data/Exoplanets_type/Exoplanet_Rocky.json"
      quizPath="/quizrok"
      previousPath="/exoplanet/super-earth" // Previous page path
      nextPath="/" // Next page path (home)
      URL="https://eyes.nasa.gov/apps/exo/#/filter/Terrestrial"
      topic="Rocky"
    />
  );
};

export default Rocky;
