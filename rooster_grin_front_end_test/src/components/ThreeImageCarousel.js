import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import $ from 'jquery'
import Slider from 'react-slick';

class ThreeImageCarousel extends Component {
  render() {
    return (
      <div>


      <Slider dots={true} infinite={true} speed={500} slidesToShow={3} slidesToScroll={1} >
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
        <div><h3>6</h3></div>
      </Slider>


      </div>
    );
  }
}

export default ThreeImageCarousel;