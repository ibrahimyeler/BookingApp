import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaQuestionCircle, FaCopyright } from 'react-icons/fa'; 

const Footer: React.FC = () => {
    const [selectedCurrency, setSelectedCurrency] = useState<string>('try');

    const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCurrency(event.target.value);
    };

    return (
        <div className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-300 py-10"> {/* Soft tonlarda gradyan */}
            <div className="container mx-auto flex justify-between items-center">
              
                <span className="text-gray-200 font-semibold tracking-tight flex gap-4 items-center">
                    <Link to="/privacy-policy" className="cursor-pointer hover:underline">Privacy Policy</Link>
                    <Link to="/terms-of-service" className="cursor-pointer hover:underline">Terms of Service</Link>
                    <Link to="/faq" className="flex items-center cursor-pointer hover:underline">
                        <FaQuestionCircle className="mr-1 text-xl" /> FAQ
                    </Link>
                </span>

                <div className="flex items-center gap-2 text-gray-200">
                    <span>Currency:</span>
                    <select 
                        className="bg-white text-indigo-600 py-1 px-2 rounded shadow-lg transition duration-300 ease-in-out hover:bg-indigo-100"
                        value={selectedCurrency}
                        onChange={handleCurrencyChange}
                    >
                        <option value="try">TRY</option>
                        <option value="usd">USD</option>
                        <option value="eur">EUR</option>
                    </select>
                    {selectedCurrency === 'try' && (
                        <img src="/flags/Turkiye.png" alt="Turkey Flag" className="w-8 h-5" />
                    )}
                    {selectedCurrency === 'usd' && (
                        <img src="/flags/usd.png" alt="USD Flag" className="w-8 h-5" />
                    )}
                    {selectedCurrency === 'eur' && (
                        <img src="/flags/eur.png" alt="EUR Flag" className="w-8 h-5" />
                    )}
                </div>

                <span className="text-gray-200 flex items-center">
                    <FaCopyright className="mr-1" /> 2024 All rights reserved.
                </span>
            </div>
        </div>
    );
};

export default Footer;
