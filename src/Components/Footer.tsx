import { Element, Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <Element name='footer'>
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <SocialLinks />
            </ul>
            <ul className="copyright">
              <li>&copy; Copyright 2020 Art Beatte IV</li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
            </ul>
          </div>
          <div id="go-top">
            <Link smooth={true} duration={500} title="Back to Top" to="home">
              <FontAwesomeIcon size='sm' icon={faChevronUp} />
            </Link>
          </div>
        </div>
      </footer>
    </Element>
  );
}
