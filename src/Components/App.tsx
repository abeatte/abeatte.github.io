import ReactGA from 'react-ga';

import Header from './Header';
import Footer from './Footer';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';

import { Suspense, useEffect } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Loading from './Loading';
library.add(fab)

export default function App() {
  useEffect(() => {
    ReactGA.initialize('UA-55646580-1');
    ReactGA.pageview(window.location.pathname);
  }, []); // only once 

  return (
    <div className="App">
      <Suspense fallback={<Loading />} >
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <Footer />
      </Suspense>
    </div>
  );
}
