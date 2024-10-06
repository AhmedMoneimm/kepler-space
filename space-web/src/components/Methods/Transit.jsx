import ReusableDiv from "../ReusableDiv";

const Transit = () => {
  return (
    <ReusableDiv
      title="The Transit Method: Searching for Shadows in Space"
      dataPath="/data/Discovery/Discovery_Transit.json"
      quizPath="/quiztra"
      previousPath="/methods/overview"
      nextPath="/methods/radial-velocity"
      imageUrls={["../src/assets/Methods/transit-method-single-planet.gif", "../src/assets/Methods/transit_method_double_planet.gif", "../src/assets/Methods/transit-method-multiple-planets.gif"]}
    />
  );
};

export default Transit;