import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [dark, setDark] = useState(true);
  const [loading, setLoading] = useState(true);
  const [currency, setCurrency] = useState("EUR");
  const [symbol, setSymbol] = useState("€");

  useEffect(() => {
    if (currency === "EUR") setSymbol("€");
    else if (currency === "USD") setSymbol("$");
    // eslint-disable-next-line
  }, [currency]);
  useEffect(() => {
    // Loading function to load data or
    // fake it using setTimeout;
    const loadData = async () => {
      // Wait for two second
      await new Promise((r) => setTimeout(r, 500));

      // Toggle loading state
      setLoading((loading) => !loading);
    };

    loadData();
  }, []);
  return (
    <AppContext.Provider
      value={{ dark, setDark, currency, symbol, setCurrency, loading }}
    >
      {children}
    </AppContext.Provider>
  );
};
// hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
