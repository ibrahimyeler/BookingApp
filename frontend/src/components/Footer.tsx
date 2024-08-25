<<<<<<< HEAD
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
=======
// import React, { useState } from 'react'; // useState'i buradan import edin
// import enTranslations from '../locales/en/translation.json';
// import trTranslations from '../locales/tr/translation.json';
// import esTranslations from '../locales/es/translation.json';

// interface Translations {
//   welcome: string;
// }

// const translations: Record<string, Translations> = {
//   en: enTranslations,
//   tr: trTranslations,
//   es: esTranslations,
// };

// const Footer: React.FC = () => {
//   const [selectedLanguage, setSelectedLanguage] = useState<string>('en');

//   const handleLanguageChange = (lng: string) => {
//     setSelectedLanguage(lng);
//   };

//   const currentTranslations = translations[selectedLanguage];

//   return (
//     <footer>
//       <button onClick={() => handleLanguageChange('en')}>English</button>
//       <button onClick={() => handleLanguageChange('tr')}>Türkçe</button>
//       <button onClick={() => handleLanguageChange('es')}>Español</button>
//       <p>{currentTranslations.welcome}</p>
//     </footer>
//   );
// };

// export default Footer;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaQuestionCircle, FaCopyright } from 'react-icons/fa'; // İkonları import et

const Footer: React.FC = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('try'); // Varsayılan olarak TRY seçili

    const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCurrency(event.target.value); // Seçilen para birimini güncelle
    };

    return (
        <div className="bg-blue-800 py-10 relative"> {/* relative ekle */}
            <div className="container mx-auto flex justify-between items-center">
              
                <span className="text-white font-bold tracking-tight flex gap-4 items-center">
>>>>>>> 49304292c6ffddd1a62436e9dfc9cc0378c98387
                    <Link to="/privacy-policy" className="cursor-pointer hover:underline">Privacy Policy</Link>
                    <Link to="/terms-of-service" className="cursor-pointer hover:underline">Terms of Service</Link>
                    <Link to="/faq" className="flex items-center cursor-pointer hover:underline">
                        <FaQuestionCircle className="mr-1 text-xl" /> FAQ
                    </Link>
                </span>

<<<<<<< HEAD
                <div className="flex items-center gap-2 text-gray-200">
                    <span>Currency:</span>
                    <select 
                        className="bg-white text-indigo-600 py-1 px-2 rounded shadow-lg transition duration-300 ease-in-out hover:bg-indigo-100"
=======
                <div className="flex items-center gap-2 text-white">
                    <span>Currency:</span>
                    <select 
                        className="bg-white text-blue-800 py-1 px-2 rounded"
>>>>>>> 49304292c6ffddd1a62436e9dfc9cc0378c98387
                        value={selectedCurrency}
                        onChange={handleCurrencyChange}
                    >
                        <option value="try">TRY</option>
                        <option value="usd">USD</option>
                        <option value="eur">EUR</option>
                    </select>
<<<<<<< HEAD
=======
                    {/* Bayrağı seçilen para birimine göre göster */}
>>>>>>> 49304292c6ffddd1a62436e9dfc9cc0378c98387
                    {selectedCurrency === 'try' && (
                        <img src="/flags/Turkiye.png" alt="Turkey Flag" className="w-8 h-5" />
                    )}
                    {selectedCurrency === 'usd' && (
                        <img src="/flags/usd.png" alt="USD Flag" className="w-8 h-5" />
                    )}
                    {selectedCurrency === 'eur' && (
<<<<<<< HEAD
                        <img src="/flags/eur.png" alt="EUR Flag" className="w-8 h-5" />
                    )}
                </div>

                <span className="text-gray-200 flex items-center">
                    <FaCopyright className="mr-1" /> 2024 All rights reserved.
                </span>
=======
                        <img src="/flags/euro.png" alt="EURO Flag" className="w-8 h-5" />
                    )}
                </div>
             
            </div>

            {/* Telif hakkı bilgisi */}
            <div className="bg-blue-900 bg-opacity-50 py-4 text-center text-gray-300 text-sm absolute bottom-0 left-0 w-full z-10"> {/* bg-opacity-50 ve z-10 ekle */}
                <div className="flex justify-center items-center gap-1 text-opacity-0.9">
                    <FaCopyright className="text-gray-400" /> 
                    <span>Developed by İbrahim Hakkı Yeler</span>
                </div>
>>>>>>> 49304292c6ffddd1a62436e9dfc9cc0378c98387
            </div>
        </div>
    );
};

export default Footer;
