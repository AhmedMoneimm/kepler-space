import ReusableDiv from "../ReusableDiv";

const Transit = () => {
  return (
    <ReusableDiv
      title="The Transit Method: Searching for Shadows in Space"
      dataPath="/data/Discovery/Discovery_Transit.json"
      quizPath="/quiztra"
      previousPath="/methods/overview"
      nextPath="/methods/radial-velocity"
    />
  );
};

export default Transit;
