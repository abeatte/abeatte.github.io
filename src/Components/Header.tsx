import { useContext, useState } from 'react';
import { Element, Link } from 'react-scroll';
import { DataContext } from '../../app/dataProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';

import Konami from 'react-konami-code';
import Loading from './Loading';

var classNames = require('classnames');

export default function Header() {
   const { siteData, loading, error } = useContext(DataContext);

   const [konami, setKonami] = useState(false);

   if (loading || error) {
      return <Loading />;
   }

   const { name, occupation, description, address } = siteData.main;
   const networks = siteData.main.social.map(network =>
      (<li key={network.name}><a href={network.url}><span><FontAwesomeIcon icon={network.className} /></span></a></li>)
   );

   const nav = (
      <nav id="nav-wrap" className="opaque">
         <Konami disabled={false} action={() => setKonami(prev => !prev)} timeout={25} />
         <ul id="nav" className="nav">
            <li><Link activeClass="current" smooth={true} duration={500} to="home">Home</Link></li>
            <li><Link activeClass="current" smooth={true} duration={500} to="about">About</Link></li>
            <li><Link activeClass="current" smooth={true} duration={500} to="resume">Resume</Link></li>
            <li><Link activeClass="current" smooth={true} duration={500} to="portfolio">Projects</Link></li>
            <li className={classNames(konami ? "" : "hidden")}><a href="/playground">Playground</a></li>
         </ul>
      </nav>
   );

   return (
      <Element name='home'>
         <header id="home">
            {nav}
            <div className="row banner">
               <div className="banner-text">
                  <h1 className="responsive-headline">{name}</h1>
                  <h3><span>{occupation} | </span>{address.city}</h3>
                  <br></br>
                  <h3> {description}</h3>
                  <hr />
                  <ul className="social">
                     {networks}
                  </ul>
               </div>
            </div>

            <p className="scrolldown">
               <Link smooth={true} duration={500} to="about"><FontAwesomeIcon size='sm' icon={faCircleChevronDown} /></Link>
            </p>
         </header>
      </Element>
   );
}
