// src/App.tsx
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
import Chatbot from "./components/Chatbot/Chatbot"; 
import ExoplanetOverview from "./components/Exoplanet/ExoplanetOverview"; 
import GasGiants from "./components/Exoplanet/GasGiants"; 
import Neptunian from "./components/Exoplanet/Neptunian"; 
import SuperEarth from "./components/Exoplanet/SuperEarth"; 
import Rocky from "./components/Exoplanet/Rocky"; 
import QuizPage from "./components/Quiz/QuizPage";
import QuizGas from "./components/Quiz/QuizGas";
import QuizNep from "./components/Quiz/QuizNep";
import QuizRok from "./components/Quiz/QuizRok";
import QuizSup from "./components/Quiz/QuizSup";
import Types from "./components/Exoplanet/Types";
import QuizTyp from "./components/Quiz/QuizTyp";
import MethodsOverview from "./components/Methods/MethodsOverview";
import Transit from "./components/Methods/Transit.jsx";
import RadialVelocity from "./components/Methods/Radial-Velocity.jsx";
import Microlensing from "./components/Methods/Microlensing.jsx";
import DirectImaging from "./components/Methods/DirectImaging.jsx";
import Astrometry from "./components/Methods/Astrometry.jsx";
import TelescopesOverview from "./components/Telescopes/TelescopesOverview.jsx";
import Hubble from "./components/Telescopes/Hubble.jsx";
import Kepler from "./components/Telescopes/Kepler.jsx";
import JWST from "./components/Telescopes/JWST.jsx";
import Spitzer from "./components/Telescopes/Spitzer.jsx";
import TESS from "./components/Telescopes/TESS.jsx";
import ExoplanetNaming from "./components/Exoplanet/Naming.jsx";
import Game from "./components/game/game"; // Import the Game component

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
          <Route path="/exoplanet/types" element={<Types />} />
          <Route path="/exoplanet/naming" element={<ExoplanetNaming />} />
          <Route path="/exoplanet/gas-giants" element={<GasGiants />} />
          <Route path="/exoplanet/neptunian" element={<Neptunian />} />
          <Route path="/exoplanet/super-earth" element={<SuperEarth />} />
          <Route path="/exoplanet/rocky" element={<Rocky />} />
          <Route path="/quiz" element={<QuizPage />} /> 
          <Route path="/quizgas" element={<QuizGas />} /> 
          <Route path="/quiznep" element={<QuizNep />} /> 
          <Route path="/quizrok" element={<QuizRok />} /> 
          <Route path="/quizsup" element={<QuizSup />} /> 
          <Route path="/quiztyp" element={<QuizTyp />} /> 
          <Route path="/methods/overview" element={<MethodsOverview />} />
          <Route path="/methods/transit" element={<Transit />} />
          <Route path="/methods/radial-velocity" element={<RadialVelocity />} />
          <Route path="/methods/microlensing" element={<Microlensing />} />
          <Route path="/methods/direct-imaging" element={<DirectImaging />} />
          <Route path="/methods/astrometry" element={<Astrometry />} />
          <Route path="/telescope/overview" element={<TelescopesOverview />} />
          <Route path="/telescope/hubble" element={<Hubble />} />
          <Route path="/telescope/Kepler_K2" element={<Kepler />} />
          <Route path="/telescope/james-webb" element={<JWST />} />
          <Route path="/telescope/spitzer" element={<Spitzer />} />
          <Route path="/telescope/Tess" element={<TESS />} />
          <Route path="/game" element={<Game />} /> {/* Add Game route */}
        </Routes>

        <Chatbot />
      </div>
    </Router>
  );
};

export default App;
