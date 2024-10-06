import ReusableDiv from "../ReusableDiv";

const Types = () => {
 
  return (
    <ReusableDiv
      title="Out-of-This-World: The Coolest Types of Exoplanets!"
      dataPath="/data/Exoplanets_types/Exoplanets_types.json"
      quizPath="/quiztyp "
      nextPath="/exoplanet/gas-giants" // Next page path
      previousPath="/exoplanet/overview" // Previous page path
      imageUrls={["../src/assets/Exoplanets/exoplanetstypes.png"]}
    />
  );
};

export default Types;