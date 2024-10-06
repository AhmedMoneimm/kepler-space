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
import GasGiants from "./components/Exoplanet_types/GasGiants.jsx"; 
import Neptunian from "./components/Exoplanet_types/Neptunian.jsx"; 
import SuperEarth from "./components/Exoplanet_types/SuperEarth.jsx"; 
import Rocky from "./components/Exoplanet_types/Rocky.jsx"; 
import QuizPage from "./components/Quiz/QuizPage";
import QuizGas from "./components/Quiz/QuizGas";
import QuizNep from "./components/Quiz/QuizNep";
import QuizRok from "./components/Quiz/QuizRok";
import QuizSup from "./components/Quiz/QuizSup";
import Types from "./components/Exoplanet_types/Types.jsx";
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
import CandidateVSConfirmed from "./components/Exoplanet/CandidateVSConfirmed.jsx";
import Quiztel from "./components/Quiz/Quiztel.jsx";
import Quizhub from "./components/Quiz/Quizhub.jsx";
import Quizjw from "./components/Quiz/Quizjw.jsx";
import Quizkep from "./components/Quiz/Quizkep.jsx";
import Quizspi from "./components/Quiz/Quizspi.jsx";
import Quiztes from "./components/Quiz/Quiztes.jsx";
import Quizmeo from "./components/Quiz/Quizmeo.jsx";
import Quizast from "./components/Quiz/Quizast.jsx";
import Quizdir from "./components/Quiz/Quizdir.jsx";
import Quizmic from "./components/Quiz/Quizmic.jsx";
import Quizrad from "./components/Quiz/Quizrad.jsx";
import Quiztra from "./components/Quiz/Quiztra.jsx";
import SearchForLife from "./components/Exoplanet/Search_for_life.jsx";

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
          <Route path="/quiztel" element={<Quiztel />} />
          <Route path="/quizhub" element={<Quizhub />} />
          <Route path="/quizjw" element={<Quizjw />} />
          <Route path="/quizkep" element={<Quizkep />} />
          <Route path="/quizspi" element={<Quizspi />} />
          <Route path="/quiztes" element={<Quiztes />} />
          <Route path="/quizmeo" element={<Quizmeo />} />
          <Route path="/quizast" element={<Quizast />} />
          <Route path="/quizdir" element={<Quizdir />} />
          <Route path="/quizmic" element={<Quizmic />} />
          <Route path="/quizrad" element={<Quizrad />} />
          <Route path="/quiztra" element={<Quiztra />} />
        </Routes>

        <Chatbot />
      </div>
    </Router>
  );
};

export default App;
