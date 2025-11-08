import Konami from 'react-konami-code';
import ReactGA from 'react-ga';

import Header from './Header';
import Footer from './Footer';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';

import { useEffect, useState } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

export default function App() {
  useEffect(() => {
    ReactGA.initialize('UA-55646580-1');
    ReactGA.pageview(window.location.pathname);
  }, []); // only once 

  const [konami, setKonami] = useState(false);

  return (
    <div className="App">
      <Konami className="hidden" disabled={false} action={() => setKonami(prev => !prev)} timeout={25} />
      <Header konami={konami} />
      <About />
      <Resume />
      <Portfolio />
      <Footer />
    </div>
  );
}
