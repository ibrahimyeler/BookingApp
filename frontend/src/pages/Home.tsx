import React from 'react';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <div className="hero-overlay">
                <h1 className="text-5xl font-bold text-center text-white">Welcome to Unexpected Journey</h1>
                <p className="text-center text-white mt-4">Explore our services and plan your next adventure!</p>
            </div>
        </div>
    );
}

export default Home;
