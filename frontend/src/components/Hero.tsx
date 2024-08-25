import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlane, FaCar, FaHotel, FaGlobeAmericas, FaLandmark } from 'react-icons/fa';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <div className="hero-container">
      <div className="link-container">
        <Link to="/rent-car" className="hero-link">
          <FaCar className="icon text-white" /> 
          <span className="text-white font-semibold">Rent a Car</span>
        </Link>
        <Link to="/flights" className="hero-link">
          <FaPlane className="icon text-white" /> 
          <span className="text-white font-semibold">Flights</span>
        </Link>
        <Link to="/hotels" className="hero-link">
          <FaHotel className="icon text-white" /> 
          <span className="text-white font-semibold">Hotels</span>
        </Link>
        <Link to="/cultural-tours" className="hero-link">
          <FaLandmark className="icon text-white" /> 
          <span className="text-white font-semibold">Cultural Tours</span>
        </Link>
        <Link to="/abroad-tours" className="hero-link">
          <FaGlobeAmericas className="icon text-white" /> 
          <span className="text-white font-semibold">Abroad Tours</span>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
