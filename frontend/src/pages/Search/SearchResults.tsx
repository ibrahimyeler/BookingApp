import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SearchResults: React.FC = () => {
  const [flights, setFlights] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v2/prices/nearest-places-matrix',
          params: {
            flexibility: '0',
            currency: 'RUB',
            origin: 'LED',
            destination: 'MOW',
            limit: '10',
            distance: '100'
          },
          headers: {
            'x-rapidapi-key': '9c5cac96c9mshdca89ff9a2d7d50p10c6d4jsn8df184be3e84',
            'x-rapidapi-host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
          }
        };

        const response = await axios.request(options);
        setFlights(response.data);
      } catch (err) {
        setError('Error fetching flight data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Flight Search Results</h2>
      <ul>
        {flights.map((flight, index) => (
          <li key={index}>
            {flight.someField} {/* Replace 'someField' with actual field from the API response */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
