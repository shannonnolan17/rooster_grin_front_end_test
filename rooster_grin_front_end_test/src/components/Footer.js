import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <div className="footer fixed-bottom">

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

        <div className="container-flex">
          <div className="row">
            <div className="col-md-4">
              <h5 className="title2">Footer Content</h5>
              <p className="footer-paragraph">Here you can place more information about the website</p>
            </div>

            <div className="col-md-4">
              <h5 className="title2">Links</h5>
              <ul>
                <li className="footer-paragraph"><a href="#!">Social Media Link 1</a></li>
                <li className="footer-paragraph"><a href="#!">Social Media Link 2</a></li>
                <li className="footer-paragraph"><a href="#!">Social Media Link 3</a></li>
                <li className="footer-paragraph"><a href="#!">Social Media Link 4</a></li>
              </ul>
            </div>


            <div className="col-md-4">
              <h5 className="title2">Links</h5>
              <ul>
                <li className="footer-paragraph"><a href="#!">Social Media Link 1</a></li>
                <li className="footer-paragraph"><a href="#!">Social Media Link 2</a></li>
                <li className="footer-paragraph"><a href="#!">Social Media Link 3</a></li>
                <li className="footer-paragraph"><a href="#!">Social Media Link 4</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;