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
      {children}
    </AuthContext.Provider>
  );
};

// useAuth hook'u tanımlayın
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
