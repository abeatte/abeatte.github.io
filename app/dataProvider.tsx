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

const dataPromise = Promise.resolve(raw_data as Data);

export function DataProvider({ children }: { children: ReactNode }) {
  return (
    <DataContext.Provider value={dataPromise}>
      {children}
    </DataContext.Provider>
  );
}

export const useSiteData = (): Data => {
  return use(use(DataContext));
};
