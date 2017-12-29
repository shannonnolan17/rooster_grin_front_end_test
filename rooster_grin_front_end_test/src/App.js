import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import NavBar from './components/NavBar'
import CompanyIntro from './components/CompanyIntro'
import GradientBackground from './components/GradientBackground'
import PercentageContainer from './components/PercentageContainer'
import PictureGrid from './components/PictureGrid'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import Sticky from 'react-sticky-el';


class App extends Component {
  render() {
    return (
      <div>
        <div className="navbars fixed-top">
          <NavBar />
        </div>

        <div className="container-flex">
          <Carousel className="carousel" autoPlay={true} showArrows={true} showThumbs={false} infiniteLoop={true}>
            <div>
              <img src={require('./carousel_images/hero-img.jpg')} />
            </div>

            <div>
              <img src={require('./carousel_images/iStock-503300108.jpg')} />
            </div>
          </Carousel>


          <div className="carousel-caption carousel-text">
            <h1 className="carousel-title">Anne O'Day Orthodontics</h1>
            <button type="button" className="carousel-button">Button</button>
          </div>
        </div>

        <Sticky >
          <header>
            <div className="envelope-pic carousel-caption sticky-button-position" >
              <img src={require('./images/envelope-icon.svg')} />
            </div>
          </header>
        </Sticky>

        <div className="company-intro">
          <CompanyIntro />
        </div>

        <div>
          <GradientBackground />
        </div>

        <div>
          <PercentageContainer />
        </div>

        <div>
          <PictureGrid />
        </div>

      </div>
    );
  }
}

export default App;
