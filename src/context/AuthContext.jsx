import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    email: "",
    isLoggedIn: false,
  });

  const handleUserData = (newUserData) => {
    setUserData((prev) => ({ ...prev, ...newUserData }));
  };

  return (
    <AuthContext.Provider value={{ userData, handleUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
