import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext()

export const AuthWrapper = ({ children }) => {
  const [admin, setAdmin] = useState(false);

 
  useEffect(() => {
    const authStatus = localStorage.getItem("admin") === "true";
    setAdmin(authStatus);
  }, []);


  const login = () => {
    setAdmin(true);
    localStorage.setItem("admin", "true");
  };


  const logout = () => {
    setAdmin(false);
    localStorage.removeItem("admin");
  };

  return (
    <AuthContext.Provider value={{ admin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuthorization = () => useContext(AuthContext)