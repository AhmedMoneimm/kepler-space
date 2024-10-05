import ReusableDiv from "../ReusableDiv";

const Types = () => {
  return (
    <ReusableDiv
      title="Out-of-This-World: The Coolest Types of Exoplanets!"
      dataPath="/data/Exoplanets/Exoplanets_types.json"
      quizPath="/quiztyp "
      previousPath="/exoplanet/overview" // Previous page path
      nextPath="/exoplanet/naming" // Next page path
    />
  );
};

export default Types;
