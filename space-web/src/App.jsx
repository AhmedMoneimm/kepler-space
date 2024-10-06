// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import BgVideo from "./assets/exo.mp4";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero.jsx";
import HeroCard from "./components/HeroCard/HeroCard.jsx";
import Rapidscat from "./components/Rapidscat/Rapidscat.jsx";
import Satelite from "./components/Satelite/Satelite.jsx";
import Footer5 from "./components/Footer/Footer5.jsx";
import Chatbot from "./components/Chatbot/Chatbot";
import ExoplanetOverview from "./components/Exoplanet/ExoplanetOverview";
import ExoplanetNaming from "./components/Exoplanet/Naming.jsx";
import CandidateVSConfirmed from "./components/Exoplanet/CandidateVSConfirmed.jsx";
import Types from "./components/Exoplanet_types/Types.jsx";
import GasGiants from "./components/Exoplanet_types/GasGiants.jsx";
import Neptunian from "./components/Exoplanet_types/Neptunian.jsx";
import SuperEarth from "./components/Exoplanet_types/SuperEarth.jsx";
import Rocky from "./components/Exoplanet_types/Rocky.jsx";
import QuizPage from "./components/Quiz/QuizPage";
import QuizGas from "./components/Quiz/Exoplanets_types/QuizGas.jsx";
import QuizNep from "./components/Quiz/Exoplanets_types/QuizNep.jsx";
import QuizRok from "./components/Quiz/Exoplanets_types/QuizRok.jsx";
import QuizSup from "./components/Quiz/Exoplanets_types/QuizSup.jsx";
import QuizTyp from "./components/Quiz/Exoplanets_types/QuizTyp.jsx";
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
import Game from "./components/game/game"; // Import the Game component
import SearchForLife from "./components/Exoplanet/Search_for_life.jsx";
import Quizast from "./components/Quiz/Methods/Quizast.jsx";
import Quizdir from "./components/Quiz/Methods/Quizdir.jsx";
import Quizmic from "./components/Quiz/Methods/Quizmic.jsx";
import Quizrad from "./components/Quiz/Methods/Quizrad.jsx";
import Quiztra from "./components/Quiz/Methods/Quiztra.jsx";
import Quiztel from "./components/Quiz/Telescope/Quiztel.jsx";
import Quizhub from "./components/Quiz/Telescope/Quizhub.jsx";
import Quizjw from "./components/Quiz/Telescope/Quizjw.jsx";
import Quizkep from "./components/Quiz/Telescope/Quizkep.jsx";
import Quizspi from "./components/Quiz/Telescope/Quizspi.jsx";
import Quiztes from "./components/Quiz/Telescope/Quiztes.jsx";
import Quizmeo from "./components/Quiz/Methods/Quizmeo.jsx";
import StarsOverview from "./components/Stars/overview.jsx";
import StarsColor from "./components/Stars/color.jsx";
import StarsLife from "./components/Stars/life.jsx";
import StarsPlanets from "./components/Stars/planets.jsx";
import About from "./About.jsx";
import BackgroundMusic from "./components/BackgroundMusic";

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
        <BackgroundMusic />

        <Navbar />

        <Routes>
          <Route path="/" element={
            <>
              <div className="h-[700px] relative">
                <Hero />
              </div>
              <HeroCard />
              <Rapidscat />
              <Satelite />
              {/* <Footer5 /> */}
            </>
          } />

          {/* Exoplanet routes */}
          <Route path="/exoplanet/overview" element={<ExoplanetOverview />} />
          <Route path="/exoplanet/naming" element={<ExoplanetNaming />} />
          <Route path="/exoplanet/CandidateVSConfirmed" element={<CandidateVSConfirmed />} />
          <Route path="/exoplanet/life" element={<SearchForLife />} />
          {/* Add Exoplanet type routes */}
          <Route path="/exoplanet/types" element={<Types />} />
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
          {/* Add Stars routes */}
          <Route path="/stars/overview" element={<StarsOverview />} />
          <Route path="/stars/color" element={<StarsColor />} />
          <Route path="/stars/life" element={<StarsLife />} />
          <Route path="/stars/planetary-systems" element={<StarsPlanets />} />
          {/* Add Methods routes */} 
          <Route path="/methods/overview" element={<MethodsOverview />} />
          <Route path="/methods/transit" element={<Transit />} />
          <Route path="/methods/radial-velocity" element={<RadialVelocity />} />
          <Route path="/methods/microlensing" element={<Microlensing />} />
          <Route path="/methods/direct-imaging" element={<DirectImaging />} />
          <Route path="/methods/astrometry" element={<Astrometry />} />
          <Route path="/quizast" element={<Quizast />} />
          <Route path="/quizdir" element={<Quizdir />} />
          <Route path="/quizmeo" element={<Quizmeo />} />
          <Route path="/quizmic" element={<Quizmic />} />
          <Route path="/quizrad" element={<Quizrad />} />
          <Route path="/quiztra" element={<Quiztra />} />
          {/* Add Telescopes routes */}
          <Route path="/telescope/overview" element={<TelescopesOverview />} />
          <Route path="/telescope/hubble" element={<Hubble />} />
          <Route path="/telescope/Kepler_K2" element={<Kepler />} />
          <Route path="/telescope/james-webb" element={<JWST />} />
          <Route path="/telescope/spitzer" element={<Spitzer />} />
          <Route path="/telescope/Tess" element={<TESS />} />
          <Route path="/quiztel" element={<Quiztel />} />
          <Route path="/quizhub" element={<Quizhub />} />
          <Route path="/quizjw" element={<Quizjw />} />
          <Route path="/quizkep" element={<Quizkep />} />
          <Route path="/quizspi" element={<Quizspi />} />
          <Route path="/quiztes" element={<Quiztes />} />
          {/* Add Game route */}
          <Route path="/game" element={<Game />} /> {/* Add Game route */}
          <Route path="/about" element={<About />} /> {/* Add Game route */}
        </Routes>

        <Chatbot />
      </div>
      
    </Router>
  );
};

export default App;
