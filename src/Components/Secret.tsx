import { useSiteData } from "../../app/dataProvider";

export default function Secret() {
  const { main } = useSiteData();

  return (
    <section id="secret">
      <div className="row">
        <div className="two columns">
          <img className="profile-pic" src={`images/${main.image}`} alt="Art Beatte Profile Pic" />
        </div>
        <div className="nine columns">
          <h1>Top Secret</h1>
        </div>
      </div>
    </section>
  );
}
