import { Element } from 'react-scroll';
import { useSiteData } from '../../app/dataProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';

function ResumeSection({ title, children }) {
  return (
    <div className={`row ${title.toLowerCase()}`}>
      <div className="three columns header-col">
        <h1><span>{title}</span></h1>
      </div>
      <div className="nine columns main-col">
        <div className="row item">
          <div className="twelve columns">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Resume() {
  const { resume } = useSiteData();

  return (
    <Element name='resume'>
      <section id="resume">
        <div className="row work download">
          <a href={resume.download} className="button">
            <FontAwesomeIcon size='lg' icon={faFileLines} />
            View Resume
          </a>
        </div>

        <ResumeSection title="Work">
          {resume.work.map(job => (
            <div key={job.company + job.title}>
              <h3>{job.company}</h3>
              <p className="info">{job.title}<span>&bull;</span> <em className="date">{job.years}</em></p>
              <p>{job.description}</p>
            </div>
          ))}
        </ResumeSection>

        <ResumeSection title="Education">
          {resume.education.map(edu => (
            <div key={edu.school}>
              <h3>{edu.school}</h3>
              <p className="info">{edu.degree} <span>&bull;</span><em className="date">{edu.graduated}</em></p>
              <p>{edu.description}</p>
            </div>
          ))}
        </ResumeSection>
      </section>
    </Element>
  );
}
