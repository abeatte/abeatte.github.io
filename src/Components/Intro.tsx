
import { Element, Link } from 'react-scroll';
import { useSiteData } from '../../app/dataProvider';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

var classNames = require('classnames');

export default function Intro() {
    const siteData = useSiteData();

    const { name, occupation, description, address } = siteData.main;
    const networks = siteData.main.social.map(network =>
        (<li key={network.name}><a href={network.url}><span><FontAwesomeIcon icon={network.className} /></span></a></li>)
    );

    return (
        <Element name='home'>
            <header id="home">
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
                    <Link smooth={true} duration={500} to="about"><FontAwesomeIcon icon={faCircleChevronDown} /></Link>
                </p>
            </header>
        </Element>
    );
}