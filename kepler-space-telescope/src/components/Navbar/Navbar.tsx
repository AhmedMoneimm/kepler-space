import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure you have this file and it's not causing any visibility issues

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu open/close

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false); // Function to close the menu
  };

  return (
    <nav className="navbar">
      <div className="navbar-toggle" onClick={toggleMenu}>
        {/* Hamburger Icon */}
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>About</Link>
        </li>
        <li>
          <Link to="/quizzes" onClick={closeMenu}>Interactive Quizzes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
