import { Component } from 'react';
import { Element, Link } from 'react-scroll';

var classNames = require('classnames');

class Header extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var occupation = this.props.data.occupation;
         var description = this.props.data.description;
         var city = this.props.data.address.city;
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
         })
      }

      const nav = (
         <nav id="nav-wrap" className="opaque">

               <Link className="mobile-btn" href="nav-wrap" title="Show navigation">Show navigation</Link>
               <Link className="mobile-btn" href="home" title="Hide navigation">Hide navigation</Link>

               <ul id="nav" className="nav">
                  <li>
                     <Link activeClass="current" smooth={true} duration={500} to="home">Home</Link>
                  </li>
                  <li>
                     <Link activeClass="current" onSetActive={() => console.log('setActive')}smooth={true} duration={500} to="about">About</Link>
                  </li>
                  <li>
                     <Link activeClass="current"  smooth={true} duration={500} to="resume">Resume</Link>
                  </li>
                  <li>
                     <Link className={
                        classNames(
                           this.props.konami ? "" : "hidden"
                        )
                     } smooth={true} duration={500} to="secret">Top Secret</Link>
                  </li>
                  <li>
                     <Link smooth={true} duration={500} to="portfolio">Projects</Link>
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
}

export default Header;
