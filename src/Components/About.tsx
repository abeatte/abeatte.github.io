import { Element } from 'react-scroll';
import { useSiteData } from '../../app/dataProvider';

export default function About() {
   const siteData = useSiteData();

   const profilepic = "images/" + siteData.main.image;
   const bio = siteData.main.bio;

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
