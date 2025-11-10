import { Element } from 'react-scroll';
import { useSiteData } from '../../app/dataProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';

export default function Resume() {
  const siteData = useSiteData();

  const work = siteData.resume.work.map(function (work) {
    return <div key={work.company + work.title}><h3>{work.company}</h3>
      <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
      <p>{work.description}</p>
    </div>
  })
  const education = siteData.resume.education.map(function (education) {
    return <div key={education.school}><h3>{education.school}</h3>
      <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
      <p>{education.description}</p></div>
  })
  const resumeDownload = siteData.resume.download;

  const downloadResumeView = (
    <div className="row work download">
      <a href={resumeDownload} className="button">
        <FontAwesomeIcon size='lg' icon={faFileLines} />
        View Resume
      </a>
    </div>
  );

  const workView = (
    <div className="row work">
      <div className="three columns header-col">
        <h1><span>Work</span></h1>
      </div>
      <div className="nine columns main-col">
        <div className="row item">
          <div className="twelve columns">
            {work}
          </div>
        </div>
      </div>
    </div>
  );

  const educationView = (
    <div className="row education">
      <div className="three columns header-col">
        <h1><span>Education</span></h1>
      </div>
      <div className="nine columns main-col">
        <div className="row item">
          <div className="twelve columns">
            {education}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Element name='resume'>
      <section id="resume">
        {downloadResumeView}
        {workView}
        {educationView}
      </section>
    </Element>
  );
}
