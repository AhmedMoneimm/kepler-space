import ReusableDiv from "../ReusableDiv";

const Types = () => {
  return (
    <ReusableDiv
      title="Exoplanet Types"
      dataPath="/data/Exoplanets/Exoplanets_types.json"
      quizPath="/quiztyp "
      nextPath="/exoplanet/naming" // Next page path
      previousPath="/exoplanet/overview" // Previous page path
    />
  );
};

export default Types;
