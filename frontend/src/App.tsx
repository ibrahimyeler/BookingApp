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

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/faq" element={<FAQ />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/home" />} />
            <Route path="/hotels" element={<HotelList />} />
            <Route path="/hotels/:hotelId" element={<HotelDetails />} />
            <Route path="/register" element={<Register />} />
            <Route path="/search/search-flight" element={<SearchFlight />} />
            <Route path="/profile-page" element={<ProfilePage />} />
            <Route path="/search/search-hotel" element={<SearchHotel />} />
            <Route path="/home" element={<Home />} />
            <Route path="/rent-car" element={<RentCar />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/car" element={<Car />} />
            <Route path="/cultural-tours" element={<CulturalToursPage />} />
            <Route path="/abroad-tours" element={<AbroadTours />} />
            <Route path="/abroad-tours/:id" element={<TourDetail />} /> {/* Yeni detay sayfası */}
            <Route path="/signin" element={<SignIn onSignIn={() => setIsAuthenticated(true)} />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/flights" element={<FlightPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
};

export default App;
