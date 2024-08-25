import React, { useState } from 'react';

const SearchFlight: React.FC = () => {
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSearch = () => {
    // Handle search logic here
    console.log("Destination:", destination);
    console.log("Departure Date:", departureDate);
    console.log("Return Date:", returnDate);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Search for Your Trip</h2>
      <form style={styles.form} onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
        <div style={styles.inputContainer}>
          <label htmlFor="destination" style={styles.label}>
            Destination:
            <input
              type="text"
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              style={styles.input}
              placeholder="Enter your destination"
              required
            />
          </label>
          <label htmlFor="departureDate" style={styles.label}>
            Departure Date:
            <input
              type="date"
              id="departureDate"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              style={styles.input}
              required
            />
          </label>
          <label htmlFor="returnDate" style={styles.label}>
            Return Date:
            <input
              type="date"
              id="returnDate"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              style={styles.input}
              required
            />
          </label>
        </div>
        <button type="submit" style={styles.button}>Search</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
    backgroundColor: '#f9f9f9',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '28px',
    fontWeight: '600',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'space-between',
  },
  label: {
    flex: '1 1 30%',
    fontSize: '16px',
    fontWeight: '500',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    outline: 'none',
  },
  button: {
    padding: '12px',
    fontSize: '18px',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default SearchFlight;
