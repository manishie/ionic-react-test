import React, { createContext, useState } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [loginType, setLoginType] = useState(undefined);
  const [providerFilters, setProviderFilters] = useState({});
  // const [user, setUser] = useState(undefined);

  return (
    // <AppContext.Provider value={{ user, setUser }}>
    <AppContext.Provider
      value={{ loginType, setLoginType, providerFilters, setProviderFilters }}
    >
      {children}
    </AppContext.Provider>
  );
};
