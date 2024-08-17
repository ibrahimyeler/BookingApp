import React from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LanguageSwitcher from "../components/Language/LanguageSwitcher"; // Yeni bileşeni import et

interface Props {
    children: React.ReactNode;
}

const Layout = ({children}: Props ) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex justify-between items-center px-4 py-2 bg-gray-800 text-white">
                <div className="flex-grow">
                    <Hero />
                </div>
                <LanguageSwitcher /> {/* Dil değiştirme bileşenini ekle */}
            </div>
            <div className="container mx-auto py-10 flex-1">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
