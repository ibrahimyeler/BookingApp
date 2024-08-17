import { useState } from 'react';
import { FaGlobe } from 'react-icons/fa';
import i18n from '../../i18n';
import ReactCountryFlag from 'react-country-flag';

const LanguageSwitcher = () => {
    const [language, setLanguage] = useState(i18n.language || 'en');
    const [isOpen, setIsOpen] = useState(false);

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setLanguage(lang);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            <button
                className="flex items-center text-white" 
                onClick={() => setIsOpen(!isOpen)}
            >
                <FaGlobe className="mr-1 text-xl" />
                {language === 'en' ? 'English' : 
                 language === 'tr' ? 'Türkçe' : 
                 language === 'de' ? 'Deutsch' : 
                 '日本語'}
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg">
                    <button
                        onClick={() => changeLanguage('en')}
                        className="flex items-center w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                        <ReactCountryFlag countryCode="US" svg className="mr-2 text-xl" />
                        English
                    </button>
                    <button
                        onClick={() => changeLanguage('tr')}
                        className="flex items-center w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                        <ReactCountryFlag countryCode="TR" svg className="mr-2 text-xl" />
                        Türkçe
                    </button>
                    <button
                        onClick={() => changeLanguage('de')}
                        className="flex items-center w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                        <ReactCountryFlag countryCode="DE" svg className="mr-2 text-xl" />
                        Deutsch
                    </button>
                    <button
                        onClick={() => changeLanguage('ja')}
                        className="flex items-center w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                        <ReactCountryFlag countryCode="JP" svg className="mr-2 text-xl" />
                        日本語
                    </button>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
