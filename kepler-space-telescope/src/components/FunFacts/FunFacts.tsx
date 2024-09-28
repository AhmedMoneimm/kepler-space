import React from 'react';
import './FunFacts.css';

const FunFacts: React.FC = () => {
  return (
    <section id="fun-facts">
      <h2>💡 Did you know?</h2>
      <ul>
        <li>Kepler discovered more than 2,600 exoplanets!</li>
        <li>
          Exoplanets are planets that orbit stars outside of our solar system.
        </li>
        <li>Some exoplanets are gas giants, while others are rocky like Earth!</li>
      </ul>
    </section>
  );
};

export default FunFacts;
