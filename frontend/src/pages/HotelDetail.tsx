import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const HotelDetails: React.FC = () => {
  const { hotelId } = useParams<{ hotelId: string }>();
  const [hotel, setHotel] = useState<any>(null);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await axios.get(`/api/hotels/${hotelId}`);
        setHotel(response.data);
      } catch (error) {
        console.error('Error fetching hotel data:', error);
      }
    };

    fetchHotel();
  }, [hotelId]);

  if (!hotel) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{hotel.name}</h1>
      <p>{hotel.description}</p>
      <p>Location: {hotel.location}</p>
      <p>Price per Night: ${hotel.pricePerNight}</p>
      <p>Rating: {hotel.rating} stars</p>
      {/* Diğer otel detayları */}
    </div>
  );
};

export default HotelDetails;
