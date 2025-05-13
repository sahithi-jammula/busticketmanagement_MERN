import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("users");
    if (userData) {
      setUsers(JSON.parse(userData));
    }
  }, []);

  const login = (userData) => {
    const updatedUsers = [...users, userData];
    setUsers(updatedUsers);
    setCurrentUser(userData);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
