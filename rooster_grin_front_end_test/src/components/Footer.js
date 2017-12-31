import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome'


class Footer extends Component {
  render() {
    return (
      <div className="footer fixed-bottom container-flex">

        <div class="container search-bar">
          <div class="row">
            <div class="col-md-6">
              <div id="custom-search-input">
                <div class="input-group col-md-12">
                  <input type="text" class="form-control input-lg" placeholder="Search" />
                  <span class="input-group-btn">
                    <button class="btn btn-info btn-lg" type="button">
                      <i class="glyphicon glyphicon-search"></i>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-4 footer-links">
              <p>We offer the most effective and popular techniques including Traditional braces, clear ceramic braces, certified Invisalign preferred provider, fun-colored elastics, mouthguards, colored retainers, orthognathic surgery, interdisciplinary cases, state-of-the-art CT imaging, digital X-rays and photos and digital models eliminate taking impressions.</p>
            </div>

            <div className="col-md-4 footer-links">
              <h5 className="title2 justify-text-center">Get in Touch</h5>
               <a href="#" className="fa fa-facebook"></a>
               <a href="#" className="fa fa-twitter"></a>
               <a href="#" className="fa fa-instagram"></a>
               <a href="#" className="fa fa-youtube"></a>
            </div>


            <div className="col-md-4 footer-links">
              <h5 className="title2">Navigate Our Site</h5>
              <ul>
                <li className="footer-paragraph"><a href="#!">About Us</a></li>
                <li className="footer-paragraph"><a href="#!">Meet Our Team</a></li>
                <li className="footer-paragraph"><a href="#!">Our Services</a></li>
                <li className="footer-paragraph"><a href="#!">For Patients</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Footer;