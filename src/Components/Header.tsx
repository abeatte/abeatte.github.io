import classNames from 'classnames';
import { useState } from 'react';
import Konami from 'react-konami-code';
import { Link } from 'react-scroll';

const navItems = [
   { to: 'home', label: 'Home' },
   { to: 'about', label: 'About' },
   { to: 'resume', label: 'Resume' },
   { to: 'portfolio', label: 'Workbench' },
];

export default function Header() {
   const [konami, setKonami] = useState(false);

   return (
      <nav id="nav-wrap" className="opaque">
         <Konami disabled={false} action={() => setKonami(prev => !prev)} timeout={25} />
         <ul id="nav" className="nav">
            {navItems.map(({ to, label }) => (
               <li key={to}><Link activeClass="current" smooth={true} duration={500} to={to}>{label}</Link></li>
            ))}
            <li className={classNames({ hidden: !konami })}><a href="/playground">Playground</a></li>
         </ul>
      </nav>
   );
}
