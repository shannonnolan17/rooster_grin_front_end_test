import React, { Component } from 'react';

class Carousel extends Component {
  render() {
    return (
      <div>
          <div>
            <img src="hero-img.jpg" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="iStock-503300108.jpg" />
            <p className="legend">Legend 2</p>
          </div>
      </div>
    );
  }
}

export default Carousel;