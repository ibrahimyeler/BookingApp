// src/FlightsPage.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FlightSearchForm from './FlightSearchForm'; // Yeni bileşeni içe aktar
import './FlightPage.css'; // CSS dosyanızı buraya ekleyin

const FlightPage: React.FC = () => {
  const [showSearchForm, setShowSearchForm] = useState(false);

  const handleSearchClick = () => {
    setShowSearchForm(true);
  };

  return (
    <div className="flights-container">
      <div className="back-button-container">
        <Link to="/" className="back-to-home">Back to Home Page</Link>
      </div>
      <main className="content">
        <div className="header-container">
          <h1 className="animated-header">Welcome to the Flights Page</h1>
        </div>
        <div className="search-container">
          {showSearchForm ? (
            <FlightSearchForm />
          ) : (
            <button onClick={handleSearchClick} className="search-button">
              Search Flights
            </button>
          )}
        </div>
        <p>Explore our flight options and book your next adventure!</p>
      </main>
    </div>
  );
}

export default FlightPage;
