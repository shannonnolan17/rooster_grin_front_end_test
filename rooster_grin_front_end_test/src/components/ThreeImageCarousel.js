import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import $ from 'jquery'
import Slider from 'react-slick';

class ThreeImageCarousel extends Component {
  render() {
      const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
            <div>
              <img className="carousel-image" src={require('../carousel_images/hero-img.jpg')} />
            </div>
             <div>
              <img className="carousel-image" src={require('../carousel_images/hero-img.jpg')} />
            </div>
             <div>
              <img className="carousel-image" src={require('../carousel_images/hero-img.jpg')} />
            </div>
             <div>
              <img className="carousel-image" src={require('../carousel_images/hero-img.jpg')} />
            </div>
        </Slider>
      </div>
    );
  }
}

export default ThreeImageCarousel;