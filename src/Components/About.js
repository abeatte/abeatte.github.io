import React, { Component } from 'react';
import { Element } from 'react-scroll';

class About extends Component {
   render() {

      if (this.props.data) {
         var profilepic = "images/" + this.props.data.image;
         var bio = this.props.data.bio;
      }

      return (
         <Element name='about'>
            <section id="about">
               <div className="row">
                  <div className="three columns">
                     <img className="profile-pic" src={profilepic} alt="Art Beatte Profile Pic" />
                  </div>
                  <div className="nine columns main-col">
                     <h2>About Me</h2>
                     <p>{bio}</p>
                  </div>
               </div>
            </section>
         </Element>
      );
   }
}

export default About;
