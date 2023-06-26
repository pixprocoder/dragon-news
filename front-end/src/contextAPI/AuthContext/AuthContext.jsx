import React, { createContext } from "react";

// Creating a contextAPI for authentication
export const userContext = createContext(null);

const AuthContext = ({ children }) => {
  const user = { name: "kobir" };
  const authInfo = {
    user,
  };
  return (
    <userContext.Provider value={authInfo}>{children}</userContext.Provider>
  );
};

export default AuthContext;
