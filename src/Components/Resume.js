import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if (this.props.data) {
      var work = this.props.data.work.map(function (work) {
        return <div key={work.company + work.title}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description}</p>
        </div>
      })
      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p></div>
      })
      var resumeDownload = this.props.data.download;
    }

    return (
      <section id="resume">

        <div className="row work">
          <div className="three columns header-col"></div>
          <div className="nine columns main-col download">
            <div className="row item">
              <div className="twelve columns">
                <p>
                  <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                </p>
              </div>
            </div>
          </div>
        </div>

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

      </section>
    );
  }
}

export default Resume;
