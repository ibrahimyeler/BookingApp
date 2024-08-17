import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlane } from 'react-icons/fa'; // Uçak ikonu import et
import './Hero.css'; // Stil dosyasını import et

const Hero: React.FC = () => {
  return (
    <div className="hero-container">
      <div className="link-container">
        <Link to="/link1" className="hero-link">Link 1</Link>
        <Link to="/link2" className="hero-link">
          <FaPlane className="icon" /> Flights
        </Link>
        <Link to="/link3" className="hero-link">Link 3</Link>
        <Link to="/link4" className="hero-link">Link 4</Link>
        <Link to="/link5" className="hero-link">Link 5</Link>
      </div>
    </div>
  );
}

export default Hero;
