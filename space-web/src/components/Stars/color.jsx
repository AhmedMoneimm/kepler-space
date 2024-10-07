import ReusableDiv from "../ReusableDiv";

const StarsColor = () => {
  return (
    <ReusableDiv
      title="Unlocking the Rainbow: What Star Colors Reveal About Their Secrets!"
      dataPath="/data/Stars/Stars_colors.json"
      quizPath="/quizcol"
      previousPath="/stars/overview" // Previous page path
      nextPath="/stars/life" // Next page path
      imageUrls={["","","/data/Starsimage/colors.png"]}
      // order=[2]
    />
  );
};

export default StarsColor;
