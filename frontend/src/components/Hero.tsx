import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlane, FaCar, FaHotel, FaGlobeAmericas, FaLandmark } from 'react-icons/fa';
<<<<<<< HEAD
=======

>>>>>>> 49304292c6ffddd1a62436e9dfc9cc0378c98387
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <div className="hero-container">
      <div className="link-container">
<<<<<<< HEAD
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
=======
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
>>>>>>> 49304292c6ffddd1a62436e9dfc9cc0378c98387
        </Link>
      </div>
    </div>
  );
}

export default Hero;
