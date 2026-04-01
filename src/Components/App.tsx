import { Suspense, useEffect } from 'react';
import ReactGA from 'react-ga';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Header from './Header';
import Intro from './Intro';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Footer from './Footer';
import Loading from './Loading';

library.add(fab);

export default function App() {
  useEffect(() => {
    ReactGA.initialize('UA-55646580-1');
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div className="App">
      <Header />
      <Suspense fallback={<Loading />}>
        <Intro />
        <About />
        <Resume />
        <Portfolio />
        <Footer />
      </Suspense>
    </div>
  );
}
