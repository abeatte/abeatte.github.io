'use client';

import { createContext, ReactNode, use } from 'react';

import raw_data from '../public/data.json';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type SocialData = {
  name: string,
  url: string,
  className: IconProp,
};

type Data = {
  main: {
    name: string,
    occupation: string,
    description: string,
    image: string,
    bio: string,
    address: {
      city: string,
      state: string,
    },
    website: string,
    social: SocialData[],
  },
  resume: {
    download: string,
    education: {
      school: string,
      degree: string,
      graduated: string,
      description: string,
    }[],
    work: {
      company: string,
      title: string,
      years: string,
      description: string,
    }[],
  },
  secret: {
    title: string,
    image: string,
  },
  portfolio: {
    projects: {
      title: string,
      category: string,
      image: string,
      url: string,
    }[]
  }
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
