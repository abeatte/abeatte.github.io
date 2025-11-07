import { useContext } from 'react';
import { Element, Link } from 'react-scroll';
import { DataContext } from '../../app/dataProvider';

export default function Footer() {
  const { siteData, loading, error } = useContext(DataContext);
  
  if (!loading && !error) {
    var networks = siteData.main.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    })
  }

  return (
    <Element name='footer'>
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {networks}
            </ul>

            <ul className="copyright">
              <li>&copy; Copyright 2020 Art Beatte IV</li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
            </ul>

          </div>
          <div id="go-top">
            <Link smooth={true} duration={500} title="Back to Top" to="home">
              <i className="icon-up-open" />
            </Link>
          </div>
        </div>
      </footer>
    </Element>
  );
}
