import '../public/css/default.css';
import '../public/css/layout.css';
import '../public/css/media-queries.css';
import '../public/css/magnific-popup.css';

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Art Beatte IV',
    description: 'Art Beatte\'s Website',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    );
  }