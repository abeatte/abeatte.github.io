import { useContext } from 'react';
import { Element, Link } from 'react-scroll';
import { DataContext } from '../../app/dataProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

var classNames = require('classnames');

export default function Header({ konami }: { konami: boolean }) {
   const { siteData, loading, error } = useContext(DataContext);

   if (!loading && !error) {
      var name = siteData.main.name;
      var occupation = siteData.main.occupation;
      var description = siteData.main.description;
      var city = siteData.main.address.city;
      var networks = siteData.main.social.map(network =>
         (<li key={network.name}><a href={network.url}><span><FontAwesomeIcon icon={network.className} /></span></a></li>)
      )
   }

   const nav = (
      <nav id="nav-wrap" className="opaque">

         <Link className="mobile-btn" smooth={true} duration={500} to="nav-wrap" title="Show navigation">Show navigation</Link>
         <Link className="mobile-btn" smooth={true} duration={500} to="home" title="Hide navigation">Hide navigation</Link>

         <ul id="nav" className="nav">
            <li>
               <Link activeClass="current" smooth={true} duration={500} to="home">Home</Link>
            </li>
            <li>
               <Link activeClass="current" onSetActive={() => console.log('setActive')} smooth={true} duration={500} to="about">About</Link>
            </li>
            <li>
               <Link activeClass="current" smooth={true} duration={500} to="resume">Resume</Link>
            </li>
            <li>
               <Link smooth={true} duration={500} to="portfolio">Projects</Link>
            </li>
            <li>
               <a className={
                  classNames(
                     konami ? "" : "hidden"
                  )
               } href="/playground">Playground</a>
            </li>
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
                  <h3><span>{occupation} | </span>{city}</h3>
                  <br></br>
                  <h3> {description}</h3>
                  <hr />
                  <ul className="social">
                     {networks}
                  </ul>
               </div>
            </div>

            <p className="scrolldown">
               <Link smooth={true} duration={500} to="about"><i className="icon-down-circle"></i></Link>
            </p>
         </header>
      </Element>
   );
}
