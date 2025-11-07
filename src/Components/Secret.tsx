import { useContext } from 'react';
import { DataContext } from '../../app/dataProvider';

export default function Secret() {
  const { siteData, loading, error } = useContext(DataContext);

  if (!loading && !error) {
    var profilepic = "images/" + siteData.main.image;
  }

  return (
    <section id="secret">
      <div className="row">
        <div className="two columns">
          <img className="profile-pic" src={profilepic} alt="Art Beatte Profile Pic" />
        </div>
        <div className="nine columns">
          <h1>Top Secret</h1>
        </div>
      </div>
    </section>
  );
}
