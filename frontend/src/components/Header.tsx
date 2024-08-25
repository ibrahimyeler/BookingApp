import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import './header.css';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
    const location = useLocation();
    const navigate = useNavigate();

    const isAuthPage = location.pathname === '/signin' || location.pathname === '/register';

    useEffect(() => {
        const userLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        setIsUserLoggedIn(userLoggedIn);
    }, []);

    const handleSignOut = () => {
        localStorage.setItem('isLoggedIn', 'false');
        setIsUserLoggedIn(false);
        navigate('/signin');
    };

    const handleSignIn = () => {
        navigate('/signin');
    };

    const handleSignUp = () => {
        navigate('/register');
    };

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const title = "UnexpectedJourney.com";

    return (
        <header className="header-background bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-700 py-6 shadow-md">
            <div className="container mx-auto flex items-center justify-between px-4">
                <Link to="/" className="flex items-center">
                    <img src="/images/logo2.png" alt="Logo" className="w-20 h-auto rounded-full border-2 border-white" />
                </Link>
                <div className="flex-1 flex justify-center">
                    <h1 className="title-text text-center">
                        {title.split('').map((char, index) => (
                            <span
                                key={index}
                                className="title-char"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {char}
                            </span>
                        ))}
                    </h1>
                </div>
                <div className="flex items-center space-x-2">
                    {!isAuthPage && (
                        <>
                            {!isUserLoggedIn ? (
                                <>
                                    <button
                                        className="text-white border-2 border-white px-4 py-2 text-sm font-semibold rounded-lg bg-transparent hover:bg-yellow-400 hover:text-black transition-colors duration-300"
                                        onClick={handleSignIn}
                                    >
                                        Sign In
                                    </button>
                                    <button
                                        className="text-white border-2 border-white px-4 py-2 text-sm font-semibold rounded-lg bg-transparent hover:bg-yellow-400 hover:text-black transition-colors duration-300"
                                        onClick={handleSignUp}
                                    >
                                        Sign Up
                                    </button>
                                </>
                            ) : (
                                <button
                                    className="text-white border-2 border-white px-4 py-2 text-sm font-semibold rounded-lg bg-transparent hover:bg-red-500 hover:text-black transition-colors duration-300"
                                    onClick={handleSignOut}
                                >
                                    Sign Out
                                </button>
                            )}
                        </>
                    )}
                    <button
                        className="text-white text-xl relative transition-transform duration-300 transform hover:scale-110"
                        onClick={toggleMenu}
                    >
                        <FaBars />
                    </button>
                    {isMenuOpen && (
                        <div className="absolute right-0 top-full mt-2 bg-white border border-gray-300 shadow-lg z-10">
                            <ul className="list-none p-2">
                                <li><Link to="/" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Home</Link></li>
                                <li><Link to="/search/search-flight" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Search Flights</Link></li>
                                <li><Link to="/search/search-hotel" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Search Hotels</Link></li>
                                <li><Link to="/profile-page" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Profile Page</Link></li>
                                <li><Link to="/privacy-policy" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Privacy Policy</Link></li>
                                <li><Link to="/terms-of-service" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Terms of Service</Link></li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
