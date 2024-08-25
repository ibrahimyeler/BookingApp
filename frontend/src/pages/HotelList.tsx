import React from 'react';
import { Link } from 'react-router-dom';

const HotelList: React.FC = () => {
  const hotels = [
    { id: 1, name: 'Hotel A' },
    { id: 2, name: 'Hotel B' },
    // Diğer oteller...
  ];

  return (
    <div>
      <h1>Hotels</h1>
      <ul>
        {hotels.map(hotel => (
          <li key={hotel.id}>
            <Link to={`/hotels/${hotel.id}`}>{hotel.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelList;
