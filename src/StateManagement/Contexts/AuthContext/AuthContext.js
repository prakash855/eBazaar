import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const getToken = localStorage.getItem("token");
  const getUser = localStorage.getItem("user");

  const [token, setToken] = useState(getToken || "");
  const [user, setUser] = useState(getUser || "");

  const logOut = () => {
    setToken("");
    setUser("");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ token, user, setToken, setUser, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthContextProvider, useAuth };
