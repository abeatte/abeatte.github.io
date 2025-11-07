'use client';

import { createContext, useContext, ReactNode } from 'react';

type Data = {
  main: any,
  resume: any,
  secret: any,
  portfolio: any
};

type DataContextType = {
  dataPromise: Promise<Data | null>;
};

const DataContext = createContext<DataContextType | null>(null);

export function useData(): DataContextType {
  let context = useContext(DataContext);
  if (context === null) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}

export function DataProvider({
  children,
  dataPromise
}: {
  children: ReactNode;
  dataPromise: Promise<Data | null>;
}) {
  return (
    <DataContext.Provider value={{ dataPromise }}>
      {children}
    </DataContext.Provider>
  );
}