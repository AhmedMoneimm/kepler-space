import ReusableDiv from "../ReusableDiv";

const Types = () => {
 
  return (
    <ReusableDiv
      title="Out-of-This-World: The Coolest Types of Exoplanets!"
      dataPath="/data/Exoplanets_types/Exoplanets_types.json"
      quizPath="/quiztyp "
      nextPath="/exoplanet/gas-giants" // Next page path
      previousPath="/exoplanet/overview" // Previous page path
      imageUrls={["./exoplanetstypes.png", "../src/assets/Exoplanets/gasgiant.png", "../src/assets/Exoplanets/neptunelike.png", "../src/assets/Exoplanets/super.png", "../src/assets/Exoplanets/rocky.png"]}
    />
  );
};

export default Types;
