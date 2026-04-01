import { Element } from 'react-scroll';
import { useSiteData } from '../../app/dataProvider';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Portfolio() {
  const { portfolio } = useSiteData();

  return (
    <Element name='portfolio'>
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>My Workbench</h1>
            <div id="portfolio-wrapper" className="bgrid-halves s-bgrid-halves cf">
              {portfolio.projects.map(project => (
                <div key={project.title} className="columns portfolio-item">
                  <div className="item-wrap">
                    <a target="_blank" href={project.url} title={project.title}>
                      <img alt={project.title} src={`images/portfolio/${project.image}`} />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{project.title}</h5>
                          <p>{project.category}</p>
                        </div>
                      </div>
                      {project.url != null && (
                        <div className="link-icon"><FontAwesomeIcon size='lg' icon={faLink} /></div>
                      )}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}
