import ReusableDiv from "../ReusableDiv";

const StarsLife = () => {
  return (
    <ReusableDiv
      title="From Birth to Supernova: The Epic Life Cycle of Stars!"
      dataPath="/data/Stars/Stars_life.json"
      quizPath="/quizlif"
      previousPath="/stars/color" // Previous page path
      nextPath="/stars/planetary-systems" // Next page path
      imageUrls={["/data/Starsimage/life.png", "/data/Starsimage/redgiant.png", "/data/Starsimage/whitedwarf.png", "/data/Starsimage/supernova.png", "/data/Starsimage/neutron.png", "/data/Starsimage/blackhole.png"]}
    />
  );
};

export default StarsLife;
