import React, { useState } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './layouts/Layout';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Home from './pages/Home';
import SearchFlight from './pages/Search/SearchFlight';
import SearchHotel from './pages/Search/SearchHotel';
import HotelList from './pages/HotelList';
import HotelDetails from './pages/HotelDetail';
import FAQ from './pages/FAQ';
// import Profile from './components/profile/Profile';
import Footer from './components/Footer';
// import LanguageSwitcher from './components/LanguageSwitcher';
import Menu from './components/Menu/Menu';
// import './i18n'; // Import i18n configuration

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthProvider>
      <Router>
        <Layout>
          {/* <LanguageSwitcher /> {/* Add language switcher */}
          <Routes>
            <Route path="/faq" element={<FAQ />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/home" />} />
            <Route path="/hotels" element={<HotelList />} />
            <Route path="/hotels/:hotelId" element={<HotelDetails />} />
            <Route path="/register" element={<Register />} />
            <Route path="/search/search-flight" element={<SearchFlight />} />
            <Route path="/search/search-hotel" element={<SearchHotel />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signin" element={<SignIn onSignIn={() => setIsAuthenticated(true)} />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
};

export default App;
