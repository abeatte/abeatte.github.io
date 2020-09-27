import React, { Component } from 'react';

class Secret extends Component {
  render() {

    let img;
    if(this.props.data){
      const image = 'images/'+this.props.data.image;
      img =  <img alt={this.props.data.title} src={image} />;     
    }

    return (
      <section className="hidden" id="secret">

      <div className="row secret">
         <div className="twelve columns collapsed">
            <h1><span>Top Secret</span></h1>

            <div className="bgrid-thirds s-bgrid-halves cf">
              {img}
            </div>
            
          </div>
          
      </div>
   </section>
    );
  }
}

export default Secret;
