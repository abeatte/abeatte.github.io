import '../public/css/default.css';
import '../public/css/layout.css';
import '../public/css/media-queries.css';

import { Open_Sans, Libre_Baskerville } from 'next/font/google';

const openSans = Open_Sans({
    weight: ['300', '400', '600', '700'],
    display: 'swap',
    variable: '--font-opensans',
});

const libreBaskerville = Libre_Baskerville({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    display: 'swap',
    variable: '--font-librebaskerville',
});

const fontVariables = `
${openSans.variable}
${libreBaskerville.variable}
`;

import type { Metadata } from 'next'
import { DataProvider } from './dataProvider';

export const metadata: Metadata = {
    title: 'Art Beatte IV',
    description: 'Art Beatte\'s Website',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={fontVariables}>
            <body>
                <DataProvider>
                    {children}
                </DataProvider>
            </body>
        </html>
    );
}