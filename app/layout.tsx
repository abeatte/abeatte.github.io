import '../public/css/default.css';
import '../public/css/layout.css';
import '../public/css/media-queries.css';

import data from '../public/data.json';

import type { Metadata } from 'next'
import { DataProvider } from './dataProvider';

export const metadata: Metadata = {
    title: 'Art Beatte IV',
    description: 'Art Beatte\'s Website',
}

export default function RootLayout({children}) {

    const dataPromise = Promise.resolve(data);

    return (
        <html lang="en">
            <body>
                <DataProvider dataPromise={dataPromise}>{children}</DataProvider>
            </body>
        </html>
    );
  }