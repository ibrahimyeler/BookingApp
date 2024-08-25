import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Tour {
  _id: string;
  destination: string;
  duration: number;
  price: number;
  description: string;
}

const TourDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [tour, setTour] = useState<Tour | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await axios.get(`/api/abroadtours/${id}`);
        setTour(response.data);
        setLoading(false);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.message);
        } else {
          setError('Unexpected error occurred');
        }
        setLoading(false);
      }
    };

    fetchTour();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>{tour?.destination}</h1>
      <p>{tour?.description}</p>
      <p>Duration: {tour?.duration} days</p>
      <p>Price: ${tour?.price}</p>
    </div>
  );
};

export default TourDetail;
