import Konami from 'react-konami-code';
import ReactGA from 'react-ga';

import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Secret from './Components/Secret';
import Portfolio from './Components/Portfolio';

import { useData } from '../app/dataProvider';
import { use, useEffect, useState } from 'react';

export default function App() {
  useEffect(() => {
    ReactGA.initialize('UA-55646580-1');
    ReactGA.pageview(window.location.pathname);
  }, []); // only once 

  const [konami, setKonami] = useState(false);

  const { dataPromise } = useData()
  const data = use(dataPromise)

  return (
    <div className="App">
      <Konami className="hidden" disabled={false} action={() => setKonami(prev => !prev)} timeout={25} />
      <Header konami={konami} data={data.main} />
      <About data={data.main} />
      <Resume data={data.resume} />
      <Secret konami={konami} data={data.secret} />
      <Portfolio data={data.portfolio} />
      <Footer data={data.main} />
    </div>
  );
}
