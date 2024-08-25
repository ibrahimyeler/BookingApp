import React, { useState } from 'react';

interface Hotel {
  id: number;
  name: string;
  price: number;
  stars: number;
}

const hotelData: Hotel[] = [
  { id: 1, name: 'Luxurious Hotel', price: 500, stars: 5 },
  { id: 2, name: 'Comfort Inn', price: 100, stars: 3 },
  { id: 3, name: 'Budget Stay', price: 50, stars: 1 },
  { id: 4, name: 'Elite Resort', price: 300, stars: 4 },
];

const InternationalHotels: React.FC = () => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | 'stars'>('asc');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredHotels = hotelData.filter(hotel =>
    hotel.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedHotels = [...filteredHotels].sort((a, b) => {
    if (sortOrder === 'stars') {
      return b.stars - a.stars;
    }
    return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
  });

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">International Hotels</h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2"
        />
      </div>

      <div className="mb-6">
        <button
          onClick={() => setSortOrder('asc')}
          className={`px-4 py-2 mr-2 ${sortOrder === 'asc' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Price: Low to High
        </button>
        <button
          onClick={() => setSortOrder('desc')}
          className={`px-4 py-2 mr-2 ${sortOrder === 'desc' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Price: High to Low
        </button>
        <button
          onClick={() => setSortOrder('stars')}
          className={`px-4 py-2 ${sortOrder === 'stars' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Stars
        </button>
      </div>

      <ul>
        {sortedHotels.map((hotel) => (
          <li key={hotel.id} className="border-b py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="font-bold">{hotel.name}</span>
              <div className="flex items-center">
                {[...Array(hotel.stars)].map((_, index) => (
                  <span key={index} className="text-yellow-500">★</span>
                ))}
                {[...Array(5 - hotel.stars)].map((_, index) => (
                  <span key={index} className="text-gray-300">★</span>
                ))}
              </div>
            </div>
            <span>${hotel.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InternationalHotels;
