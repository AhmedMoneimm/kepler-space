import React, { useState } from 'react';
import './InteractiveGame.css';

const InteractiveGame: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [planetFound, setPlanetFound] = useState(false);

  const startMiniGame = () => {
    setGameStarted(true);
  };

  const handlePlanetClick = () => {
    setPlanetFound(true);
    alert('You found the planet! Great job!');
  };

  return (
    <section id="interactive-game">
      <h2>🎮 Find a Planet with Kepler 🎮</h2>
      {!gameStarted ? (
        <button onClick={startMiniGame}>Start Your Adventure!</button>
      ) : (
        <div id="game-space">
          <p>
            Look for the exoplanet as it transits across the star! Click it when
            you see it!
          </p>
          <div id="star-system">
            <div id="star"></div>
            {!planetFound && (
              <div id="exoplanet" onClick={handlePlanetClick}></div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default InteractiveGame;
