import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlane, FaCar, FaHotel, FaGlobeAmericas, FaLandmark } from 'react-icons/fa';

import './Hero.css';

const Hero: React.FC = () => {
  return (
    <div className="hero-container">
      <div className="link-container">
        <Link to="/link1" className="hero-link">
          <FaCar className="icon" /> 
          Rent a Car
        </Link>
        <Link to="/link2" className="hero-link group">
          <FaPlane className="icon group-hover:rotate-12 transition-transform duration-300" /> 
          Flights
        </Link>
        <Link to="/link3" className="hero-link hotel-link flex items-center space-x-2">
          <FaHotel className="icon" /> 
          Hotels
          <div className="tooltip">
            <Link to="/domestic-hotels">Yurtiçi Hotels</Link>
            <Link to="/international-hotels">Yurtdışı Hotels</Link>
          </div>
        </Link>
        <Link to="/link4" className="hero-link flex items-center space-x-2">
            <FaLandmark className="icon" /> {/* Anıt ikonu */}
            <span>Cultural Tours</span>
        </Link>
        <Link to="/link5" className="hero-link flex items-center space-x-2">
            <FaGlobeAmericas className="icon" /> {/* Dünya ikonu */}
            <span>Abroad Tours</span>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
