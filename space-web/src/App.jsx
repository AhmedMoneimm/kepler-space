import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero.jsx";
import HeroCard from "./components/HeroCard/HeroCard.jsx";
import BgVideo from "./assets/exo.mp4";
import Rapidscat from "./components/Rapidscat/Rapidscat.jsx";
import Satelite from "./components/Satelite/Satelite.jsx";
import Footer5 from "./components/Footer/Footer5.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Chatbot from "./components/Chatbot/Chatbot"; // Import the Chatbot component
import ExoplanetOverview from "./components/Exoplanet/Exoplanetoverview"; // Import Exoplanet Overview Component
import GasGiants from "./components/Exoplanet/GasGiants"; // Import Gas Giants Component
import Neptunian from "./components/Exoplanet/Neptunian"; // Import Neptunian Component
import SuperEarth from "./components/Exoplanet/SuperEarth"; // Import Super Earth Component
import Rocky from "./components/Exoplanet/Rocky"; // Import Rocky Component

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });

  return (
    <Router>
      <div className="relative">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          <source src={BgVideo} type="video/mp4" />
        </video>

        <Navbar />

        <Routes>
          {/* Home route displaying the main components */}
          <Route path="/" element={
            <>
              <div className="h-[700px] relative">
                <Hero />
              </div>
              <HeroCard />
              <Rapidscat />
              <Satelite />
              <Footer5 />
            </>
          } />

          {/* Exoplanet routes */}
          <Route path="/exoplanet/overview" element={<ExoplanetOverview />} />
          <Route path="/exoplanet/gas-giants" element={<GasGiants />} />
          <Route path="/exoplanet/neptunian" element={<Neptunian />} />
          <Route path="/exoplanet/super-earth" element={<SuperEarth />} />
          <Route path="/exoplanet/rocky" element={<Rocky />} />
        </Routes>

        <Chatbot />
      </div>
    </Router>
  );
};

export default App;
