/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState, useContext, createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
<<<<<<< HEAD
  const [user, setUser] = useState("pomodoro");
=======
  const [user, setUser] = useState("anthony");
>>>>>>> 4d042daa5cbbb3d236ede691c450567c6c8ca779

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
