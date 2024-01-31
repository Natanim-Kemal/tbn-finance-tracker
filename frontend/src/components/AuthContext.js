// AuthContext.js
import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [cookies] = useCookies(["jwt"]);
  const [isAuthenticated, setIsAuthenticated] = useState(!!cookies.jwt);

  useEffect(() => {
    setIsAuthenticated(!!cookies.jwt);
  }, [cookies.jwt]);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
