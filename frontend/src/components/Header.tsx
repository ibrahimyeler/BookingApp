import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaCog } from 'react-icons/fa'; // İkonu import edin

const Header = () => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // Kullanıcı oturum durumunu kontrol etmek için
    const location = useLocation();
    const navigate = useNavigate();

    // Sayfanın yolunu kontrol et
    const isAuthPage = location.pathname === '/signin' || location.pathname === '/register';
    const isSignInPage = location.pathname === '/signin';

    useEffect(() => {
        // Burada, oturum durumunu kontrol etmek için gerekli işlevselliği ekleyebilirsiniz.
        // Örneğin: API çağrısı yaparak oturum durumunu kontrol edebilirsiniz.

        // Örnek: localStorage'dan oturum durumunu kontrol etme
        const userLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        setIsUserLoggedIn(userLoggedIn);
    }, []);

    const handleSignOut = () => {
        // Kullanıcıyı çıkış yaparken buraya gerekli işlevselliği ekleyebilirsiniz
        // Örneğin: kullanıcı oturumunu sonlandırmak için API çağrısı yapılabilir

        localStorage.setItem('isLoggedIn', 'false'); // localStorage'dan oturum durumunu güncelle
        setIsUserLoggedIn(false); // Kullanıcı oturumunu kapat
        navigate('/signin'); // Sign In sayfasına yönlendir
    };

    const handleSignIn = () => {
        navigate('/signin');
    };

    const handleSignUp = () => {
        navigate('/register');
    };

    const toggleSettings = () => {
        setIsSettingsOpen(!isSettingsOpen);
    };

    return (
        <div className="bg-blue-800 py-6">
            <div className="container mx-auto flex justify-between items-center relative">
                <span className="text-3xl text-white font-bold tracking-tight">
                    <Link to="/">UnexpectedJourney.com</Link>
                </span>
                <span className="flex space-x-2 items-center">
                    {/* Ayarlar ikonunu ve metnini ekleyin */}
                    <button
                        className="flex items-center text-white hover:underline relative"
                        onClick={toggleSettings}
                    >
                        <FaCog className="mr-1 text-xl" /> {/* İkonu buraya ekleyin */}
                        Settings
                    </button>
                    {!isAuthPage && (
                        // Kullanıcı oturum açmamışsa Sign In ve Sign Up butonlarını göster
                        !isUserLoggedIn ? (
                            <>
                                <button
                                    className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100"
                                    onClick={handleSignIn}
                                >
                                    Sign In
                                </button>
                                <button
                                    className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100"
                                    onClick={handleSignUp}
                                >
                                    Sign Up
                                </button>
                            </>
                        ) : (
                            // Kullanıcı oturum açmışsa Sign Out butonunu göster
                            <button
                                className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100"
                                onClick={handleSignOut}
                            >
                                Sign Out
                            </button>
                        )
                    )}
                    {isSettingsOpen && (
                        <div className="absolute right-0 top-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-48">
                            <div className="p-4">
                                <h3 className="text-lg font-bold">Settings</h3>
                                <ul className="mt-2">
                                    <li><Link to="/settings/profile" className="block py-2 px-4 hover:bg-gray-100">Profile</Link></li>
                                    <li><Link to="/settings/account" className="block py-2 px-4 hover:bg-gray-100">Account</Link></li>
                                    <li><Link to="/settings/preferences" className="block py-2 px-4 hover:bg-gray-100">Preferences</Link></li>
                                    <li>
                                        <Link to="/settings/delete" className="block py-2 px-4 hover:bg-red-100 text-red-600 font-bold">
                                            Delete Account
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </span>
            </div>
        </div>
    );
};

export default Header;
