import ReusableDiv from "../ReusableDiv";

const Hubble = () => {
  return (
    <ReusableDiv
      title="Hubble Space Telescope"
      dataPath="/data/Telescope/Telescope_Hubble.json"
      quizPath="/quiz"  // Adjust the quiz path if needed
    />
  );
};

export default Hubble;
