import { Element } from 'react-scroll';

export default function Secret({ data, konami }: { data: any, konami: boolean }) {
  let img;
  if (data) {
    const image = 'images/' + data.image;
    img = <img alt={data.title} src={image} />;
  }

  return (
    <Element name='secret' className={konami ? "" : "hidden"}>
      <section id="secret">
        <div className="row secret">
          <div className="twelve columns collapsed">
            <h1><span>Top Secret</span></h1>

            <div className="bgrid-thirds s-bgrid-halves cf">
              {img}
            </div>

          </div>
        </div>
      </section>
    </Element>
  );
}
