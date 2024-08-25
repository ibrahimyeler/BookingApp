import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Tour } from '../types/tour/Tour'; // Arayüzleri içe aktarıyoruz

const AbroadTours: React.FC = () => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        // Dönüş türünü belirtiyoruz
        const response = await axios.get<Tour[]>('/api/abroadtours');
        setTours(response.data);
        setLoading(false);
      } catch (err) {
        // Hata işleme
        if (axios.isAxiosError(err)) {
          setError(err.message);
        } else {
          setError('Unexpected error occurred');
        }
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen"><p className="text-lg font-semibold">Loading tours...</p></div>;
  if (error) return <div className="flex justify-center items-center h-screen"><p className="text-red-600">{error}</p></div>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Our Exciting Abroad Tours</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map(tour => (
          <div key={tour._id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{tour.destination}</h2>
            <p className="text-gray-600"><strong>Duration:</strong> {tour.duration} days</p>
            <p className="text-gray-600"><strong>Price:</strong> ${tour.price}</p>
            <p className="text-gray-700 mt-2">{tour.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AbroadTours;
