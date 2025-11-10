import { Element } from 'react-scroll';
import { useSiteData } from '../../app/dataProvider';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Portfolio() {
  const siteData = useSiteData();

  const projects = siteData.portfolio.projects.map(function (projects) {
    const projectImage = 'images/portfolio/' + projects.image;
    const link = projects.url != null ? <div className="link-icon"><FontAwesomeIcon size='lg' icon={faLink} /></div> : null;

    return <div key={projects.title} className="columns portfolio-item">
      <div className="item-wrap">
        <a target={"_blank"} href={projects.url} title={projects.title}>
          <img alt={projects.title} src={projectImage} />
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>{projects.title}</h5>
              <p>{projects.category}</p>
            </div>
          </div>
          {link}
        </a>
      </div>
    </div>
  })

  return (
    <Element name='portfolio'>
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>My Side Projects</h1>
            <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-halves cf">
              {projects}
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}
