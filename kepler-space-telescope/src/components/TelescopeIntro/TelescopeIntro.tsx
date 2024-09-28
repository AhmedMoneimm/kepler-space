import React, { useEffect } from 'react';
import './TelescopeIntro.css';
import planetImage from '../../assets/images/planet.svg'; // Adjust path according to your structure

const TelescopeIntro: React.FC = () => {
  useEffect(() => {
    // Planet spin animation is handled by CSS
  }, []);

  return (
    <section id="telescope-intro">
      <h2>✨ Meet Kepler ✨</h2>
      <div className="planet-animation">
        <img src={planetImage} alt="Planet" id="planet" />
      </div>
      <p>
        The Kepler Telescope helped us find thousands of exoplanets by looking
        for tiny dips in a star's brightness.
      </p>
    </section>
  );
};

export default TelescopeIntro;
