'use client';

import { createContext, ReactNode, useState, useEffect } from 'react';

import raw_data from '../public/data.json';

type Data = {
  main: any,
  resume: any,
  secret: any,
  portfolio: any
};

type DataContextType = {
  siteData: Data | null;
  loading: boolean;
  error: boolean;
};

export const DataContext = createContext<DataContextType | null>(null);

export function DataProvider({ children }: { children: ReactNode }) {
  const [siteData, setSiteData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSiteData = async () => {
      try {
        const siteData = await Promise.resolve(raw_data);
        setSiteData(siteData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSiteData();
  }, []); // run once per mount

  const contextValue = {
    siteData,
    loading,
    error,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
}