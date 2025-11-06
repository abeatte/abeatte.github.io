import { Element } from 'react-scroll';

export default function About({ data }: { data: any }) {
   if (data) {
      var profilepic = "images/" + data.image;
      var bio = data.bio;
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
