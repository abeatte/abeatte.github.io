import { Element, Link } from 'react-scroll';
import { useSiteData } from '../../app/dataProvider';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialLinks from './SocialLinks';

export default function Intro() {
    const { main } = useSiteData();
    const { name, occupation, description, address } = main;

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
                            <SocialLinks />
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
