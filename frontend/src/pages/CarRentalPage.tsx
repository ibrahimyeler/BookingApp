import React, { useState } from 'react';
import './Search/styles/carRentalPage.css'; // CSS dosyanızın yolu

interface Car {
  id: string;
  model: string;
  price: number;
  location: string;
  imageUrl: string; // Araç görseli için yeni bir özellik
  rating: number;  // Araç derecelendirmesi için yeni bir özellik
}

// Örnek araç verileri
const initialCars: Car[] = [
  { id: '1', model: 'Toyota Corolla', price: 25, location: 'İstanbul', imageUrl: '/images/toyota-corolla.jpg', rating: 4.5 },
  { id: '2', model: 'Honda Civic', price: 30, location: 'Ankara', imageUrl: '/images/honda-civic.jpg', rating: 4.0 },
  { id: '3', model: 'Ford Focus', price: 20, location: 'İzmir', imageUrl: '/images/ford-focus.jpg', rating: 3.5 },
  { id: '4', model: 'Chevrolet Malibu', price: 35, location: 'İstanbul', imageUrl: '/images/chevrolet-malibu.jpg', rating: 4.7 },
  { id: '5', model: 'BMW 3 Series', price: 40, location: 'Sakarya', imageUrl: '/images/bmw-3-series.jpg', rating: 4.8 }
];

const CarRentalPage: React.FC = () => {
  const [cars, setCars] = useState<Car[]>(initialCars);
  const [sortBy, setSortBy] = useState<string>('model'); // Default sort
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredCars = cars.filter(car =>
    car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedCars = [...filteredCars].sort((a, b) => {
    if (sortBy === 'price') {
      return a.price - b.price;
    } else if (sortBy === 'location') {
      return a.location.localeCompare(b.location);
    } else if (sortBy === 'rating') {
      return b.rating - a.rating; // Yüksek rating önce gelir
    } else {
      return a.model.localeCompare(b.model);
    }
  });

  return (
    <div className="car-rental-container">
      <h2>Rent a Car</h2>
      <div className="search-controls">
        <input
          type="text"
          placeholder="Search by model or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="sort-controls">
        <label htmlFor="sortBy">Sort By:</label>
        <select id="sortBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="model">Model</option>
          <option value="price">Price</option>
          <option value="location">Location</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      <div className="car-list">
        {sortedCars.map(car => (
          <div key={car.id} className="car-item">
            <img src={car.imageUrl} alt={car.model} className="car-image" />
            <div className="car-info">
              <h3>{car.model}</h3>
              <p>Price: ${car.price}</p>
              <p>Location: {car.location}</p>
              <div className="car-rating">
                {'★'.repeat(Math.floor(car.rating))} 
                {car.rating % 1 !== 0 ? '★' : ''} 
                {'☆'.repeat(5 - Math.ceil(car.rating))}
              </div>
            </div>
            <button className="rent-button">Rent</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarRentalPage;
