import React, { Component } from 'react';

class PictureGrid extends Component {
  render() {
    return (
      <div>
        <h1 className="title"><span className="first-word">OUR</span> SERVICES</h1>

        <div className="container-flex">
          <div className="row row-spacing">
            <div className="col-md-6 text-column">
              <h1 className="title2">Early Interceptive Treatment</h1>
              <h3 className="subtitle">Nipping early orthodontic problems in the bud</h3>
              <p className="paragraph">The American Association of Orthodontists recommends an orthodontic exam at age 7. At Anne O'Day Orthodontics, we adhere to these standards of care but believe a conservative approach to straighten teeth is best with younger patients. In some cases, correcting dental problems while a child is young allows the teeth to become more stable and less likely to cause problems later. If a child is not a good candidate for early treatment, we'll recommend waiting to begin orthodontic treatment at a later date, when permanent teeth have all come in.</p>
            </div>
            <div className="col-md-6 fade-in">
              <img className="picture-grid img-responsive pull-right" src={require('../images/img1.jpg')} />
            </div>
          </div>

        </div>
          <div className="row row-spacing">
            <div className="col-md-6 fade-in">
              <img className="picture-grid img-responsive pull-left" src={require('../images/img2.jpg')} />
            </div>
            <div className="col-md-6 text-column">
              <h1 className="title2">Adolescent Treatment</h1>
              <h3 className="subtitle">Nipping early orthodontic problems in the bud</h3>
              <p className="paragraph">Adolescence is hard enough. When a teen feels self-conscious about crooked teeth, overbite or underbite, he or she may avoid smiling, become withdrawn, and miss out on social activities. The truth is, crooked teeth, overbite or underbite can have profound effects on a teenager’s self-esteem. That’s where Anne O’Day Orthodontics can help. Dr. O’Day offers a full spectrum of orthodontic solutions to straighten teeth, including Invisalign for teens. And since she is a mom herself, she will treat your teen with the compassion and respect they need to feel good about the orthodontic process, from start to finish!</p>
            </div>
          </div>

      </div>
    );
  }
}

export default PictureGrid;