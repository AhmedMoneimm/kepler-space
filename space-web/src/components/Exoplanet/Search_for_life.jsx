import ReusableDiv from "../ReusableDiv";
import habzoneImage from "/data/Exoplanetsimages/habzone.png";

// Define paths as constants
const title = "The Search for Life Beyond Earth";
const dataPath = "/data/Exoplanets/Exoplanet_life_search.json";
const quizPath = "/quizsea";
const previousPath = "/exoplanet/CandidateVSConfirmed";
const nextPath = "/";
const imageUrls = ["", "", habzoneImage, ""]; // Use the imported image

const SearchForLife = () => {
  return (
    <ReusableDiv
      title={title}
      dataPath={dataPath}
      quizPath={quizPath}
      previousPath={previousPath}
      nextPath={nextPath}
      imageUrls={imageUrls}
    />
  );
};

export default SearchForLife;
