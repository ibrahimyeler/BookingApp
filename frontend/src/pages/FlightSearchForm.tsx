// src/FlightSearchForm.tsx
import React, { useState } from 'react';


const FlightSearchForm: React.FC = () => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [isRoundTrip, setIsRoundTrip] = useState(false);

  const handleSearch = () => {
    console.log(`Searching for flights from ${departure} to ${destination} on ${departureDate} ${isRoundTrip ? `and return on ${returnDate}` : ''}`);
    // Burada arama işlevini ekleyebilirsiniz
  };

  return (
    <div className="flight-search-form">
      <h2>Search for Flights</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
        <div className="form-group">
          <label htmlFor="departure">Departure</label>
          <input
            type="text"
            id="departure"
            placeholder="Enter departure location"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="destination">Destination</label>
          <input
            type="text"
            id="destination"
            placeholder="Enter destination location"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="departureDate">Departure Date</label>
          <input
            type="date"
            id="departureDate"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </div>
        {isRoundTrip && (
          <div className="form-group">
            <label htmlFor="returnDate">Return Date</label>
            <input
              type="date"
              id="returnDate"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </div>
        )}
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={isRoundTrip}
              onChange={() => setIsRoundTrip(!isRoundTrip)}
            />
            Round Trip
          </label>
        </div>
        <button type="submit" className="search-button">Search Flights</button>
      </form>
    </div>
  );
}

export default FlightSearchForm;
