import ReusableDiv from "../ReusableDiv";

const Hubble = () => {
  return (
    <ReusableDiv
      title="The Hubble Space Telescope: A Pioneer in the Search for Exoplanets"
      dataPath="/data/Telescope/Telescope_Hubble.json"
      quizPath="/quizhub"  // Adjust the quiz path if needed
      previousPath="/telescope/overview" // Previous page path
      nextPath="/telescope/james-webb" // Next page path
      URL="https://eyes.nasa.gov/apps/exo/#/spacecraft/sc_hubble_space_telescope"
      topic="Hubble"
    />
  );
};

export default Hubble;
