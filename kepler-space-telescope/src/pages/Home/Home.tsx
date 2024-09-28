import React, { useEffect } from "react";
import "./Home.css";

const Home: React.FC = () => {
  const startMiniGame = () => {
    const gameSpace = document.getElementById("game-space");
    if (gameSpace) {
      gameSpace.innerHTML = `
        <p>Look for the exoplanet as it transits across the star! Click it when you see it!</p>
        <div id="star-system">
          <div id="star"></div>
          <div id="exoplanet"></div>
        </div>
      `;
      
      const exoplanet = document.getElementById("exoplanet");
      if (exoplanet) {
        exoplanet.style.animation = "orbit 5s linear infinite";
        exoplanet.addEventListener("click", () => {
          alert("You found the planet! Great job!");
        });
      }
    }
  };

  useEffect(() => {
    const planet = document.getElementById("planet");
    if (planet) {
      planet.style.animation = "spin 20s linear infinite";
    }
  }, []);

  return (
    <div className="container">
      <header>
        <h1>🚀 Explore the Kepler Space Telescope 🚀</h1>
        <p>Take a trip through space and find distant planets!</p>
      </header>

      <section id="telescope-intro">
        <h2>✨ Meet Kepler ✨</h2>
        <div className="planet-animation">
          <img src="/assets/planet.svg" alt="Planet" id="planet" />
        </div>
        <p>
          The Kepler Telescope helped us find thousands of exoplanets by looking for tiny dips in a star's brightness.
        </p>
      </section>

      <section id="interactive-game">
        <h2>🎮 Find a Planet with Kepler 🎮</h2>
        <button onClick={startMiniGame}>Start Your Adventure!</button>
        <div id="game-space"></div>
      </section>

      <section id="fun-facts">
        <h2>💡 Did you know?</h2>
        <ul>
          <li>Kepler discovered more than 2,600 exoplanets!</li>
          <li>Exoplanets are planets that orbit stars outside of our solar system.</li>
          <li>Some exoplanets are gas giants, while others are rocky like Earth!</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
