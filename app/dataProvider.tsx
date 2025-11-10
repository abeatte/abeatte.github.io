'use client';

import { createContext, ReactNode, use } from 'react';

import raw_data from '../public/data.json';

type Data = {
  main: any,
  resume: any,
  secret: any,
  portfolio: any
};

export const DataContext = createContext<Promise<Data>>(null);

export function DataProvider({ children }: { children: ReactNode }) {

  const fetchSiteData = async (): Promise<Data> => {
    return new Promise(resolve => setTimeout(() => resolve(raw_data), 5000));
  };

  const dataPromise = fetchSiteData();

  return (
    <DataContext.Provider value={dataPromise}>
      {children}
    </DataContext.Provider>
  );
}

export const useSiteData = (): Data => {
  return use(use(DataContext));
};