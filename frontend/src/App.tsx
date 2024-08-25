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
<<<<<<< HEAD
import Footer from './components/Footer';
import Menu from './components/Menu';
import FlightPage from './pages/FlightPage';
import CulturalToursPage from './pages/CulturalToursPage';
import ProfilePage from './pages/ProfilePage';
import RentCar from './pages/RentCar';
import AbroadTours from './pages/AbroadTours'; // Import AbroadTours
import TourDetail from './pages/TourDetail'; // Import TourDetail
import Car from './pages/Car';
import Navbar from './components/Navbar';
=======
// import Profile from './components/profile/Profile';
import Footer from './components/Footer';
// import LanguageSwitcher from './components/LanguageSwitcher';
import Menu from './components/Menu/Menu';
// import './i18n'; // Import i18n configuration
>>>>>>> 49304292c6ffddd1a62436e9dfc9cc0378c98387

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthProvider>
      <Router>
        <Layout>
<<<<<<< HEAD
=======
          {/* <LanguageSwitcher /> {/* Add language switcher */}
>>>>>>> 49304292c6ffddd1a62436e9dfc9cc0378c98387
          <Routes>
            <Route path="/faq" element={<FAQ />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/home" />} />
            <Route path="/hotels" element={<HotelList />} />
            <Route path="/hotels/:hotelId" element={<HotelDetails />} />
            <Route path="/register" element={<Register />} />
            <Route path="/search/search-flight" element={<SearchFlight />} />
<<<<<<< HEAD
            <Route path="/profile-page" element={<ProfilePage />} />
            <Route path="/search/search-hotel" element={<SearchHotel />} />
            <Route path="/home" element={<Home />} />
            <Route path="/rent-car" element={<RentCar />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/car" element={<Car />} />
            <Route path="/cultural-tours" element={<CulturalToursPage />} />
            <Route path="/abroad-tours" element={<AbroadTours />} />
            <Route path="/abroad-tours/:id" element={<TourDetail />} /> {/* Yeni detay sayfası */}
=======
            <Route path="/search/search-hotel" element={<SearchHotel />} />
            <Route path="/home" element={<Home />} />
>>>>>>> 49304292c6ffddd1a62436e9dfc9cc0378c98387
            <Route path="/signin" element={<SignIn onSignIn={() => setIsAuthenticated(true)} />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/footer" element={<Footer />} />
<<<<<<< HEAD
            <Route path="/flights" element={<FlightPage />} />
=======
>>>>>>> 49304292c6ffddd1a62436e9dfc9cc0378c98387
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
};

export default App;
