import ReusableDiv from "../ReusableDiv";

const Transit = () => {
  return (
    <ReusableDiv
      title="The Transit Method: Searching for Shadows in Space"
      dataPath="/data/Discovery/Discovery_Transit.json"
      quizPath="/quiztra"
      previousPath="/methods/overview"
      nextPath="/methods/radial-velocity"
      imageUrls={["/data/Methods/transit-method-single-planet_method.gif", "/data/Methods/transit_method_double_planet_method.gif", "/data/Methods/transit-method-multiple-planets_method.gif"]}
    />
  );
};

export default Transit;