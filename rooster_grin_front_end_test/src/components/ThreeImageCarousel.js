import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';


class ThreeImageCarousel extends Component {

  render() {
    return (
      <div>
       <div className="container">
          <div className="row carousel mx-auto" data-ride="carousel" id="mySlider" data-interval="1500">
            <div className="col-md-4 carousel-item active">
              <img src="//placehold.it/500x300" className="img-fluid" alt="" />
              <div className="carousel-caption">
                  <h3>1 My heading here</h3>
                  <p>My text here</p>
              </div>
            </div>
            <div className="col-md-4 carousel-item active-next">
              <img src="//placehold.it/500x300/bbb" className="img-fluid" alt="" />
              <div className="carousel-caption">
                <h3>2 My heading here</h3>
                <p>My text here</p>
              </div>
            </div>
            <div className="col-md-4 carousel-item active-next">
              <img src="//placehold.it/500x300/999/fff" className="img-fluid" alt="" />
              <div className="carousel-caption">
                <h3>3 My heading here</h3>
                <p>My text here</p>
              </div>
            </div>
            <div className="col-md-4 carousel-item">
              <img src="//placehold.it/500x300/777/fff" className="img-fluid" alt="" />
              <div className="carousel-caption">
                <h3>4 My heading here</h3>
                <p>My text here</p>
              </div>
            </div>
            <div className="col-md-4 carousel-item">
              <img src="//placehold.it/500x300/555/fff" className="img-fluid" alt="" />
              <div className="carousel-caption">
                <h3>5 My heading here</h3>
                <p>My text here</p>
              </div>
            </div>

          </div>
      </div>

      </div>
    );
  }
}

export default ThreeImageCarousel;