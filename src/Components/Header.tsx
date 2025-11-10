import classNames from 'classnames';
import { useState } from 'react';
import Konami from 'react-konami-code';
import { Link } from 'react-scroll';

export default function Header() {

   const [konami, setKonami] = useState(false);

   return (
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
}
