import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Jumbotron, Button, Modal } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import NavBar from './components/NavBar'
import CompanyIntro from './components/CompanyIntro'
import GradientBackground from './components/GradientBackground'
import PercentageContainer from './components/PercentageContainer'
import PictureGrid from './components/PictureGrid'
import ContactForm from './components/ContactForm'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import Sticky from 'react-sticky-el';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };

    this._onButtonClick = this._onButtonClick.bind(this);
    this.close = this.close.bind(this)
  }

  _onButtonClick() {
    this.setState({ showModal: true });
  }

  close() {
    this.setState({ showModal: false });
  }

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


      <div>
        <Sticky >
          <header>
            <div className="envelope-pic carousel-caption sticky-button-position" >
              <img onClick={this._onButtonClick} src={require('./images/envelope-icon.svg')} />

            </div>
          </header>
        </Sticky>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Contact Us</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ContactForm />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Submit</Button>
          </Modal.Footer>
        </Modal>
      </div>


        <div>
          <CompanyIntro className="spacing"/>
        </div>

        <div className="spacing">
          <GradientBackground />
        </div>

        <div className="spacing">
          <PercentageContainer />
        </div>

        <div className="spacing">
          <PictureGrid />
        </div>

      </div>
    );
  }
}

export default App;
