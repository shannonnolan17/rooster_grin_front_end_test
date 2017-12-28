import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import NavBar from './components/NavBar'
import CompanyIntro from './components/CompanyIntro'
import GradientBackground from './components/GradientBackground'
import PercentageContainer from './components/PercentageContainer'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'


class App extends Component {
  render() {
    return (
      <div>
        <div className="navbar fixed-top justify-content-center">
          <NavBar />
        </div>
        <div className="carousel">
          <Carousel autoPlay={true} showArrows={true} showThumbs={false} dynamicHeight={true} infiniteLoop={true}>
            <div>
              <img src={require('./carousel_images/hero-img.jpg')} />
            </div>
            <div>
              <img src={require('./carousel_images/iStock-503300108.jpg')} />
            </div>
          </Carousel>
        </div>
        <div className="company-intro">
          <CompanyIntro />
        </div>

        <div>
          <GradientBackground />
        </div>

        <div>
          <PercentageContainer />
        </div>

      </div>
    );
  }
}

export default App;
