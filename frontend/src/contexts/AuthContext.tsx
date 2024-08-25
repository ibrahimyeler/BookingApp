<<<<<<< HEAD
// contexts/AuthContext.tsx

import React, { createContext, useContext, useState } from 'react';

// AuthContextType'ı tanımlayın
interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

// Varsayılan olarak boş bir context oluşturun
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider bileşenini tanımlayın
export const AuthProvider: React.FC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
=======
import React, { createContext, useContext, useState } from 'react';

// Oturum durumunu yönetmek için context tipi
interface AuthContextType {
  isUserLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

// Varsayılan değerler
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const login = () => setIsUserLoggedIn(true);
  const logout = () => setIsUserLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isUserLoggedIn, login, logout }}>
>>>>>>> 49304292c6ffddd1a62436e9dfc9cc0378c98387
      {children}
    </AuthContext.Provider>
  );
};

<<<<<<< HEAD
// useAuth hook'u tanımlayın
=======
// Context kullanımı için hook
>>>>>>> 49304292c6ffddd1a62436e9dfc9cc0378c98387
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
