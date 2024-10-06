import ReusableDiv from "../ReusableDiv";

const StarsLife = () => {
  return (
    <ReusableDiv
      title="From Birth to Supernova: The Epic Life Cycle of Stars!"
      dataPath="/data/Stars/Stars_life.json"
      quizPath="/quizlif"
      previousPath="/stars/color" // Previous page path
      nextPath="/stars/planetary-systems" // Next page path
      imageUrls={["../src/assets/Stars/life.png", "../src/assets/Stars/redgiant.png", "../src/assets/Stars/whitedwarf.png", "../src/assets/Stars/supernova.png", "../src/assets/Stars/neutron.png", "../src/assets/Stars/blackhole.png"]}
    />
  );
};

export default StarsLife;
