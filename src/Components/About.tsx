import { Element } from 'react-scroll';
import { useSiteData } from '../../app/dataProvider';

export default function About() {
   const { main } = useSiteData();

   return (
      <Element name='about'>
         <section id="about">
            <div className="row about_container">
                  <div className="columns">
                     <img className="profile-pic" src={`images/${main.image}`} alt="Art Beatte Profile Pic" />
                  </div>
                  <div className="nine columns main-col">
                     <h2>About Me</h2>
                     <p>{main.bio}</p>
                  </div>
               </div>
         </section>
      </Element>
   );
}
