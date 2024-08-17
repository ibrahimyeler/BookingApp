import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext'; 
import { useState } from "react";
import Layout from "./layouts/Layout";
import SignIn from './pages/SignIn';
import Register from './pages/Register'; // Register bileşenini doğru bir şekilde import edin
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import LanguageSwitcher from "./components/Language/LanguageSwitcher";
import Footer from './components/Footer';
import Settings from "./components/Settings/Settings";
import Home from './pages/Home'; // Home bileşenini import edin

import './i18n'; // i18n'i buraya import et

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/settings" element={<Layout><Settings /></Layout>} />
        <Route 
          path="/" 
          element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/home" />} 
        />
        <Route path="/register" element={<Layout><Register /></Layout>} />
        <Route path="/search" element={<Layout><p>Search Page</p></Layout>} />
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route 
          path="/signin" 
          element={<Layout><SignIn onSignIn={() => setIsAuthenticated(true)} /></Layout>} 
        />
        <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/terms-of-service" element={<Layout><TermsOfService /></Layout>} />
        <Route path="/footer" element={<Layout><LanguageSwitcher /></Layout>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router></AuthProvider>
  );
}

export default App;
