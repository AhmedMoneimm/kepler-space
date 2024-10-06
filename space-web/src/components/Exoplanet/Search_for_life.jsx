import ReusableDiv from "../ReusableDiv";

const SearchForLife = () => {
  return (
    <ReusableDiv
      title="The Search for Life Beyond Earth"
      dataPath="/data/Exoplanets/Exoplanet_life_search.json"
      quizPath="/quiz"
      previousPath="/exoplanet/CandidateVSConfirmed" // Previous page
      nextPath="/" // Next page
      imageUrls={["../src/assets/Exoplanets/habzone.png"]}
    />
  );
};

export default SearchForLife;