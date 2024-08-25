import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const NavBar: React.FC = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const handleSignOut = () => {
    setIsAuthenticated(false);
  };

  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <div>
        <Link to="/" className="mr-4">Home</Link>
        {isAuthenticated ? (
          <>
            <button onClick={handleSignOut} className="mr-4">Sign Out</button>
          </>
        ) : (
          <>
            <Link to="/signin" className="mr-4">Sign In</Link>
            <Link to="/register">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
